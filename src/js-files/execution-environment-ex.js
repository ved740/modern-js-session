var color = 'red';

function first() {
  var color = 'green';
  console.log('1 : ' + color);
  second();
}

function second() {
  console.log('2 : ' + color);
}

first();
console.log('3 : ' + color);
