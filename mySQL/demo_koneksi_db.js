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
var sql = "insert into user (nama, alamat) values ('abdi', 'gang jupiter')"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log("nama dan alamat telah dibuat"); 
}); 
});
