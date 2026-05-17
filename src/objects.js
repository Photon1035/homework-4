// ============================================
// objects.js
// Комплексний об'єкт з ієрархією, масивом та методом
// ============================================

const university = {
    // Рівень 1: основна інформація
    name: "Київський національний університет",
    foundedYear: 1834,
    isActive: true,

    // Рівень 2: вкладений об'єкт address
    address: {
        country: "Україна",
        city: "Київ",
        street: "вул. Володимирська, 60",
        // Рівень 3: координати
        coordinates: {
            latitude: 50.4422,
            longitude: 30.5125
        }
    },

    // Масив факультетів (з вкладеними об'єктами)
    faculties: [
        {
            name: "Факультет інформаційних технологій",
            studentsCount: 1200,
            departments: ["Програмна інженерія", "Кібербезпека", "Штучний інтелект"]
        },
        {
            name: "Факультет економіки",
            studentsCount: 950,
            departments: ["Фінанси", "Менеджмент", "Маркетинг"]
        },
        {
            name: "Факультет філології",
            studentsCount: 700,
            departments: ["Українська мова", "Англійська мова", "Перекладознавство"]
        }
    ],

    // Метод, що виводить інформацію про університет
    printInfo() {
        console.log("=== Інформація про університет ===");
        console.log(`Назва: ${this.name}`);
        console.log(`Рік заснування: ${this.foundedYear}`);
        console.log(`Активний: ${this.isActive ? "Так" : "Ні"}`);

        console.log("\n--- Адреса ---");
        console.log(`Країна: ${this.address.country}`);
        console.log(`Місто: ${this.address.city}`);
        console.log(`Вулиця: ${this.address.street}`);
        console.log(`Координати: ${this.address.coordinates.latitude}, ${this.address.coordinates.longitude}`);

        console.log("\n--- Факультети ---");
        this.faculties.forEach((faculty, index) => {
            console.log(`\n${index + 1}) ${faculty.name}`);
            console.log(`   Кількість студентів: ${faculty.studentsCount}`);
            console.log(`   Кафедри: ${faculty.departments.join(", ")}`);
        });

        const totalStudents = this.faculties.reduce(
            (sum, faculty) => sum + faculty.studentsCount,
            0
        );
        console.log(`\nЗагальна кількість студентів: ${totalStudents}`);
    }
};

university.printInfo();
