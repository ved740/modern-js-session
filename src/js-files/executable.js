var str = 'Hello';
var iterator = str[Symbol.iterator]();
console.log(iterator.next());