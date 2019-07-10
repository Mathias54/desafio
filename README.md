# Desafio Mini-Hackathon

O desafio consiste em realizar requisições para um endpoint e montar a estrutura exigida, seguindo as regras estabelecidas.

Existem dois "endpoints" a serem consumidos. Um que retorna um JSON do tipo `AGRUPADOR` e outro que retorna um tipo `ELEMENTO`

A estrutura de `AGRUPADOR` é a seguinte:

```
{
  "id": number,
  "descricao": string,
  "itens": [
    {
      "id": number,
      "descricao": string,
      "tipo": "AGRUPADOR" || "AGRUPADOR_FINAL",
    }
  ]
}
```

O atributo `itens` pode retornar um array ou um null;

Um agrupador pode conter vários sub-agrupadores e os sub-agrupador também. O ciclo de agrupadores finaliza quando o `item` for do tipo `AGRUPADOR_FINAL`;
 
 O `id` de um `AGRUPADOR_FINAL` irá retornar um `ELEMENTO`; 

A estrutura do `ELEMENTO` é a seguinte:

```
{
  "descricao": string,
  "id": number
}
```

## Regras

A solução deve ser implementada de duas formas: i) utilizando apenas callback e ii) utilizando apenas Promises ou/e Async / Await.

Deve ser utilizado ECMAScript 6+. 

Deve ser utilizado loops para as consultas; 

Pode ser substituido o uso de Promises ou/e Async / Await por RxJS ou Generators.

O uso de `Symbols` é permitido;

O uso de TypeScript é permitido;

O uso de Worker Threads é permitido;

Nenhum arquivo dentro da pasta `/api` deve ser alterado;

O arquivo principal da aplicação deve ser o `/index.js`

## Estrutura Final

A estrutura final que deve ser retornado pela aplicação é a seguinte: 

```
[
    {
      "id": 1,
      "descricao": 'Agrupador 1',
      "itens": [
        {
          "id": 11,
          "descricao": 'Agrupador 11',
          "tipo": "AGRUPADOR",
          "itens": [
            {
              "id": 111,
              "descricao": 'Agrupador 111',
              "tipo": "AGRUPADOR",
              "itens": [
                {
                  "id": 1111,
                  "descricao": 'AGRUPADOR FINAL 1111',
                  "tipo": "AGRUPADOR_FINAL",
                  "itens": [
                    {
                      "id": 2525,
                      "id_agrupador": 1111,
                      "descricao": 'Elemento 2525'
                    }
                  ]
                }
              ]
            }
          ]
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
          "itens": [
            {
              "id": 311,
              "descricoa": 'Agrupador Final 311',
              "tipo": "AGRUPADOR_FINAL",
              "itens": [
                {
                  "id": 2828,
                  "id_agrupador": 311,
                  "descricao": 'Elemento 2828'
                },
                {
                  "id": 3030,
                  "id_agrupador": 311,
                  "descricao": 'Elemento 3030'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
```