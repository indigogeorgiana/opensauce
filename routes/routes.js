const express = require('express')
const router = express.Router()
const getData = require('../getData.js')
const addData = require('../addData.js')

router.get('/', (req, res) => {
  res.render('./templates/index')
})

router.get('/cohort', (req, res) => {
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const peeps = JSON.parse(data)
      res.render('./templates/cohort', peeps)
    }
  })
})

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const peeps = JSON.parse(data)
      const person = peeps.peeps.find(peep => peep.id === id)
      res.render('./templates/profile', person)
    }
  })
})

router.get('/add', (req, res) => {
  res.render('./templates/addProfile')
})

router.post('/add', (req, res) => {
  console.log("hi")
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const personData = JSON.parse(data)
      const id = personData.peeps.length + 1
      const newPerson = {
        id: id,
        name: req.body.name,
        image: req.body.image,
        short: req.body.short,
        age: req.body.age,
        sauce: req.body.sauce,
        preferedP: req.body.preferedP,
        mantr: req.body.mantra,
        favPets: req.body.favPets,
        children: req.body.children,
        hobbies: req.body.hobbies,
        code: req.body.code,
        color: req.body.color,
        movie: req.body.movie,
        music: req.body.music,
        website: req.body.website,
        personal: req.body.personal
      }
      personData.peeps.push(newPerson)
      addData(personData, (err) => {
        if (err) {
          res.send('unable to save the file').status(500)
        } else {
          console.log(personData)
          res.render('./templates/cohort')
        }
      })
    }
  })
})

module.exports = router
