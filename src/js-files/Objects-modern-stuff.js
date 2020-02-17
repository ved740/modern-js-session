//if the value is ommitted, variable with same name is looked for
const age = 42;
const harry = {
    name: 'Harry Smith',
    age //same as age: age
};

//use string literals, when property name is not an identifier
const harry = {
    name: 'Harry Smith',
    'favourite beer': 'Tuborg'
};
console.log(harry['favourite beer']); //can't use dot here

//use brackets for computed prop names
const propKey = 'AGE';
const harry = {
    name: 'Harry Smith',
    [propKey.toLowerCase()]: 42
};
console.log(harry.age);

//JSON doen't identify undefined value
var jsObj = {
    name: 'Ved',
    age: undefined
};
console.log(JSON.stringify(jsObj));

//To Do - Getter and Setter