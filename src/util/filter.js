import Vue from 'vue'

Vue.filter('uppercase', function (value) {
  return value.toString().toUpperCase()
})

Vue.filter('phoneStar', function (val) {
  if (val !== '' && val !== undefined && val !== null) {
    var reg = /^(\d{3})\d{4}(\d{4})$/
    return val.replace(reg, '$1****$2')
  }
})
