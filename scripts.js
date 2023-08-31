const texto = document.querySelector("#texto")
const entrada = document.querySelector("#entrada")
const reiniciar = document.querySelector("#reiniciar")
const resultado = document.querySelector("#resultado")
const alternarTemaBtn = document.querySelector("#alternarTema")

const textos = [
    "Este site utilizou três tipos de linguagem.",
    "A maior parte do site foi realizado em Java.",
    "Nina Boiago possui combos, e entrega na sua casa.",
    "Para aprender, você pode começar em C.",
    "TI não significa técnico de informática!!!",
    "#include<stdio.h> é uma biblioteca em C.",
    "Procure por Nina Boiago no instagram e no google.",
];

function novotexto(){
    const Index = Math.floor(Math.random() * textos.length)
    texto.textContent = textos[Index]
}

function atualizarTeste(){
    Iniciar();

    if(entrada.value === texto.textContent){
       verificar()
    }
}

function Iniciar(){
    const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"))

    if(!statusDoTeste){
    localStorage.setItem("tempoInicial", new Date().getTime())
    localStorage.setItem("testeEmAndamento", true)
    }
}

function verificar(){
    const tempoFinal = new Date().getTime()
    const tempoInicial = parseInt(localStorage.getItem("tempoInicial"))
    const tempoGasto = (tempoFinal - tempoInicial) / 1000;

    resultado.textContent = `Parabéns! Você levou ${tempoGasto} segundos!`;

    adicionarAoHistorico(texto.textContent, tempoGasto)

    localStorage.setItem("testeEmAndamento", false);
    entrada.value ="";
    novotexto();
}

function adicionarAoHistorico(textoDigitado, tempoGasto){
	const itemHistorico = document.createElement("p")

	itemHistorico.textContent = `Texto "${textoDigitado}" = Tempo: ${tempoGasto} segundos.`;

	historico.appendChild(itemHistorico);
}

function reiniciarTeste(){

	entrada.value ="";
	resultado.textContent ="";
	novotexto();
	localStorage.setItem("testeEmAndamento", false);
	historico.innerHTML ="";

}

function alternarTema(){

	const body = document.body;

	body.classList.toggle("claro");
	body.classList.toggle("escuro");

}

entrada.addEventListener("keyup", atualizarTeste);
reiniciar.addEventListener("click", reiniciarTeste);
alternarTemaBtn.addEventListener("click", alternarTema);

novotexto(); 
