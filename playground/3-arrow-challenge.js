//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],

  //Não usei arrow functions pq são ruins para métodos (e ótimas pra todo o resto).
  //Usei o novo padrão ES6 de método de um objeto.
  getTasksToDo() {
    var completedTasks = this.tasks.filter((task) => task.completed !== true);
    return completedTasks;
  },
};

console.log(tasks.getTasksToDo());
