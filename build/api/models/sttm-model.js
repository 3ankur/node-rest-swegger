"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Sttm = function Sttm(id, sponserName, sourceSystem, entityMap, mapStatus, mapComplitionPer) {
  _classCallCheck(this, Sttm);

  this.id = id;
  this.sponserName = sponserName;
  this.sourceSystem = sourceSystem;
  this.entityMap = entityMap;
  this.mapStatus = mapStatus;
  this.mapComplitionPer = mapComplitionPer;
};

exports.default = Sttm;
//# sourceMappingURL=sttm-model.js.map