const request = require('supertest')
const cheerio = require('cheerio')
const routes = require('../routes/routes')
const server = require('../server')

test('test index /', done => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const label = $('label[for=name]').text()
      expect(label).toMatch('Name')
      done()
    })
  })
  
test('test route to /cohort', done => {
  request(server)
    .get('/cohort')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const div = $('h1').text()
      expect(div).toMatch('MAMAKU 2018')
      done()
    })
})

 test('test route to /profile', done => {
   request(server)
    .get('/profile')
    .end((err, res) => {
       const $ = cheerio.load(res.text)
        const h5 = $('h5').text()
       expect(h5).toMatch('Contact')
       done()
    })
})

test('test route to add profile', done => {
  request(server)
   .get('/add')
   .end((err, res) => {
      const $ = cheerio.load(res.text)
       const placeholder = $('<form><input placement="Add name here" type="text" name="name"/></form>').serializeArray()
      
       expect(placeholder).toMatch('')
      done()
   })
})

// test('GET puppies edit page form', done => {
//   request(server)
//     .get('/puppies/edit/1')
//     .end((err, res) => {
//       const $ = cheerio.load(res.text)
//       const h1 = $('label').attr('for')
//       console.log(h1)
//       expect(h1).toMatch('name')
//       done(err)
//     })
// })



