function checkStringLenght(string, maxLength) {
  return string.replaceAll(' ').length <= maxLength;
}

function isItPalindrome(string) {
  const firstString = string.replaceAll(' ').toUpperCase();
  let secondString = '';
  for(let i = firstString.length; i > 0; i--) {
    secondString += firstString[i - 1];
  }
  return firstString === secondString;

}

function parseNumberFromString(string) {
  string = string.toString();
  const parsed = parseInt(string.replace(/[^0-9]/g, ''), 10);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed;
}
