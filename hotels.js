const hotels = {
    cities: {
        "Львів": [
            { name: "Таурус", status: "Погоджено" },
            { name: "Premier Hotel Dnister", status: "Погоджено" },
            { name: "Супутник", status: "Погоджено" },
            { name: "Львів", status: "Погоджено" },
            { name: "PANORAMA Lviv Hotel", status: "Погоджено" },
            { name: "Крива Липа", status: "Потребує актуалізації" },
            { name: "Пальма", status: "Погоджено" },
            { name: "LOFT7 Hotel&Restaurant", status: "Погоджено" }
        ],
        "Київ": [
            { name: "ONOVO Dendra Hotel", status: "Потребує додаткового обстеження" },
            { name: "ibis Kyiv City Center", status: "Погоджено" },
            { name: "Radisson Blu Hotel", status: "Погоджено" },
            { name: "Premier Hotel Rus", status: "Погоджено" },
            { name: "Bratislava Hotel", status: "Погоджено" }
        ],
        "Одеса": [
            { name: "Аркадія", status: "Погоджено" },
            { name: "Hotel 52", status: "Погоджено" },
            { name: "Каліфорнія", status: "Погоджено" },
            { name: "Hotel Bossfor", status: "Погоджено" }
        ],
        "Дніпро": [
            { name: "Light Hotel", status: "Погоджено" },
            { name: "Menorah Hotel", status: "Погоджено" },
            { name: "Optima Collection Троїцька", status: "Погоджено" }
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