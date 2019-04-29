'use strict';

var _daos = require('../daos/');

var DAO = _interopRequireWildcard(_daos);

var _swagger = require('./swagger');

var Swagger = _interopRequireWildcard(_swagger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dao = DAO.getInstance('mapping');

var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /mapping:
 *   get:
 *     description: Retrieve the list of uploaded maps
 *     tags:
 *       - Mapping
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: mapping
 *         schema:
 *           $ref: '#/definitions/mappings'
 */
router.get('/', function (req, res, next) {
  var response = dao.retrieveAll();
  Swagger.validateModel('mappings', response);
  //res.send(response)
  res.json({ "data": response });
});

/**
 * @swagger
 * /mapping/upload:
 *   post:
 *     description: Upload new mapping files
 *     tags:
 *       - Mapping
 *     produces:
 *       - application/json
 *     consumes:
 *        - multipart/form-data
 *        - application/x-www-form-urlencoded
 *        - binary
 *     parameters:
 *         - in: formData
 *           name: file
 *           description: The file to upload
 *           type: file
 *           required: true
 *     responses:
 *       200:
 *         description: files data
 */
router.post('/upload', function (req, res, next) {
  //  const response = dao.create(req.body)
  //  Swagger.validateModel('Stock', response)
  res.json({ "data": [{ "name": "file1" }] });
});

/**
 * @swagger
 * /mapping/{id}:
 *   get:
 *     description: Retrieve an specific mapping
 *     tags:
 *       - Mapping
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of the mapper to retrieve
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: mapping details
 */
router.get('/:id', function (req, res, next) {
  // const response = dao.retrieve(parseInt(req.params.id, 10))
  // Swagger.validateModel('Stock', response)
  res.json({ "data": { "name": "Protocol Name" } });
});

/**
* @swagger
* /mapping/{id}:
*   delete:
*     description: delete an specific mapping
*     tags:
*       - Mapping
*     produces:
*       - application/json
*     parameters:
*       - name: id
*         description: id of the mapper to delete
*         in: path
*         required: true
*         type: number
*     responses:
*       200:
*         description: delete mapping summary
*/
router.delete('/:id', function (req, res, next) {
  // const response = dao.retrieve(parseInt(req.params.id, 10))
  // Swagger.validateModel('Stock', response)
  res.json({ "meaage": "Mapping deleted successfully" });
});

module.exports = router;
//# sourceMappingURL=mapping.js.map