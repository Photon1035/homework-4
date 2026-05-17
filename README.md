# Homework 4 — JavaScript Basics

Навчальний проєкт на чистому JavaScript (Node.js, ESM-модулі). Демонструє роботу з циклами, масивами та об'єктами.

## 📋 Зміст завдання

1. Цикли різних видів: `for`, `while`, `do...while`, `for...of`, `for...in`
2. Масиви чотирьох базових типів (string, number, boolean, any) з операціями `forEach`, `map`, `filter`, `reduce` тощо
3. Комплексний об'єкт з мінімум двома рівнями ієрархії, масивом та методом виведення

## 🗂 Структура проєкту

```
homework-4/
├── src/
│   ├── index.js      # точка входу — запускає всі модулі
│   ├── loop.js       # демонстрація 5 видів циклів
│   ├── arrays.js     # робота з масивами різних типів
│   └── objects.js    # комплексний об'єкт з ієрархією
├── .gitignore        # ігноровані файли (node_modules і т.д.)
├── package.json      # маніфест проєкту з npm-скриптами
└── README.md         # цей файл
```

## ⚙️ Вимоги

- Node.js версії **18 або вище**
- npm (входить у поставку Node.js)

Перевірити версію:
```bash
node --version
```

## 🚀 Запуск

### Встановлення
```bash
git clone https://github.com/Photon1035/homework-4.git
cd homework-4
```

Залежностей у проєкті немає, тому `npm install` запускати не потрібно.

### Виконання

Запустити **всі модулі одразу** (через `index.js`):
```bash
npm start
```

Або кожен модуль окремо:
```bash
npm run loop      # цикли
npm run arrays    # масиви
npm run objects   # об'єкти
```

Альтернативно — напряму через Node.js:
```bash
node src/loop.js
node src/arrays.js
node src/objects.js
```

## 📚 Опис модулів

### `src/loop.js`
Шість прикладів циклів:
1. `for` від 0 до 9
2. `for` від 100 до 0 з кроком 10
3. `while` від 0 до 9
4. `do...while` від 100 до 0 з кроком 10
5. `for...of` — перебір елементів масиву
6. `for...in` — перебір властивостей об'єкта

### `src/arrays.js`
Чотири масиви базових типів і операції над ними:
- **string** — `push`, `unshift`, `pop`, `shift`, `forEach`, `map`
- **number** — `reduce`, `filter`, `forEach`, `map`
- **boolean** — `every`, `some`, `forEach`, `map`
- **any** — `forEach` з `typeof`, `map`, `find`

### `src/objects.js`
Об'єкт `university` з трьома рівнями ієрархії (`university → address → coordinates`), масивом `faculties` (з вкладеними об'єктами та власними масивами `departments`) і методом `printInfo()`, що використовує `this`, `forEach` і `reduce`.

## 👤 Автор

Khrystyna Prykhodchenko
