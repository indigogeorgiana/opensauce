const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('./templates/index')
})

router.get('/cohort', (req, res) => {
  res.render('./templates/cohort')
})
router.get('/cohort', (req, res) => {
  res.render('./templates/cohort')
})

// router.get('/')

module.exports = router
