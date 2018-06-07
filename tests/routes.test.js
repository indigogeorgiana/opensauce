const request = require('supertest')
const cheerio = require('cheerio')
const server = require('../server')

test('test route to homepage', done => {
// Arrange
// Act
  request(server)
    .get('/')
    .end((err, res) => {
// Assert
      expect(err).toBeFalsy()
      expect(res.text).toBe(expected)
    })
})