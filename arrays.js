

// 1. Масив рядків
const strings = ['яблуко', 'банан', 'апельсин', 'манго', 'ківі'];

console.log('--- Масив рядків ---');
console.log('Початковий масив:', strings);

// Додавання елемента в кінець
strings.push('ананас');
console.log('Після push:', strings);

// Видалення останнього елемента
strings.pop();
console.log('Після pop:', strings);

// Перебір через forEach
console.log('Перебір forEach:');
strings.forEach((item, index) => {
  console.log(`  ${index}: ${item}`);
});

// map — у верхній регістр
const stringsUpper = strings.map((item) => item.toUpperCase());
console.log('Після map (UPPERCASE):', stringsUpper);


// 2. Масив чисел
const numbers = [10, 25, 7, 42, 18, 3];

console.log('\n--- Масив чисел ---');
console.log('Початковий масив:', numbers);

// Сортування за зростанням
const sorted = [...numbers].sort((a, b) => a - b);
console.log('Відсортований:', sorted);

// Сума через forEach
let sum = 0;
numbers.forEach((n) => {
  sum += n;
});
console.log('Сума всіх елементів:', sum);

// map — піднести до квадрату
const squared = numbers.map((n) => n ** 2);
console.log('Квадрати чисел (map):', squared);


// 3. Масив boolean
const booleans = [true, false, true, true, false];

console.log('\n--- Масив boolean ---');
console.log('Початковий масив:', booleans);

// Підрахунок true через forEach
let trueCount = 0;
booleans.forEach((b) => {
  if (b) trueCount++;
});
console.log('Кількість true:', trueCount);
console.log('Кількість false:', booleans.length - trueCount);

// map — інвертування значень
const inverted = booleans.map((b) => !b);
console.log('Інвертовані значення (map):', inverted);


// 4. Масив any (змішаних типів)
const mixed = [1, 'привіт', true, null, { name: 'Олег' }, [1, 2, 3], 3.14];

console.log('\n--- Масив any ---');
console.log('Початковий масив:', mixed);
console.log('Довжина масиву:', mixed.length);

// Перебір з визначенням типу
console.log('Перебір forEach з типом:');
mixed.forEach((item, index) => {
  console.log(`  ${index}: значення = ${JSON.stringify(item)}, тип = ${typeof item}`);
});

// map — повертає типи всіх елементів
const types = mixed.map((item) => typeof item);
console.log('Типи елементів (map):', types);
