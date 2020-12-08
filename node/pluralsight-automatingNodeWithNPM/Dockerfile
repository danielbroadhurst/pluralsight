FROM node:12

# Create App DIR
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy the app Source
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
