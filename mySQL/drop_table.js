var mysql = require("mysql"); 
var koneksi = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database:"wintrik"
}); 
koneksi.connect(function(err) { 
if (err) throw err; 
console.log("Terkoneksi");
var sql = "drop table if exists user"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log(result); 
}); 
});
