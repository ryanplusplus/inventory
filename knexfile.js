const common = {}

module.exports = {
  development: {
    ...common,
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: 'db/dev.sqlite'
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      }
    }
  },

  production: {
    ...common,
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
