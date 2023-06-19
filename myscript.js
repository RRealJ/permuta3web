const porcento = '*1/100'
const operacoes = ['*', '/', '-', '+']
var valor = []


function mostrarTela(valor) {
	document.getElementById("mostrar").innerHTML = valor
}

//não sei se é melhor usar switch ou else if...
function addNum(num){
	let tela = document.getElementById("mostrar")
	if (num === '%') {
		calcular(porcento)
		return
	}

	if ((num === operacoes[0] || num === operacoes[1]) && tela.innerHTML === '') {
		alert('Não Inicie um cálculo com esses operadores...');
		return
	}

	if ((num === valor[valor.length - 1]) && (num === operacoes[1] || num === operacoes[2] || num === operacoes[3])){
		valor.pop()
	}

	if (num === operacoes[0] && valor[valor.length -1] == operacoes[0] && valor[valor.length -2] === operacoes[0]) {
		alert('Operação Inválida...')
		return
	}

	valor.push(num)
	numeros = valor.join('')
	mostrarTela(numeros)
	return
}


function calcular(n) {
	let tela = document.getElementById("mostrar").innerHTML

	if (tela.innerHTML === ''){
		alert('Coloque algo para calcular...')
		return	
	}

	if (n) {
		tela += n
	}

	let resultado = eval(tela)
	document.getElementById("mostrar").innerHTML = resultado
	valor = [resultado]
}


function apagar() {
	if (document.getElementById("mostrar").innerHTML = '') {
		return 
	}

	valor.pop()
	numeros = valor.join('')
	mostrarTela(numeros)

}


function reset() {
	valor = []
	document.getElementById("mostrar").innerHTML = ''
}