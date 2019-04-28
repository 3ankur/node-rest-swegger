/**
 * @swagger
 * definitions:
 *   mapping:
 *     type: object
 *     required:
 *       - id
 *       - sponserName
 *       - sourceSystem
 *       - mapStatus
 *     properties:
 *       id:
 *         type: number
 *       sponserName:
 *         type: string
 *       sourceSystem:
 *         type: string
 *       entityMap:
 *         type: string
 *       mapStatus:
 *         type: string
 *       mapComplitionPer:
 *         type: string
 *   mappings:
 *     type: array
 *     items:
 *       $ref: '#/definitions/mapping'
 */
export default class Sttm {
    constructor (id, sponserName, sourceSystem, entityMap,mapStatus,mapComplitionPer) {
      this.id = id
      this.sponserName = sponserName
      this.sourceSystem = sourceSystem
      this.entityMap = entityMap
      this.mapStatus = mapStatus
      this.mapComplitionPer = mapComplitionPer
    }
  }
  