const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

let pool = null;

if (isProduction) {
    pool = new Pool({
        connectionString: 'postgres://vzelsics:Kw8Gd6cxDt5wif_LUTAIla1TOwoHJaEY@silly.db.elephantsql.com/vzelsics',
        ssl: {
            rejectUnauthorized: false
        }
    })
} else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'eshoplpe',
        password: 'postgres',
        port: 5432
    })
}

module.exports = { pool };