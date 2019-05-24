const mysql = require('mysql')
const config = require('../config/default.js')

const pool = mysql.createPool({
  host        : config.database.HOST,
  user        : config.database.USERNAME,
  password    : config.database.PASSWORD,
  database    : config.database.DATABASE,
  port        : config.database.PORT,
  dateStrings : true
})

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query

