//CALLBACK ASSÍNCRONO
//Callback functions são funções que passamos pra outras (como argumento)
//com a intenção de a chamar mais para frente.
// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

//CALLBACK SÍNCRONO
//Aqui usamos callback de forma assíncrona, mas ele pode ser síncrono!Tipo aqui:
// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });
// console.log(shortNames);

//----------------------------------------------------------------------------------
//USANDO CALLBACK PARA PEGAR DADOS ASSÍNCRONOS (IGUAL NA API).

// const geoCode = (adress, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     //return data;
//     callback(data);
//   }, 2000);
// };

//Assim dá undefined, pois o return da dentro do setTimeOut, e não do geoCode.
//Ese erro acontee por ser algo assíncrono.
//const data = geoCode("Caxias");

//Dá certo! Pois eu peguei os dados dentro do setTimeOut via callback.
// geoCode("Caxias", (data) => {
//   console.log(data);
// });

//---------------------------------------------------------------------------------- 
//CALLBACK-CHALLENGE
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const add = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x + y);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });
