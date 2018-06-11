const fs = require('fs')
const path = require('path')

function getCal (callback) {
  const filePath = path.join(__dirname, 'calendar.json')
  fs.readFile(filePath, 'utf8', callback)
}

module.exports = getCal
