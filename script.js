// function shortcut(s1, s2) {
//   // your code here
// }

// // Do not change the code below.
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(shortcut(s1, s2));

function shortcut(s1, s2) {
  // Get the initial letter of each string
  const firstLetterS1 = s1.length > 0 ? s1[0] : '';
  const firstLetterS2 = s2.length > 0 ? s2[0] : '';

  // Return the concatenation of the initial letters
  return firstLetterS1 + firstLetterS2;
}

// Examples
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

