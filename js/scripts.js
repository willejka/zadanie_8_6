var a = 2,
    b = 5,
    value = (a * a) - ( 2 * a * b) + (b * b);
console.log(value);

if (value < 0) {
  console.log('wynik ujemny')
} else if (value = 0) {
  console.log('wynik równy 0')
} else {
  console.log('wynik dodatni')
}

var valueEquals0 = 0 ? 'Wynik jest równy 0' : 'Wynik jest różny od 0';
console.log(valueEquals0);