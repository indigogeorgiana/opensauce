const express = require('express')
const router = express.Router()
const getData = require('../getData.js')
const addData = require('../addData.js')

router.get('/', (req, res) => {
  res.render('./templates/index')
})

router.get('/gamez', (req, res) => {
  res.render('./templates/gamez')
})

router.get('/calendar', (req, res) => {
  res.render('./templates/calendar')
})
module.exports = router
