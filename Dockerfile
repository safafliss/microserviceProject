FROM openjdk:8
EXPOSE 8088
ADD target/OffreMSs-0.0.1-SNAPSHOT.jar OffreMSs.jar
ENTRYPOINT ["java","-jar","OffreMSs.jar"]
