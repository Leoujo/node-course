//Forma tradicional.
// const square = function (x) {
//   return x * x;
// };

//Com arrow function.
// const square = (x) => {
//   return x * x;
// };

//Se a mesma só retornar um ítem, podemos encurtar mais ainda sem o {} e o return.
// const square = (x) => x * x;

//console.log(square(2));

//-----------------------------------------------------------------------------

//This com functions normais
// const event = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     return console.log("Guest list for " + this.name);
//   },
// };

//This com arrow functions
//undefined! Pois em arrow function, o this não é uma referência para o objeto
//é apenas uma palavra. "Arrow function don't bind (vincula) their 'this' value."
// const event = {
//   name: "Birthday Party",
//   printGuestList: () => console.log("Guest list for " + name),
//   printGuestList2: () => console.log("2- Guest list for " + event.name),
// };

//Concluímos que arrow functions não são tão boas para métodos de um objeto,
//mas para o resto sim.

//---------------------------------------------------------------------------------------------------------

//Aqui, tô usando o método guestList de maneira diferente ( pra treinar ). Isso é permitido no ES6 apenas.
const event = {
  name: "Birthday Party",
  guestList: ["Leo", "Nic", "Felix"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    //Isso dá erro pq o this vai apontar pra essa função aí dentro.
    // this.guestList.forEach(function (guest) {
    //   console.log(guest + " is attending the " + this.name);
    // });

    //Assim dá certo, pois como arrow function não acessam o seu this, eles acessam na verdade 
    //o this geral (do contexto que foram criadas), que no caso é o do printGuestList.
    this.guestList.forEach((guest) => console.log(guest + " is attending the " + this.name));
  },
};

event.printGuestList();
