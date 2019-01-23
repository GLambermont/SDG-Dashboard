// Data Service

import { Subject } from 'rxjs'

const DataSharing = {
  install (Vue, options) {
    Vue.prototype.$dsObservables = options.list || []
    
    Vue.prototype.$dsObservableExists = function (channel) {
      let observableExists = false
      this.$dsObservables.forEach(element => observableExists = (element[0] === channel))
      return observableExists
    }

    Vue.prototype.$dsGetObservable = function (channel) {
      let el = null
      if (!this.$dsObservableExists(channel)) { this.$dsPushUpdate(channel, null) }
      this.$dsObservables.forEach(element => { 
        if (element[0] === channel) el = element[1].asObservable() 
      })
      return el
    }

    Vue.prototype.$dsPushUpdate = function (channel, update) {
      if (!this.$dsObservableExists(channel)) {
        this.$dsObservables.push([channel, new Subject()])
      }
      this.$dsObservables.forEach(items => { if (items[0] === channel) items[1].next(update) })
    }
  }
}

export default DataSharing
