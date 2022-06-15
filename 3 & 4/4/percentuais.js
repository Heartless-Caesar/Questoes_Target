const { dataArray } = require("./dados_estaduais");

let auxArray = [];

for (let index = 0; index < dataArray.length; index++) {
  auxArray.push(dataArray[index].valor);
}

let sum = auxArray.reduce(function (a, b) {
  return a + b;
});

for (let index = 0; index < dataArray.length; index++) {
  let valor = dataArray[index].valor;
  let aux = (valor / sum) * 100;

  console.log(
    `O valor ${valor} do estado ${
      dataArray[index].estado
    } corresponde a ${Math.round(aux)}% de ${sum}`
  );
}

// auxArray.forEach((valor) => {
//   Math.round(valor);

// });
