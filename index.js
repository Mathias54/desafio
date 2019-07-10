const {
  getAgrupadores,
  getAgrupadoresPorID,
  getElementosPorIDAgrupador
} = require('./api');


// getAgrupadoresPorID(111, (erro, resultado) => {
//   console.log(erro);
//   console.log(resultado);
// });
//
// getElementosPorIDAgrupador(311, (erro, resultado) => {
//   console.log(erro);
//   console.log(resultado);
// });

getAgrupadores((erro, resultado) => {
  console.log(resultado);
});