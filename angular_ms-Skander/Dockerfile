FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

COPY . /app/

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
