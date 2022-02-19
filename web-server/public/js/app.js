console.log("Client side javascript file is loaded!");

const locationHandler = (location) => {
  messageOne.textContent = "carregando";
  messageTwo.textContent = null
  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
};

//Pegando o formulário.
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "from js";

//Olhando se o formulário foi submetido.
//1)Nome do evento, 2)callback que roda quando o evento ocorre.
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  //Jogando pra função que pesquisa o nome.
  locationHandler(location);
});
