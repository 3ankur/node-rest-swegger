'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stockModel = require('../models/stock-model');

var _stockModel2 = _interopRequireDefault(_stockModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StocksMemoryDAO = function () {
  function StocksMemoryDAO() {
    _classCallCheck(this, StocksMemoryDAO);

    this.data = new Map();

    this.createStock(1, 'AAPL', 161.17, Date.now());
    this.createStock(2, 'MSFT', 72.72, Date.now());
    this.createStock(3, 'GOOG', 930.38, Date.now());
  }

  _createClass(StocksMemoryDAO, [{
    key: 'createStock',
    value: function createStock(id, name, currentPrice, lastUpdate) {
      this.data.set(id, new _stockModel2.default(id, name, currentPrice, lastUpdate));
    }
  }, {
    key: 'retrieveAll',
    value: function retrieveAll() {
      return Array.from(this.data.values());
    }
  }, {
    key: 'retrieve',
    value: function retrieve(id) {
      if (this.data.has(id)) {
        return this.data.get(id);
      } else {
        throw new Error('Stock with id ' + id + ' not found');
      }
    }
  }, {
    key: 'update',
    value: function update(id, lastUpdate) {
      if (this.data.has(id)) {
        var stock = this.data.get(id);
        stock.lastUpdate = lastUpdate;
        return this.retrieve(stock.id);
      } else {
        throw new Error('Stock with id ' + id + ' not found');
      }
    }
  }, {
    key: 'create',
    value: function create(stock) {
      if (this.data.has(stock.id)) {
        throw new Error('An stock with id ' + stock.id + ' already exists');
      } else {
        this.createStock(stock.id, stock.name, stock.currentPrice, stock.lastUpdate);
        return this.retrieve(stock.id);
      }
    }
  }]);

  return StocksMemoryDAO;
}();

exports.default = StocksMemoryDAO;
//# sourceMappingURL=stocks-memory-dao.js.map