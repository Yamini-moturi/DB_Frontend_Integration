const sql = require('mssql')
const sqlConfig = {
   user: 'yamini',
    password: 'root5',
    database: 'testplants',
    server: 'DESKTOP-NTUNPQE',
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

async function getConnection(){
    try {
        
        console.log(sqlConfig)

       let pool= await new sql.ConnectionPool(sqlConfig);
       let connect= await pool.connect();
       let request = await connect.request();
       return request;


    } catch (err) {
         // ... error checks
         console.log(err.message)
    }   
}
module.exports={
    getConnection
}