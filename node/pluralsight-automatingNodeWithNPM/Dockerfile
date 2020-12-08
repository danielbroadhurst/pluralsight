FROM node:12

# Create App DIR
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

# Copy the app Source
COPY . .

EXPOSE 5000

CMD ["nodemon", "-L", "index.js"]
