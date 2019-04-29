'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');
var router = express.Router();

var options = {
  swaggerDefinition: {
    info: {
      title: 'STTM - REST',
      version: '1.0.0',
      description: 'STTM Mapper Rest API'
      // contact: {
      //   email: '3ankur.v@gmail.com'
      // }
    },
    tags: [(_ref = {
      name: 'stocks1',
      description: 'Stocks API'
    }, _defineProperty(_ref, 'name', 'Mapping'), _defineProperty(_ref, 'description', 'Mapping API'), _ref)],
    schemes: ['http'],
    // host: 'localhost:3000',
    basePath: '/api'
  },
  apis: ['./api/controllers/mapping.js', './api/models/sttm-model.js']
  //'./api/controllers/stocks.js', './api/models/stock-model.js',

};var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var swaggerSpec = swaggerJSDoc(options);
require('swagger-model-validator')(swaggerSpec);

router.get('/json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

function validateModel(name, model) {
  var responseValidation = swaggerSpec.validateModel(name, model, false, true);
  if (!responseValidation.valid) {
    console.error(responseValidation.errors);
    throw new Error('Model doesn\'t match Swagger contract');
  }
}

module.exports = {
  router: router,
  validateModel: validateModel
};
//# sourceMappingURL=swagger.js.map