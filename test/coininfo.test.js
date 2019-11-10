//let chai = require('chai')
//let expect = chai.expect
let coininfo = require('coininfo')
console.log('============', "Coininfoplus Coininfo")
/*describe('coininfoplus', () => {
  it('creates 273 coins', function(){
   expect(Object.keys(coininfo.supportedCoins).length).to.eq(273)
  })
})
*/
console.log('============', "Litecoin info")
console.dir(coininfo('LTC'))
console.log('============', "Pandacoin info")
console.dir(coininfo('PND'))
