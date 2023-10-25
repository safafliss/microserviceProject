const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./route/authgo");
const mongoose = require("mongoose");
const userRouter = require("./route/userRoute");
const session = require("express-session");
const dotenv = require("dotenv");

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Use express-session for session management
app.use(
  session({
    secret: "abc1234",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// // Use cookie-session for storing session data
// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 1000 })
// );

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// Connecting to MongoDB
mongoose
  .connect("mongodb://mongo:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Enable parsing of JSON request bodies
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/user", userRouter);

const Eureka = require('eureka-js-client').Eureka;
const eurekaHost = 'discovery'; 
const eurekaPort = 8761;
const axios = require('axios');

async function checkEurekaServerAccessibility(eurekaServerUrl) {
  try {
    const response = await axios.get(eurekaServerUrl);
    if (response.status === 200) {
      console.log(`Eureka server at ${eurekaServerUrl} is accessible.`);
    } else {
      console.log(`Eureka server at ${eurekaServerUrl} returned status ${response.status}.`);
    }
  } catch (error) {
    console.error(`Error accessing Eureka server at ${eurekaServerUrl}:`, error.message);
  }
}

const eurekaServerUrl = 'http://discovery:8761';
checkEurekaServerAccessibility(eurekaServerUrl);

const client = new Eureka({
  instance: {
    app: "user-service",
    hostName: "app",
    ipAddr:"app",
    port: {
      $: 3000,
      "@enabled": "true",
    },
    vipAddress: "user-service",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: eurekaHost,
    port: eurekaPort,
    servicePath: '/eureka/apps',
    maxRetries: 10,
    requestRetryDelay: 2000,
  },
});

// Set the log level to debug
client.logger.level('debug');

// Start the Eureka client
client.start((error) => {
  if (error) {
    console.error("Eureka registration failed:", error);
  } else {
    console.log("User service registered with Eureka");
  }
});

// Listen for Eureka 'started' event
client.on('started', () => {
  console.log("Eureka host: " + eurekaHost);
});
