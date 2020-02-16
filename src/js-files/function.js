//instance of
function fun1() {
    console.log('Hello');
};

console.log(fun1 instanceof Object);

//New Prop
function fun2() {
    console.log('Hello');
};

fun2.testProp = 'greet';

console.log({
    fun2
});

//check return
console.clear();

function hello() {
    return;
}

const hello2 = function () {
    return 'World 2';
}

const hello3 = () => 'World 3';

console.log(hello());
console.log(hello2());
console.log(hello3());

//IIFE example
(function createGame() {

    var negative = 0;
    var positive = 0;

    function getScore() {
        console.clear();
        console.log('Score: ' + (positive - negative));
    }

    function printScoreTable() {
        console.table({
            positive,
            negative,
            score: (positive - negative)
        });
    }

    function incrementScore() {
        positive++;
        getScore();
    }

    function decrementScore() {
        negative++;
        getScore();
    }

    window.onclick = function (e) {
        if (e.clientY <= 200) {
            decrementScore();
        } else {
            incrementScore();
        }
    }

    window.onkeypress = function (e) {
        if (e.key === 's') {
            printScoreTable();
        }
    }

})();