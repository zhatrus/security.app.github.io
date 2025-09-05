// База даних готелів
const hotelDB = {
    "Київ": [
        { name: "Premier Palace Hotel", status: "Погоджено" },
        { name: "Hilton Kyiv", status: "Погоджено" },
        { name: "Fairmont Grand Hotel", status: "На розгляді" }
    ],
    "Львів": [
        { name: "Леополіс Готель", status: "Погоджено" },
        { name: "Bank Hotel", status: "Погоджено" },
        { name: "Astoria Hotel", status: "Заборонено" }
    ],
    "Одеса": [
        { name: "Hotel de Paris", status: "Погоджено" },
        { name: "Duke Hotel", status: "Погоджено" },
        { name: "Bristol Hotel", status: "На розгляді" }
    ],
    // Додайте інші міста та готелі за потреби
};

// Експортуємо функції для роботи з готелями
window.hotels = {
    getHotelsByCity: function(city) {
        return hotelDB[city] || [];
    },
    
    isHotelApproved: function(city, hotelName) {
        const hotels = this.getHotelsByCity(city);
        const hotel = hotels.find(h => h.name === hotelName);
        return hotel && hotel.status === "Погоджено";
    }
};