let fun = function() {
  {
    let l = "let";
    var v = "var";
  }
  console.log(v);
  console.log(l);
};

fun();

//Problem: while writing code in environments like react and angular, code is transpiled to ES5 code
// i.e. we don't have a let available, fix the above code so that var 'v' behaves like let
