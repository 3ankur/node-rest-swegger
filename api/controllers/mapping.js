import * as DAO from '../daos/'
import * as Swagger from './swagger'

const dao = DAO.getInstance('mapping')

const express = require('express')
const router = express.Router()

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
router.get('/', (req, res, next) => {
  const response = dao.retrieveAll()
  Swagger.validateModel('mappings', response)
  //res.send(response)
  res.json({"data":response});
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
router.post('/upload', (req, res, next) => {
    //  const response = dao.create(req.body)
    //  Swagger.validateModel('Stock', response)
      res.json({"data":[{"name":"file1"}]})
    })

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
router.get('/:id', (req, res, next) => {
   // const response = dao.retrieve(parseInt(req.params.id, 10))
   // Swagger.validateModel('Stock', response)
    res.json({"data":{"name":"Protocol Name"}})
  })    

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
router.delete('/:id', (req, res, next) => {
    // const response = dao.retrieve(parseInt(req.params.id, 10))
    // Swagger.validateModel('Stock', response)
     res.json({"meaage":"Mapping deleted successfully"})
   })


module.exports = router
