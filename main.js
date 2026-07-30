// Task #1
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");
console.log(fruits); 

// Task #2
let colors = ["red", "blue", "green", "blue", "yellow"];
let results = [];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
results.push(includesResult, firstIndex, lastIndex);
console.log(results);

// Task #3
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");
console.log(allTeams);

// Task #4
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);
console.log(middleNumbers);
console.log(numbers);

// Task #5
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b);
scores.sort((a, b) => a - b).reverse();
console.log(scores);

//------------------------------ PRACTICE ARRAY ITERATOR METHODS PART II --------------------------//

// Task #1
let cities = ["New York", "Chicago", "Miami", "Camarello", "Bridgeport"];
let citiesUpper = cities.forEach(city => {
    console.log(`One of my favorite cities is ${city}.`);
// One of my favorite cities is New York.
// One of my favorite cities is Chicago.
// One of my favorite cities is Miami.
// One of my favorite cities is Camarello.
// One of my favorite cities is Bridgeport.
});

// Task #2
let numbers2 = [1, 2, 3, 4, 5];
let numbersSquared = numbers2.map(num => num ** 2);
console.log(numbersSquared);
// 1
// 4
// 9
// 16
// 25

// Task #3
let scores2 = [85, 42, 90, 75, 30, 100];
let highScores = scores2.filter(score => score >= 80);
console.log(highScores);
// 85, 90, 100

// Task #4
let favoriteFood = [
    "Pizza", 
    "General Tso's Chicken", 
    "Baked BBQ Chicken Thighs", 
    "Cheesecake",
    "Lasagna",
    "Beef n Broccoli"
];
let findFood = favoriteFood.find(food => food.length > 4);
let findFoodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(findFood);
// Pizza
console.log(findFoodIndex);
// 0

// Task #5
let temperatures = [83, 82, 83, 85, 83];
let highTempCheck = temperatures.some(temp => temp > 90);
let lowTempCheck = temperatures.every(temp => temp < 50);
console.log(highTempCheck);
// false
console.log(lowTempCheck);
// false

// Task #6
let budget = 300;
let prices = [79.99, 89.99, 25.00, 39.99];
let isWithinBudget = prices.reduce((acc, price) => {
    return acc - price;
}, budget);
console.log(isWithinBudget.toFixed(2));
// 65.03