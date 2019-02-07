class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi I am ' + this.name + "!";
        // es6 Template string!!!
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`; 
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I'm Visition from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Christian Bartley', 24, 'Columbus Oh');

const other = new Traveler();

console.log(me);

console.log(other);

console.log(me.getGreeting());

console.log(other.getGreeting());