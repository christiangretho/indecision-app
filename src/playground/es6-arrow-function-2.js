// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 55));

// this keyword - no longer bound

const user = {
    name: 'Christian',
    cities: ['columbus', 'akron', 'westerville'],
    printPlacesLived() {    
       return this.cities.map((city) => this.name + ' has lived in ' + city + "!");
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers arrary 
    // multiplyBy - single 
    // multiply - return new array where numbers have been multiplied
    numbers: [12, 6, 14, 23],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map((number) => number + " * " + this.multiplyBy + " = " + this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());