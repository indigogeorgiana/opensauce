const request = require('supertest')
const cheerio = require('cheerio')
const routes = require('../routes/routes')
const server = require('../server')

test('GET root route page', done => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const title = $('title').text()
      expect(title).toMatch('Open Sauce')
      done(err)
    })
})
