const request = require('supertest')
const cheerio = require('cheerio')
const server = require('../server')

test('GET root route page', done => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $('').text()
      expect(h1).toMatch('')
      done(err)
    })
})

test('GET profiles page', done => {
  request(server)
    .get(' ')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $(' ').text()
      expect(h1).toMatch(' ')
      done(err)
    })
})

test('GET cohort page', done => {
  request(server)
    .get(' ')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $(' ').text()
      expect(h1).toMatch(' ')
      done(err)
    })
})

test('GET edit profile page form', done => {
  request(server)
    .get(' ')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $(' ').attr(' ')
      console.log(h1)
      expect(h1).toMatch(' ')
      done(err)
    })
})

test('POST to data json and redirect', done => {
  request(server)
    .post(' ')
    .send(' ')
    .end((err, res) => {
      expect(res.statusCode).toBe(302)
      expect(res.text).toBe('v ')
      done(err)
    })
})
