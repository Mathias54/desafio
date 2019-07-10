const elementos = [
  {
    "id": 2525,
    "id_agrupador": 1111,
    "descricao": 'Elemento 2525',
  },
  {
    "id": 2828,
    "id_agrupador": 311,
    "descricao": 'Elemento 2828',
  },
  {
    "id": 3030,
    "id_agrupador": 311,
    "descricao": 'Elemento 3030',
  }
];

const getElementosPorIDAgrupador = (id, callback) => {
  const resultado = elementos
    .filter(elemento => elemento.id_agrupador === id);
  let erro = resultado.length ? null : `Nenhum elemento encontrado para o id: ${id}`;
  setTimeout(() => callback(erro, resultado));
};

module.exports = {
  getElementosPorIDAgrupador,
};