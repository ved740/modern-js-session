//Check if iterable
var arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);
//A function
console.log(1[Symbol.iterator]);
//undefined

//String is iterable
var str = 'Hello';
console.log(str[Symbol.iterator]);

//iterator has a method called next()
var str = 'Hello';
var iterator = str[Symbol.iterator]();
console.log(iterator.next()); //logs { value: 'H', done: false }

//get iterator
var arr = [1, 2, 3];
var arrIterator = arr[Symbol.iterator]();
while (arrIterator.next()) {
    if ()
}