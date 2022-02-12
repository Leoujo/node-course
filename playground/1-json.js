const fs = require("fs");

//Pegando dados de um arquivo json (vem nesse formato buffer por default)
const dataBuffer = fs.readFileSync("1-json.json");
//Transforma em json (que é uma string)
const dataJson = dataBuffer.toString();
//Transforma em um objeto
const user = JSON.parse(dataJson);

//Mexi no objeto
user.name = "Leo Ujo"
user.age = 23

//Transformei o novo objeto em um JSON
const userJson = JSON.stringify(user)

//Recriei o arquivo com o novo JSON
fs.writeFileSync("1-json.json", userJson)
