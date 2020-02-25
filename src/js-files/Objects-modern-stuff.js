//if the value is ommitted, variable with same name is looked for
const firstName = 'Harry';
const lastName = 'Smith';
const age = 24;
const city = 'BBSR';
const harry = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    city: city 
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
    name: 'Harry',
    age: undefined
};
console.log(JSON.stringify(jsObj));

//TODO - Getter and Setter
const firstName = 'Harry';
const lastName = 'Smith';
const age = 24;
const city = 'BBSR';
const harry = {
    firstName,
    lastName,
    age,
    city,
    get getAge() {
        return this.age;
    },
    set setAge(age) {
        this.age = age;
    }
};

//harry.getAge = 30;
//harry.setAge = 42
