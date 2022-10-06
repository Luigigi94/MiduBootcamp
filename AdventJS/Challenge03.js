export default function isValid(letter) {
  let letterToCheck = letter.split(" ");

  letterToCheck.find((element) => element === "(");
  return true;
}
const letter = "bici coche (balón) bici coche peluche";
const letterIsValid = isValid(letter);
console.log(letterIsValid);
