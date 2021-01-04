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
var sql = "select user.nama as nama, makanan.food as pesanan from user join makanan on user.alamat=makanan.address"; 
koneksi.query(sql , function (err, result) 
{ 
if (err) throw err; 
console.log(result); 
}); 
});
