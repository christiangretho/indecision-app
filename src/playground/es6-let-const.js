var nameVar = "Christian";
var nameVar = "Mike";
console.log('nameVar', nameVar);


let nameLet = "Jensen";

console.log("nameLet", nameLet);


const nameConst =  "Joe";

console.log("nameConst", nameConst);

function getPetName(){
    const petName = "Harley";
    return petName;
}

const petName = getPetName();
console.log(petName);

// BLock scoping


var fullName = 'Christian Bartley';

if (fullName){
    const firstName = fullName.split(' ')[0];
}

console.log("firstName", firstName);