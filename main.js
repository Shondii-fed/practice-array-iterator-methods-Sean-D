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
