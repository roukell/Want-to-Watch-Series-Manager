module.exports = {
  "development": {
    "use_env_variable": process.env.SERIES_DB_URL,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "SERIES_DB_URL",
    "dialect": "mysql"
  }
};
