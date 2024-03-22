const year = +prompt('введите год');

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " - высокосный год");
} else {
  console.log(year + " - не высокосный год");
}
