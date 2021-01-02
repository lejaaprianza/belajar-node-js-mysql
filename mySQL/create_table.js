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
var sql = "CREATE TABLE user (nama VARCHAR(255), alamat VARCHAR(255))"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log("nama dan alamat telah dibuat"); 
}); 
});
