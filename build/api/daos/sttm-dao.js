'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sttmModel = require('../models/sttm-model');

var _sttmModel2 = _interopRequireDefault(_sttmModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SttmDAO = function () {
  function SttmDAO() {
    _classCallCheck(this, SttmDAO);

    this.data = new Map();

    this.createMapping(1, 'Company_Name_1', "CTMS", "STUDY", "DRAFT", "20%");
    this.createMapping(2, 'Company_Name_2', "CTMS", "STUDY", "Inprogress", "20%");
    this.createMapping(3, 'Company_Name_3', "CTMS", "STUDY", "DRAFT", "20%");
    this.createMapping(4, 'Company_Name_4', "CTMS", "STUDY", "DRAFT", "20%");
    this.createMapping(5, 'Company_Name_5', "CTMS", "STUDY", "Completed", "100%");
  }

  _createClass(SttmDAO, [{
    key: 'createMapping',
    value: function createMapping(id, sponserName, sourceSystem, entityMap, mapStatus, mapComplitionPer) {
      this.data.set(id, new _sttmModel2.default(id, sponserName, sourceSystem, entityMap, mapStatus, mapComplitionPer));
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

  return SttmDAO;
}();

exports.default = SttmDAO;
//# sourceMappingURL=sttm-dao.js.map