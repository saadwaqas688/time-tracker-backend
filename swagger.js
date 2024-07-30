const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API documentation for user authentication and management.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              example: '60d5ec49d5b73a3c3c8b8a40',
            },
            name: {
              type: 'string',
              example: 'Project A',
            },
            description: {
              type: 'string',
              example: 'Description of Project A',
            },
            teamId: {
              type: 'string',
              example: '60d5ec49d5b73a3c3c8b8a41',
            },
          },
        },
        Task: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              example: '60d5ec49d5b73a3c3c8b8a42',
            },
            name: {
              type: 'string',
              example: 'Task A',
            },
            description: {
              type: 'string',
              example: 'Description of Task A',
            },
            projectId: {
              type: 'string',
              example: '60d5ec49d5b73a3c3c8b8a40',
            },
            userId: {
              type: 'string',
              example: '60d5ec49d5b73a3c3c8b8a43',
            },
          },
        },
      },
    },
  };
  

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, './routes/*.js')], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
