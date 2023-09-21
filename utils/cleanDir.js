const fs = require('fs')
const path = require('path')

const removeDir = () => {
  const pathFile = path.join(__dirname, '../uploads')
  if (fs.existsSync(pathFile)) {
    const files = fs.readdirSync(pathFile)
    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(pathFile + "/" + filename).isDirectory()) {
          removeDir(pathFile + "/" + filename)
        } else {
          fs.unlinkSync(pathFile + "/" + filename)
        }
      })
    }
    console.log("Directory path successfully removed!")
  } else {
    console.error("Directory path not found.")
  }
}

module.exports = removeDir
