const fs = require("fs");
const chalk = require("chalk");

//Cria  uma nota de fato.
const addNote = (title, body) => {
  const notes = loadNotes();

  //Essa forma é ruim, pois se tiver 1000 ítens, ele vai olhar em todos! Mesmo depois de o achar.
  //const duplicatedNotes = notes.filter((note) => note.title === title);

  //Essa é melhor! Pois se o encontrar, para o código. Obs: Ele retorna o index do ítem procurado
  const duplicatedNote = notes.find((note) => note.title === title);


  //PARA DEBUGAR! ADICIONA PONTOS DE DEBUGGER
  debugger
  //Executo com node inspect, e o resto normal..
  //vou no chrome e acesso: chrome://inspect
  //confirmo se estou na pasta certa que quero analisar e fico dando play.

  //Ao fazer o ! eu digo: Se duplicatedNote for igual a undefined...
  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(" New note added! "));
  } else {
    console.log(chalk.red.inverse(" Note title taken!"));
  }
};

//Remove uma nota de fato.
const removeNote = (title) => {
  const notes = loadNotes();
  var filteredNotes = notes.filter((note) => note.title != title);
  saveNotes(filteredNotes);

  if (filteredNotes.length == notes.length) {
    console.log(chalk.red.inverse(" No note found "));
  } else {
    console.log(chalk.green.inverse(" Note removed "));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse(" Your notes "));

  //Forma que costumo usar
  // for (var i in notes) {
  //   console.log(notes[i].title);
  // }

  //Forma mais fácil
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(" " + note.title + " "));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse(" Error! Note not found."));
  }
};

//--------------------------------------------------------------------------------------------------------

//Carrega as notas atuais
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//Salva as notas atuais
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Exporto as funções que vou usar em outro arquivo.
module.exports = {
  removeNote: removeNote,
  addNote: addNote,
  listNotes: listNotes,
  readNote: readNote,
};
