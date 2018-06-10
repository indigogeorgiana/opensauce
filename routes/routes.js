const express = require('express')
const router = express.Router()
const getData = require('../getData.js')
const addData = require('../addData.js')

router.get('/', (req, res) => {
  res.render('./templates/index')
})

module.exports = router
