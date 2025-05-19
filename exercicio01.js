/*
ForEach(item, index, array)

(item)  - Dados/Informações contidos da posição atual do Array.
(index) - Número da Posição. Sempre começa com 0.
(array) - Retorna o Array completo.
*/

const users = [
  { name: "Rodolfo", age: 33, contact: "(19) 94343-3434" },
  { name: "Paulo", age: 21, contact: "(12) 93443-3434" },
  { name: "Aline", age: 40, contact: "(13) 94566-3434" },
  { name: "Maria", age: 12, contact: "(14) 94343-3476" },
];

users.forEach(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);
});
