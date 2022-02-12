const { string, argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customizando yargs version
yargs.version("1.1.0");

//Cria uma nota
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body title",
      demandOption: true,
      type: "string",
    },
  },
  //Novo padrão ES6
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Remove uma nota
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  //Novo padrão ES6
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Lista as notas
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

//Lista uma nota
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
