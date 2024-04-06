// Iteration 1: Names and Input

let hacker1 = "Matias";
let hacker2 = "Jocelin";

console.log("El nombre del conductor es", hacker1);
console.log("El nombre del navegante es", hacker2);

// Iteration 2: Conditionals

let caracteresHacker1;
let caracteresHacker2;

for (let i = 0; i < hacker1.length; i++) {
  caracteresHacker1 = i;
}

for (let i = 0; i < hacker2.length; i++) {
  caracteresHacker2 = i;
}

if (caracteresHacker1 > caracteresHacker2) {
  console.log(
    "El conductor tiene el nombre más largo, tiene",
    caracteresHacker1,
    "caracteres."
  );
} else if (caracteresHacker2 > caracteresHacker1) {
  console.log(
    "Parece que el navegante tiene el nombre más largo, tiene",
    caracteresHacker2,
    "caracteres."
  );
} else {
  console.log(
    "Vaya, ambos tienen nombres igual de largos,",
    caracteresHacker1,
    "caracteres."
  );
}

// Iteration 3: Loops

// Iteration 3: 3.1
let hacker1SpaceUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1SpaceUpperCase += hacker1[i].toUpperCase() + " ";
}

console.log(
  "El nombre del conductor en mayúsculas y con sus letras separadas es",
  hacker1SpaceUpperCase
);

// Iteration 3: 3.2

let hacker2NameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2NameReverse += hacker2[i];
}

console.log("El nombre del navegante en orden inverso es",hacker2NameReverse);

// Iteration 3: 3.3

if (hacker1 > hacker2) {
  console.log("El nombre del conductor va primero.");
} else if (hacker2 > hacker1) {
  console.log("Yo, el navegador va primero definitivamente.");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

// Bonus 1

//1.1

let paragrhaps =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nunc ut tellus sollicitudin sagittis scelerisque id ipsum. Sed fringilla eleifend mauris at convallis. Morbi ullamcorper in erat nec convallis. Vivamus lacus magna, auctor sit amet faucibus sit amet, iaculis ut risus. Pellentesque et neque vel nibh dignissim iaculis. Vivamus semper tempus elementum. Aliquam vulputate nisi neque, quis aliquet massa ornare ut. Duis dolor ipsum, pretium et tristique quis, convallis in sem. Proin sed mauris quis nisi consequat condimentum. Nullam pretium tincidunt tristique. Duis tincidunt lorem et imperdiet mollis. Ut vitae nulla sed sapien vehicula posuere eget quis tellus. Donec nulla est, pellentesque sit amet ornare pulvinar, aliquam eget neque. Vivamus ac vehicula neque, a laoreet quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pretium eros metus, ut suscipit nibh interdum non. Phasellus et placerat odio. Vivamus congue quis mauris eu dictum. Proin nulla mi, pulvinar in sapien et, egestas imperdiet massa. Sed varius, nibh ac pharetra venenatis, purus nisi tempus velit, sit amet dictum nulla risus id metus. Maecenas in est purus. Maecenas tincidunt orci et tempor eleifend. Curabitur bibendum diam massa, eu pharetra mauris facilisis sed. Integer dui mauris, iaculis nec tellus quis, fringilla feugiat odio. Nam maximus lorem nisl, id ullamcorper enim elementum eget. Quisque vitae mi sed velit ultrices tempor. Etiam egestas ligula metus, in dapibus elit hendrerit at. Duis eu mi velit. Cras vehicula posuere auctor. Suspendisse libero turpis, congue at accumsan ut, porttitor eu ex. In diam purus, finibus vel purus et, eleifend egestas massa. Nulla facilisi. Donec pulvinar, erat dictum vestibulum fermentum, nulla ipsum tempor metus, vel posuere arcu erat in metus. Phasellus metus augue, mollis ac diam lacinia, lobortis varius odio. Mauris imperdiet felis eget nunc cursus vehicula. Praesent interdum efficitur est sed sodales. Vestibulum sed euismod dolor. Nullam viverra risus metus, quis pharetra quam gravida fringilla. Suspendisse sit amet ornare eros. Nulla eget mauris at sem vehicula tempus nec ac elit. Vestibulum sollicitudin convallis magna id lacinia. In commodo feugiat ligula, eget condimentum dui commodo et. Suspendisse vitae malesuada elit. Pellentesque et facilisis justo. Ut sodales tortor et mauris porttitor, vitae sollicitudin orci scelerisque.";

let counterWords = paragrhaps.split(/\s+/).length;

console.log(
  "El número de palabras que tienen los parrafos es de:",
  counterWords
);

//1.2

let etCounters = paragrhaps.match(/\bet\b/gi).length;
console.log(
  'En el párrafo indicado se encontro la palabra latina "et"',
  etCounters,
  "veces."
);

// Bonus 2

let phrase = "Amor, Roma";
let phraseToCheck = phrase.toLowerCase();
let esPalindromo = true;

for (let i = 0; i < Math.floor(phraseToCheck.length / 2); i++) {

  if (!/[a-z0-9]/.test(phraseToCheck[i])) {
    continue;
  }

  if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
    esPalindromo = false;
  }
}

if(esPalindromo){
    console.log("La palabra indicada es una palabra palíndromo");
}else{
    console.log("La palabra indicada no es una palabra palíndromo");
}

