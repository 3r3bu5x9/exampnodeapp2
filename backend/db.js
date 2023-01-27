const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "db",
    user: 'root',
    password: '1234',
    waitForConnections: true,
    connectionLimit: 20,
    database: 'student_db',
})

module.exports = {
    pool,
}