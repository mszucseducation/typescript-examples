// Objects

// you shouldn't do: const person: object
// TS notation for object represented at {}
const person: {
    name: string;
    age: number; 
} = {
    name: "John",
    age: 30
}

// however the best syntax is just doing this:
const personTwo = {
    name: "John",
    age: 30
}

console.log(person);
console.log(person.name);
