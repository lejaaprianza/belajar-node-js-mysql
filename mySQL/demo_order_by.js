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
var sql = "select * from user ORDER BY nama desc"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log(result); 
}); 
});
