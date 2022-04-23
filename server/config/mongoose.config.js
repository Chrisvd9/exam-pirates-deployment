const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/piratescrew_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conexión con la base de datos exitosa"))
	.catch(err => console.log("Algo salió mal", err));