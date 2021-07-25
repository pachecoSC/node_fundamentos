const bcrypt = require('bcrypt')
// import * as bcrypt from 'bcrypt'

const pass = 'chris12**'

bcrypt.hash(pass, 5, (err, hash) => {
  err ? console.error(err.message) : console.log(hash)

  //comparar hash con la password usando callback
  bcrypt.compare(pass, hash, (err, res) => {
    if (err) {
      console.error(err.message)
    }
    res ? console.log('si corresponde') : console.log('no corresponde')
  })

  //comparar hash con la password usando promise
  bcrypt.compare(pass, hash)
    .then((data) => {
      (data)?console.log('corresponde'):console.log('no corresponde')
    })
    .catch((error) => {
      console.error('Ups!',error.message)
    })
})
