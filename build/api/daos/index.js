'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstance = getInstance;

var _stocksMemoryDao = require('./stocks-memory-dao');

var _stocksMemoryDao2 = _interopRequireDefault(_stocksMemoryDao);

var _sttmDao = require('./sttm-dao');

var _sttmDao2 = _interopRequireDefault(_sttmDao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memoryDAO = null;

function getInstance(type) {
  if (type === 'memory') {
    if (memoryDAO === null) {
      memoryDAO = new _stocksMemoryDao2.default();
    }
    return memoryDAO;
  }
  if (type === 'mapping') {
    console.log("its mapping ===>");
    // if (memoryDAO === null) {

    // }
    return new _sttmDao2.default();
  }
  throw new Error('Unknown DAO type ' + type);
}
//# sourceMappingURL=index.js.map