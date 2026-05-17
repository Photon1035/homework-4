// ============================================
// loop.js
// Демонстрація всіх видів циклів у JavaScript
// ============================================

// --- 1. Цикл for: від 0 до 9 ---
console.log("=== 1. Цикл for: від 0 до 9 ===");
for (let i = 0; i <= 9; i++) {
    console.log(`Ітерація: ${i}`);
}

// --- 2. Цикл for: від 100 до 0 з кроком 10 ---
console.log("\n=== 2. Цикл for: від 100 до 0 з кроком 10 ===");
for (let i = 100; i >= 0; i -= 10) {
    console.log(`Ітерація: ${i}`);
}

// --- 3. Цикл while: від 0 до 9 ---
console.log("\n=== 3. Цикл while: від 0 до 9 ===");
let counter = 0;
while (counter <= 9) {
    console.log(`Ітерація: ${counter}`);
    counter++;
}

// --- 4. Цикл do...while: від 100 до 0 з кроком 10 ---
console.log("\n=== 4. Цикл do...while: від 100 до 0 з кроком 10 ===");
let value = 100;
do {
    console.log(`Ітерація: ${value}`);
    value -= 10;
} while (value >= 0);

// --- 5. Цикл for...of: перебір масиву ---
console.log("\n=== 5. Цикл for...of: перебір елементів масиву ===");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
    console.log(`Елемент: ${num}`);
}

// --- 6. Цикл for...in: перебір властивостей об'єкта ---
console.log("\n=== 6. Цикл for...in: перебір властивостей об'єкта ===");
const stepsObject = {
    step1: 100,
    step2: 90,
    step3: 80,
    step4: 70,
    step5: 60,
    step6: 50,
    step7: 40,
    step8: 30,
    step9: 20,
    step10: 10,
    step11: 0
};
for (const key in stepsObject) {
    console.log(`${key} = ${stepsObject[key]}`);
}
