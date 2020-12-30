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
var sql = "delete from user where nama = 'abdi'"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log("Records yang terhapus: "+result.affectedRows); 
}); 
});
