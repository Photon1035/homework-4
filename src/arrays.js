// ============================================
// arrays.js
// Робота з масивами різних типів даних
// ============================================

// --- 1. Масив рядків (string) ---
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("=== Масив рядків ===");
console.log("Початковий масив:", stringArray);

stringArray.push("fig");
stringArray.unshift("apricot");
console.log("Після push та unshift:", stringArray);

stringArray.pop();
stringArray.shift();
console.log("Після pop та shift:", stringArray);

console.log("Перебір через forEach:");
stringArray.forEach((item, index) => {
    console.log(`  [${index}] ${item} (довжина: ${item.length})`);
});

const upperCaseArray = stringArray.map(item => item.toUpperCase());
console.log("Результат map (upperCase):", upperCaseArray);


// --- 2. Масив чисел (number) ---
const numberArray = [10, 20, 30, 40, 50];
console.log("\n=== Масив чисел ===");
console.log("Початковий масив:", numberArray);

const sum = numberArray.reduce((acc, num) => acc + num, 0);
console.log("Сума елементів:", sum);

const filteredNumbers = numberArray.filter(num => num > 20);
console.log("Числа більші за 20:", filteredNumbers);

console.log("Перебір через forEach:");
numberArray.forEach((num, index) => {
    console.log(`  [${index}] = ${num}`);
});

const doubledNumbers = numberArray.map(num => num * 2);
console.log("Результат map (множення на 2):", doubledNumbers);


// --- 3. Масив булевих значень (boolean) ---
const booleanArray = [true, false, true, true, false];
console.log("\n=== Масив boolean ===");
console.log("Початковий масив:", booleanArray);

const allTrue = booleanArray.every(val => val === true);
console.log("Всі значення true?", allTrue);

const hasTrue = booleanArray.some(val => val === true);
console.log("Є хоч одне true?", hasTrue);

console.log("Перебір через forEach:");
booleanArray.forEach((val, index) => {
    console.log(`  [${index}] = ${val}`);
});

const invertedBooleans = booleanArray.map(val => !val);
console.log("Результат map (інверсія):", invertedBooleans);


// --- 4. Масив будь-яких типів (any) ---
const anyArray = ["text", 42, true, { name: "object" }, [1, 2, 3], null];
console.log("\n=== Масив any (різні типи) ===");
console.log("Початковий масив:", anyArray);

console.log("Перебір через forEach з типами:");
anyArray.forEach((item, index) => {
    console.log(`  [${index}] значення: ${JSON.stringify(item)}, тип: ${typeof item}`);
});

const typesArray = anyArray.map(item => typeof item);
console.log("Результат map (типи):", typesArray);

const foundNumber = anyArray.find(item => typeof item === "number");
console.log("Перше знайдене число:", foundNumber);
