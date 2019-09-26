const mysql = require('mysql')

module.exports=()=>{
    return mysql.createPool({
        host:'sql7.freemysqlhosting.net',
        user:'sql7306510',
        password:'8Nwja7KLBV',
        database:'sql7306510'
    })
}