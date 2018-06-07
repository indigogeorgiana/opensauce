const request = require('supertest')
const cheerio = require('cheerio')
const routes = require('../routes/routes')
const server = require('../server')

test('all systems go', (done) => {
  expect(true).toBeTruthy()
  done()
})

test('test route to index', done => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const label = $('label[for=name]').text()
      expect(label).toMatch('Name')
      done(err)
    })
})

test('test route / to /cohort', done => {
  request(server)
    .get('/cohort')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const header = $('')
      expect().toMatch('')
      done(err)
    })
})

// test('test route /cohort to /profile', done => {
//   request(server)
//     .get('/profile')
//     .end((err, res) => {
//       const $ = cheerio.load(res.text)
//       const p = $('p').text()
//       expect(p).toMatch('Name')
//       done(err)
//     })
// })