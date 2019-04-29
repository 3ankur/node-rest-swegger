'use strict';

var _daos = require('../daos/');

var DAO = _interopRequireWildcard(_daos);

var _swagger = require('./swagger');

var Swagger = _interopRequireWildcard(_swagger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dao = DAO.getInstance('memory');

var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /stocks:
 *   get:
 *     description: Retrieve the full list of stocks
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: stocks12
 *         schema:
 *           $ref: '#/definitions/Stocks1'
 */
router.get('/', function (req, res, next) {
  var response = dao.retrieveAll();
  Swagger.validateModel('Stock', response);
  res.send(response);
});

/**
 * @swagger
 * /stocks/{id}:
 *   get:
 *     description: Retrieve an specific stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the stock to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: stock
 *         schema:
 *           $ref: '#/definitions/Stock'
 */
router.get('/:id', function (req, res, next) {
  var response = dao.retrieve(parseInt(req.params.id, 10));
  Swagger.validateModel('Stock', response);
  res.send(response);
});

/**
 * @swagger
 * definitions:
 *   TimeStamp:
 *     type: object
 *     required:
 *       - lastUpdate
 *     properties:
 *       lastUpdate:
 *         type: number
 */

/**
 * @swagger
 * /stocks/{id}:
 *   put:
 *     description: Update lastUpdate field of an stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the stock to update
 *         in: path
 *         required: true
 *         type: number
 *       - name: lastUpdate
 *         description: timestamp to use as stock's lastUpdate field
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/TimeStamp'
 *     responses:
 *       200:
 *         description: updated stock
 *         schema:
 *           $ref: '#/definitions/Stock'
 */
router.put('/:id', function (req, res, next) {
  Swagger.validateModel('TimeStamp', req.body);
  var response = dao.update(parseInt(req.params.id, 10), req.body.lastUpdate);
  Swagger.validateModel('Stock', response);
  res.send(response);
});

/**
 * @swagger
 * /stocks:
 *   post:
 *     description: Create a new stock
 *     tags:
 *       - stocks
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: Stock object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Stock'
 *     responses:
 *       200:
 *         description: new stock
 *         schema:
 *           $ref: '#/definitions/Stock'
 */
router.post('/', function (req, res, next) {
  Swagger.validateModel('Stock', req.body);
  var response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);
});

module.exports = router;
//# sourceMappingURL=stocks.js.map