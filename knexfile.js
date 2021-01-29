// Update with your config settings.


module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipe.db3",
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {conn.run("PRAGMA foreign_keys = ON", done)},
    },
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipeTesting.db3"
    },
    migrations: { directory: "./data/migrations" },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      },
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    pool: {
      min: 2,
      max: 10
    }
  }
}
