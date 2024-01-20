const sql = require("mysql");
const dotenv = require("dotenv").config();

const db = sql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cv4fun"
        // host: process.env.DATABASE_HOST,
        // user: process.env.DATABASE_USER,
        // password: process.env.DATABASE_PASSWORD,
        // database: process.env.DATABASE
    
});

module.exports = db;