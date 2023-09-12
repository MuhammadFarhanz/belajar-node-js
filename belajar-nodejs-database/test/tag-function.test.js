function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "Farhan";

  tagFunction`Hello ${name}!, How are you?`;
  tagFunction`Bye ${name}!, see you later`;
});

test("test function sql", () => {
  const name = "Farhan'; DROP table users";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} and age ${age}`;
});
