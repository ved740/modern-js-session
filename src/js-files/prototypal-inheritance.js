//Prototypal inheritance
function Watch(options) { //capital W
  this.brand = options.brand;
}

Watch.prototype.time = function() {
  console.log(new Date(Date.now()).toLocaleString());
};

function SmartWatch(options) {
 Watch.call(this, options);
 this.type = 'Smart';
}
//Uglier lines -- used to be pain
SmartWatch.prototype = Object.create(Watch.prototype);
SmartWatch.prototype.constructor = SmartWatch;  //lets us check constructor properly -- to keep consistency 

SmartWatch.prototype.steps = function() {
  console.log(Math.floor(Math.random() * 10000));
}

//use it
var w = new Watch({ brand: 'Rolex' });
w.brand //prints Rolex
w.time() //prints current time
w.steps() //doesn't exists

var sw = new SmartWatch({ brand: 'Samsung' });
sw.brand //prints Rolex
sw.time() //prints current time
sw.steps() //prints steps b/w 0 and 10,000
sw.__proto__.constructor //prints constructor function

//Class based inheritance: Equivalent for above
class Watch {
  constructor(options) {
    this.brand = options.brand;
  }

  time() {
    console.log(new Date(Date.now()).toLocaleString());
  }
}

class SmartWatch extends Watch {
  constructor(options) {
    super(options);
  }

  steps() {
    console.log(Math.floor(Math.random() * 10000));
  }
}
