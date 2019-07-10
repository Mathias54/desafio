const agrupadores = [
  {
    "id": 1,
    "descricao": 'Agrupador 1',
    "itens": [
      {
        "id": 11,
        "descricao": 'Agrupador 11',
        "tipo": "AGRUPADOR",
      }
    ]
  },
  {
    "id": 11,
    "descricao": 'Agrupador 11',
    "itens": [
      {
        "id": 111,
        "descricao": 'Agrupador 111',
        "tipo": "AGRUPADOR",
      }
    ]
  },
  {
    "id": 111,
    "descricao": 'Agrupador 111',
    "itens": [
      {
        "id": 1111,
        "descricao": 'AGRUPADOR FINAL 1111',
        "tipo": "AGRUPADOR_FINAL",
      }
    ]
  },
  {
    "id": 2,
    "descricao": 'Agrupador 2',
    "itens": null
  },
  {
    "id": 3,
    "descricao": 'Agrupador 3',
    "itens": [
      {
        "id": 31,
        "descricao": 'Agrupador 31',
        "tipo": "AGRUPADOR",
      }
    ]
  },
  {
    "id": 31,
    "descricao": 'Agrupador 31',
    "tipo": "AGRUPADOR",
    "itens": [
      {
        "id": 311,
        "descricoa": 'Agrupador Final 311',
        "tipo": "AGRUPADOR_FINAL",
      }
    ]
  }
];


const getAgrupadoresPorID = (id, callback) => {
   const resultado = agrupadores
    .filter(agrupador => agrupador.id === id);
   let erro = resultado.length ? null : `Nenhum agrupador encontrado para o id: ${id}`;
   setTimeout(() => callback(erro, resultado), 100);
};

const getAgrupadores = (callback) => {
  const erro = null;
  const agrupadoresIniciais = [
    agrupadores[0],
    agrupadores[3],
    agrupadores[4],
  ];
  setTimeout(() => callback(erro, agrupadoresIniciais), 100);
};

module.exports = {
  getAgrupadoresPorID,
  getAgrupadores,
};