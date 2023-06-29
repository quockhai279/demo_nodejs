// get the client
import mysql from 'mysql2/promise';
// import mysql from 'mysql2'


// create the connection to database
console.log("Creating connection pool");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic'
// }).promise();

export default pool;
// export default connection;