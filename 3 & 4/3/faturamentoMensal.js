//Dados importados
let dados = require("./dados.json");
const { mediaMensal } = require("./MediaMensal/numeroDeDias");
const { sort } = require("./Sort/sort");

//Variaveis auxiliares para armazenaram valores
let vetor = [];

let menorValor;
let maiorValor;

//Loop para inserir valores em um vetor auxiliar
for (let index = 0; index < dados.length - 1; index++) {
  vetor.push(dados[index].valor);
}

//Sort simples para ordenar valores
sort(vetor);

//Loop de comparações para menor valor
for (let i = 0; i < dados.length - 1; i++) {
  if (vetor[i] != 0 && vetor[i] < vetor[i + 1]) {
    menorValor = vetor[i];
    break;
  }
}

//Loop de comparações para maior valor
for (let i = 0; i < dados.length - 1; i++) {
  if (vetor[i] < vetor[i + 1] && vetor[i] != 0) {
    maiorValor = vetor[i + 1];
  }
}

console.log(`O menor valor encontrado foi ${menorValor}`);
console.log(`O maior valor encontrado foi ${maiorValor}`);
console.log(
  `Houveram ${mediaMensal(
    vetor
  )} dias em que o valor de faturamento diário foi superior à média mensal.`
);
