const express = require('express')
const router = express.Router()

const options = {
  swaggerDefinition: {
    info: {
      title: 'STTM - REST',
      version: '1.0.0',
      description: 'STTM Mapper Rest API',
      // contact: {
      //   email: '3ankur.v@gmail.com'
      // }
    },
    tags: [
      {
        name: 'stocks1',
        description: 'Stocks API',
        name: 'Mapping',
        description: 'Mapping API'
      }
    ],
    schemes: ["https"],
   // host: 'localhost:3000',
    basePath: '/api'
  },
  apis: ['./api/controllers/mapping.js', './api/models/sttm-model.js']
}
//'./api/controllers/stocks.js', './api/models/stock-model.js',

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = swaggerJSDoc(options)
require('swagger-model-validator')(swaggerSpec)

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function validateModel (name, model) {
  const responseValidation = swaggerSpec.validateModel(name, model, false, true)
  if (!responseValidation.valid) {
    console.error(responseValidation.errors)
    throw new Error(`Model doesn't match Swagger contract`)
  }
}

module.exports = {
  router,
  validateModel
}
