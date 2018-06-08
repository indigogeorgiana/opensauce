const request = require('supertest')
const cheerio = require('cheerio')
const routes = require('../routes/routes')
const server = require('../server')
const getData = require('../getData')

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
    .get('/profile/1')
    .end((err, res) => {
       const $ = cheerio.load(res.text)
        const h5 = $('h5').text()
       expect(h5).toMatch('Contact')
       done()
    })
})

test('GET profile add page form', done => {
  request(server)
    .get('/add')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const add = $('input').attr('placeholder')
      console.log(h1)
      expect(add).toMatch('Add name here')
      done()
    })
})




