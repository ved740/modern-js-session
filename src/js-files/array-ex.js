//computed props are automatically converted to strings
var arr = [1, 2, 3];
console.log(arr[0]);

//Array can have holes in b/w
//length is calculated by (largest index + 1)
const someNumbers = [, , , , 1];
console.log(someNumbers[0]);

//A common error
var arr = [1, 2, 3];
var checkKeyAtIndexOne = Object.keys(arr).find((index) => {
    return index === 1; //should be '' + 1
});
console.log(arr[checkKeyAtIndexOne]);