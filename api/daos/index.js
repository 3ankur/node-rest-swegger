import StocksMemoryDAO from './stocks-memory-dao'
import SttmMemoryDAO from './sttm-dao'
let memoryDAO = null

export function getInstance (type) {
  if (type === 'memory') {
    if (memoryDAO === null) {
      memoryDAO = new StocksMemoryDAO()
    }
    return memoryDAO
  }
  if (type === 'mapping') {
    console.log("its mapping ===>");
    // if (memoryDAO === null) {
      
    // }
    return  new  SttmMemoryDAO()
  }
  throw new Error('Unknown DAO type ' + type)
}
