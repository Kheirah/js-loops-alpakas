/* JS Loops */

/* Classic for loop */
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.clear();

let list = ["Hello", "there", "I'm", "inside", "a", "loop", "yo!"]; //list.length = 6

/* imperative = Befehl */
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
  if (i == 2) break;
}

/* deklarative = Beschreiben */
console.clear();
list.forEach((brokkoli) => console.log(brokkoli));

console.clear();

let count = 0;
while (count > list.length) {
  console.log(list[count]);
  count++;
}
