//age tem o valor default de undefined.
const greeter = (name = "user", age) => {
  console.log("Hello " + name + "! Age " + age);
};

greeter("Leozin");

greeter();
