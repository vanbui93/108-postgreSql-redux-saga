// start connect API
const {  Pool } = require('pg')
const connectionString = 'postgres://awnbivlt:upgHKpim0LlUlNDrwfvjrJL29CHkUVT4@satao.db.elephantsql.com:5432/awnbivlt'
const pool = new Pool({ connectionString, max: 25, idleTimeoutMillis: 1000})
// end connect API

module.exports = pool