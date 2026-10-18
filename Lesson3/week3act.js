// Student Grade Analyzer

let scores = [85, 72, 91, 64, 78];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
console.log(scores[i]);
}

console.log("");

for (let i = 0; i < scores.length; i++) {
let score = scores[i];
let rating;

if (score >= 90) {
rating = "Excellent";
} else if (score >= 80) {
rating = "Very Good";
} else if (score >= 75) {
rating = "Good";
} else {
rating = "Failed";
}

if (score >= 75) {
passed++;
console.log("Student " + (i + 1) + ": " + score + " - " + rating + " - Passed");
} else {
failed++;
console.log("Student " + (i + 1) + ": " + score + " - " + rating);
}

total = total + score;

if (score > highest) {
highest = score;
}

if (score < lowest) {
lowest = score;
}
}

let average = total / scores.length;

console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);