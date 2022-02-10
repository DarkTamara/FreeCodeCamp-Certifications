function telephoneCheck(str) {
//formats
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
let ReGex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
return ReGex.test(str)


  }
  
  telephoneCheck("1 555 555 5555");