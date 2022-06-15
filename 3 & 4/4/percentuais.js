const { dataArray } = require("./dados_estaduais");

console.log(dataArray);

let auxArray = [];

for (let index = 0; index < dataArray.length; index++) {
  auxArray.push(dataArray[index].valor);
  console.log(auxArray);
}

let sum = auxArray.reduce(function (a, b) {
  return a + b;
});

auxArray.forEach((valor) => {
  Math.round(valor);
  let aux = (valor / sum) * 100;
  console.log(`O valor ${valor} corresponde a ${Math.round(aux)}% de ${sum}`);
});
