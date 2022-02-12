//Object property shorthand

const name = "Andrew";
const userAge = 27;

//Old way
// const user = {
//   name: name,
//   age: userAge,
//   location: "Philadelphia",
// };

//Es6 way - apens se tiver o mesmo nome.
// const user = {
//     name,
//     age: userAge,
//     location: "Philadelphia",
//   };

// console.log(user);

//---------------------------------------------------------------------------------------------------------

//Object destructuring - Extrai propriedades de um objeto e passa pra variáveis.

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

//Old way
// const label = product.label;
// const stock = product.stock;

//ES6 way
//Foi criado duas constantes!
//Mas mudei o nome da constante de label pra productLabel.
//Mas falei que se price for undefined, o valor será 5.
// const { label: productLabel, stock, price = 5 } = product;

// console.log(productLabel)
// console.log(stock)
// console.log(price)

//Função que recebe o objeto product.
//Desconstruí direto no argumento da função.
// const transaction = (type, { label, stock }) => {
//   console.log(type, label, stock);
// };

// transaction("order", product);
