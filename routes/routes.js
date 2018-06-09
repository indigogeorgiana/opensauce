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
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      let personData = JSON.parse(data)
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
      personData = JSON.stringify(personData, null, 2)
      addData(personData, (err, data) => {
        if (err) {
          res.send('unable to save the file')
        } else {
          res.redirect('/cohort')
        }
      })
    }
  })
})

router.get('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const peopleData = JSON.parse(data)
      const peepsData = peopleData.peeps.find(pup => pup.id === id)
      res.render('./templates/editProfile', peepsData)
    }
  })
})

router.post('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      let personData = JSON.parse(data)
      const peepsData = personData.peeps.find(peep => peep.id === id)
      peepsData.name = req.body.name
      peepsData.image = req.body.image
      peepsData.short = req.body.short
      peepsData.age = req.body.age
      peepsData.sauce = req.body.sauce
      peepsData.preferedP = req.body.preferedP
      peepsData.mantr = req.body.mantra
      peepsData.favPets = req.body.favPets
      peepsData.children = req.body.children
      peepsData.hobbies = req.body.hobbies
      peepsData.code = req.body.code
      peepsData.color = req.body.color
      peepsData.movie = req.body.movie
      peepsData.music = req.body.music
      peepsData.website = req.body.website
      peepsData.personal = req.body.personal
      personData = JSON.stringify(personData, null, 2)
      addData(personData, (err, data) => {
        if (err) {
          res.send('unable to save the file').status(500)
        } else {
          res.redirect('/profile/' + id)
        }
      })
    }
  })
})

router.get('/gamez', (req, res) => {
  res.render('./templates/gamez')
})

module.exports = router
