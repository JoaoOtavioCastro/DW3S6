const express = require("express")
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
	res.send("Hello DW3!")
})
app.get("/dw3", (req, res) => {
	res.send("Outra Rota")
})
app.listen(port, ()=>{
	console.log("Executando a aplicação: ", process.env.APP_NAME);
	console.log("Exemplo na porta: ", port);
})
