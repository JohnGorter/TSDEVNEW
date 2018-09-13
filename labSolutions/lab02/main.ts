

enum Animal {
    Dog,
    Varken
}

const spikey = Animal.Dog;

const a = Animal[spikey];

console.log(a);
console.log(JSON.stringify(Animal));
