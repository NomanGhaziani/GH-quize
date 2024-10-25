//Q#25 to 35
// Alien Colors #1
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

// Alien Colors #1 (fails)
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

// Alien Colors #2
alien_color = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Alien Colors #2 (fails)
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Alien Colors #3
alien_color = 'green';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}

// Alien Colors #3 (yellow)
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}

// Alien Colors #3 (red)
alien_color = 'red';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}

// Stages of Life
let age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Favorite Fruit
let favorite_fruits: string[] = ['apple', 'banana', 'orange'];

if (favorite_fruits.includes('banana')) {
    console.log("You really like banana!");
}

if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwi!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apple!");
}

if (favorite_fruits.includes('pear')) {
    console.log("You really like pear!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like orange!");
}

// Hello Admin
let usernames: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];

for (let username of usernames) 
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}

// No Users
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Checking Usernames
let current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users: string[] = ['user3', 'user6', 'user7', 'user8', 'user9'];

for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! ${new_user} is available.`);
    }
}

// Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

// Pizzas
let favorite_pizzas: string[] = ['pepperoni', 'margherita', 'veggie'];

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

// Animals
let animals: string[] = ['dog', 'cat', 'rabbit'];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");


//Q#41 to 45
// Magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);

// Unchanged Magicians
function make_great_copy(magicians: string[]): string[] {
    let newMagicians: string[] = [...magicians];
    make_great(newMagicians);
    return newMagicians;
}

let originalMagicians: string[] = ["Houdini", "David Blaine", "Penn & Teller"];
let modifiedMagicians: string[] = make_great_copy(originalMagicians);
show_magicians(originalMagicians);
show_magicians(modifiedMagicians);

// Sandwiches
function make_sandwich(...toppings: string[]): void {
    console.log("Making a sandwich with the following toppings:");
    for (let topping of toppings) {
        console.log("- " + topping);
    }
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly");

// Cars
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
}

function create_car(manufacturer: string, model: string, ...options: [string, string][]): Car {
    let car: Car = { manufacturer, model };
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}

let myCar: Car = create_car("Toyota", "Camry", ["color", "blue"], ["year", "2024"]);
console.log(myCar);
