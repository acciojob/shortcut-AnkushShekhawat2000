// function shortcut(s1, s2) {
//   // your code here
// }

// // Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));


function shortcut(s1, s2) {
  const commonCharacters = Array.from(new Set([...s1].filter(char => s2.includes(char))));
  return commonCharacters.join('');
}

// Example
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
