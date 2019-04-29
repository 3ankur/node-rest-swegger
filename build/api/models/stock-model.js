"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @swagger
 * definitions:
 *   Stock:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - currentPrice
 *       - lastUpdate
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       currentPrice:
 *         type: number
 *       lastUpdate:
 *         type: number
 *   Stocks1:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Stock'
 */
var Stock = function Stock(id, name, currentPrice, lastUpdate) {
  _classCallCheck(this, Stock);

  this.id = id;
  this.name = name;
  this.currentPrice = currentPrice;
  this.lastUpdate = lastUpdate;
};

exports.default = Stock;
//# sourceMappingURL=stock-model.js.map