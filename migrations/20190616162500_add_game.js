exports.up = knex => {
  return knex.schema.createTable('games', table => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = knex => {
  return knex.schema.dropTableIfExists('games')
}
