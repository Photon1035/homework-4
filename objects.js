

const university = {
  name: 'RobotUA',
  city: 'Одеса',
  founded: 1999,

  // 2-й рівень ієрархії — вкладений об'єкт
  address: {
    street: 'вул. Варіантна',
    building: 83,
    zip: '65000',
  },

  // Масив (на 2-му рівні)
  groups: [
    {
      name: 'JS-101',
      studentsCount: 18,
      students: ['Іван', 'Олена', 'Петро', 'Марія'],
    },
    {
      name: 'JS-102',
      studentsCount: 22,
      students: ['Сергій', 'Анна', 'Дмитро'],
    },
    {
      name: 'JS-103',
      studentsCount: 15,
      students: ['Назар', 'Софія', 'Артем'],
    },
  ],

  // Метод, що виводить значення з об'єкта
  printInfo() {
    console.log('=== Інформація про навчальний заклад ===');
    console.log(`Назва: ${this.name}`);
    console.log(`Місто: ${this.city}`);
    console.log(`Рік заснування: ${this.founded}`);
    console.log(`Адреса: ${this.address.street}, ${this.address.building}, ${this.address.zip}`);

    console.log('Групи:');
    this.groups.forEach((group, index) => {
      console.log(`  ${index + 1}) ${group.name} — студентів: ${group.studentsCount}`);
      console.log(`     Студенти у списку: ${group.students.join(', ')}`);
    });

    // Загальна кількість студентів через reduce
    const total = this.groups.reduce((acc, g) => acc + g.studentsCount, 0);
    console.log(`Загальна кількість студентів: ${total}`);
  },
};

// Виклик методу
university.printInfo();
