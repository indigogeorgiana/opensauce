const request = require('supertest')
const cheerio = require('cheerio')
const routes = require('../routes/routes')
const server = require('../server')

  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const label = $('label[for=name]').text()
      expect(label).toMatch('Name')
      done(err)
    })
})

test('test route to /cohort', done => {
  request(server)
    .get('/cohort')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const div = $('h1').text()
      expect(div).toMatch('Mamaku')
      done(err)
    })
})

 test('test route to /profile', done => {
   request(server)
    .get('/profile')
    .end((err, res) => {
       const $ = cheerio.load(res.text)
        const h5 = $('div').text()
       expect(h5).toMatch('Contact')
       done(err)
    })
})



