const Knex = require('knex')
const knexConfig = require('./knexfile')
const { Model } = require('objection')
const repl = require('repl')
const fs = require('fs')
const path = require('path')

const knex = Knex(knexConfig.development)
Model.knex(knex)


var normalizedPath = require("path").join(__dirname, "routes");

fs.readdirSync(path.join(__dirname, 'src/model')).forEach(file => {
  const name = file.replace(/\.js$/, '')
  global[name] = require(`./src/model/${file}`)
})

repl.start({ prompt: 'app > ' })
