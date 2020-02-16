const propKey = 'AGE';
const harry = {
    name: 'Harry Smith',
    [propKey.toLowerCase()]: 42
};
console.log(harry.age);