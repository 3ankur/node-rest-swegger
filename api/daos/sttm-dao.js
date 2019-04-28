import Model from '../models/sttm-model'

export default class SttmDAO {
  constructor () {
    this.data = new Map()

    this.createMapping(1, 'Company_Name_1',"CTMS", "STUDY","DRAFT","20%")
    this.createMapping(2, 'Company_Name_2',"CTMS", "STUDY","Inprogress","20%")
    this.createMapping(3, 'Company_Name_3',"CTMS", "STUDY","DRAFT","20%")
    this.createMapping(4, 'Company_Name_4',"CTMS", "STUDY","DRAFT","20%")
    this.createMapping(5, 'Company_Name_5',"CTMS", "STUDY","Completed","100%")
    
  }

  createMapping (id, sponserName, sourceSystem, entityMap,mapStatus,mapComplitionPer) {
    this.data.set(id, new Model(id, sponserName, sourceSystem, entityMap,mapStatus,mapComplitionPer));
  }

  retrieveAll () {
    return Array.from(this.data.values())
  }

  retrieve (id) {
    if (this.data.has(id)) {
      return this.data.get(id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  update (id, lastUpdate) {
    if (this.data.has(id)) {
      const stock = this.data.get(id)
      stock.lastUpdate = lastUpdate
      return this.retrieve(stock.id)
    } else {
      throw new Error(`Stock with id ${id} not found`)
    }
  }

  create (stock) {
    if (this.data.has(stock.id)) {
      throw new Error(`An stock with id ${stock.id} already exists`)
    } else {
      this.createStock(stock.id, stock.name, stock.currentPrice, stock.lastUpdate)
      return this.retrieve(stock.id)
    }
  }
}
