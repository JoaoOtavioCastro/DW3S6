const hello = (req, res) => (async () =>{
	res.json({status: "ok", "mensagem": "Hello World!!!"});
})();

const helloUser = (request, res) => (async () => {
	const { username } = request.body
	res.json({status: "ok", "nomeusuario": username});
} )();
module.exports = {
	hello,
	helloUser,
}
