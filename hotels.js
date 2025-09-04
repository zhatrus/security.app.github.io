const hotels = {
    cities: {
        "Львів": [
            { name: "Таурус", status: "Погоджено" },
            { name: "Premier Hotel Dnister", status: "Погоджено" },
            { name: "Супутник", status: "Погоджено" },
            { name: "Львів", status: "Погоджено" },
            { name: "PANORAMA Lviv Hotel", status: "Погоджено" },
            { name: "Пальма", status: "Погоджено" },
            { name: "LOFT7 Hotel&Restaurant", status: "Погоджено" },
            { name: "Optima Дворжец Львів", status: "Погоджено" },
            { name: "Optima Collection Медіваль", status: "Погоджено" },
            { name: "Optima Collection Мурал Львів", status: "Погоджено" },
            { name: "Древній Град", status: "Погоджено" },
            { name: "RIUS Hotel", status: "Погоджено" },
            { name: "Соната", status: "Погоджено" },
            { name: "Патріарший", status: "Погоджено" },
            { name: "Євроготель", status: "Погоджено" }
        ],
        "Брюховичі": [
            { name: "Дім Паломника", status: "Погоджено" }
        ],
        "Східниця": [
            { name: "Таор Карпати Резорт і СПА", status: "Погоджено" },
            { name: "Осоння Карпати", status: "Погоджено" }
        ],
        "Стрий": [
            { name: "Опал", status: "Погоджено" },
            { name: "Гостинний двір", status: "Погоджено" },
            { name: "Золото Карпат", status: "Погоджено" }
        ],
        "Трускавець": [
            { name: "Green Park Hotel & SPA", status: "Погоджено" },
            { name: "Лісова Пісня", status: "Погоджено" },
            { name: "Шале Грааль/Chale Graal Apart hotel Spa Medical", status: "Погоджено" },
            { name: "Міротель", status: "Погоджено" }
        ],
        "Тернопіль": [
            { name: "Тернопіль", status: "Погоджено" },
            { name: "Готельний комплекс \"Глобус\"", status: "Погоджено" }
        ],
        "Зарваниця": [
            { name: "Готель у Зарваниці", status: "Погоджено" }
        ],
        "Івано-Франківськ": [
            { name: "Станіславів", status: "Погоджено" },
            { name: "Надія", status: "Погоджено" }
        ],
        "Коломия": [
            { name: "Готельний комплекс «Вербіж»", status: "Погоджено" }
        ],
        "Татарів": [
            { name: "Коруна", status: "Погоджено" }
        ],
        "Хмельницький": [
            { name: "Potocki Boutique Hotel", status: "Погоджено" },
            { name: "Хостел Карітасу Хмельницький", status: "Погоджено" }
        ],
        "Житомир": [
            { name: "Optima Collection Житомир", status: "Погоджено" }
        ],
        "Вінниця": [
            { name: "Затишок", status: "Погоджено" },
            { name: "Статус", status: "Погоджено" }
        ],
        "Одеса": [
            { name: "Аркадія", status: "Погоджено" },
            { name: "Hotel 52", status: "Погоджено" },
            { name: "Каліфорнія", status: "Погоджено" },
            { name: "Hotel Bossfor", status: "Погоджено" },
            { name: "Hotel & Restaurant \"ALARUS LUXE\"", status: "Погоджено" }
        ],
        "Дніпро": [
            { name: "Light Hotel", status: "Погоджено" },
            { name: "Menorah Hotel", status: "Погоджено" },
            { name: "Optima Collection Троїцька", status: "Погоджено" },
            { name: "Корона", status: "Погоджено" }
        ],
        "Кам'янське": [
            { name: "Hotel Premier", status: "Погоджено" }
        ],
        "Миколаїв": [
            { name: "Палац Україна", status: "Погоджено" },
            { name: "Каравела", status: "Погоджено" }
        ],
        "Полтава": [
            { name: "Атмосфера", status: "Погоджено" },
            { name: "Premier Hotel Palazzo", status: "Погоджено" },
            { name: "Аристократ", status: "Погоджено" },
            { name: "Optima Collection Галерея Полтава", status: "Погоджено" }
        ],
        "Кропивницький": [
            { name: "Optima Кропивницький", status: "Погоджено" },
            { name: "Сіті Бізнес apart", status: "Погоджено" },
            { name: "Марія", status: "Погоджено" }
        ],
        "Київ": [
            { name: "ibis Kyiv City Center", status: "Погоджено" },
            { name: "Radisson Blu Hotel", status: "Погоджено" },
            { name: "Premier Hotel Rus", status: "Погоджено" },
            { name: "Bratislava Hotel", status: "Погоджено" },
            { name: "CITYHOTEL", status: "Погоджено" },
            { name: "ORION apartments", status: "Погоджено" },
            { name: "Ramada Encore", status: "Погоджено" },
            { name: "Прем'єр Палац", status: "Погоджено" },
            { name: "Sky Loft Hotel Kyiv by Rixwell", status: "Погоджено" }
        ],
        "Княжичі": [
            { name: "Княжий Двір", status: "Погоджено" }
        ],
        "Чубинське": [
            { name: "KIDEV Park Hotel", status: "Погоджено" }
        ],
        "Козин": [
            { name: "Platium Spa & Resort", status: "Погоджено" }
        ],
        "Мощун": [
            { name: "Пуща Лісова", status: "Погоджено" }
        ],
        "Чернігів": [
            { name: "Optima Collection Чернігів", status: "Погоджено" }
        ],
        "Ромни": [
            { name: "Флоріана", status: "Погоджено" },
            { name: "Орхідея", status: "Погоджено" }
        ],
        "Чернівці": [
            { name: "Буковина", status: "Погоджено" },
            { name: "Georg Palace", status: "Погоджено" },
            { name: "Allure Inn", status: "Погоджено" }
        ],
        "Тарашани": [
            { name: "Georg Park", status: "Погоджено" }
        ],
        "Рівне": [
            { name: "Optima Collection Бергшлосс", status: "Погоджено" }
        ],
        "Луцьк": [
            { name: "Optima Collection River Park", status: "Погоджено" },
            { name: "Срібні лелеки", status: "Погоджено" },
            { name: "Noble Boutique Hotel", status: "Погоджено" },
            { name: "MOJO Hotel", status: "Погоджено" }
        ],
        "Нововолинськ": [
            { name: "Бобри Плюс", status: "Погоджено" }
        ],
        "Ковель": [
            { name: "Resttime", status: "Погоджено" }
        ],
        "Дольськ": [
            { name: "База відпочинку \"Парасолька\"", status: "Погоджено" }
        ]
        // Можна додати інші міста
    },

    // Функція для отримання готелів за містом
    getHotelsByCity: function(city) {
        // Перевіряємо чи є готелі для міста
        const cityHotels = this.cities[city];
        
        if (!cityHotels || cityHotels.length === 0) {
            // Якщо готелів немає, повертаємо один стандартний варіант
            return [{ name: "Погоджено з СБ", status: "Погоджено" }];
        }
        
        // Повертаємо список готелів для міста
        return cityHotels;
    }
};

// Робимо доступним глобально
window.hotels = hotels;