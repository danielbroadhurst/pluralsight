# Integrating with API Gateway

## Creating an HTTP API

Example File: ```./src/infrastructure/lib/core/api.ts```

## Configuring the Web App

Uses the WebAppConfig add-on to generate a file which holds the configuration values such as the api endpoint.

Config file is added to the ```./src/public/index.html``` file.

Example File: ```./src/infrastructure/lib/core/webapp.ts```

## Calling the API from the Web App

Sets the ```SERVICES_HOST``` variable from the config.js file which is added to the web app.

Example File: ```./src/webapp/src/services/index.js```

## Creating the Moderation Service

Creating an SQS integration with an API Gateway.

Example File: ```./src/infrastructure/lib/core/api.ts```

Example File: ```./src/webapp/src/services/index.js```