const fSoma = (num1par, num2par) => {
	return num1par + num2par;
};
const fSubtracao = (num1par, num2par) => {
	return num1par - num2par;
};
const fDivisao = (num1par, num2par) =>{
	return num1par / num2par;
};
const fMultiplicacao = (num1par, num2par) =>{
	return num1par * num2par;
}
const fCalculo = (request, res) => (async () => {
	const { num1, num2, operacao } = request.body

	if(operacao=="+")
		resultado = fSoma(num1, num2);
	if(operacao=="/")
		resultado = fDivisao(num1, num2);
	if(operacao=="-")
		resultado = fSubtracao(num1, num2);
	if(operacao=="*")
		resultado = fMultiplicacao(num1, num2);

	res.json({status: "ok", "resultado": resultado});
} )();

module.exports = {
	fCalculo
}
