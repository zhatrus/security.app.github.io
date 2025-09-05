// Глобальні змінні
const tripData = {
    legs: []
};
let currentStep = 1;
let currentLeg = {};

// Утиліти
class TripUtils {
    static getTransportLabel(transportKey) {
        const transportMap = {
            'train': 'Залізниця',
            'company_car': 'Службове авто',
            'bus': 'Автобус',
            'personal_car': 'Особисте авто'
        };
        return transportMap[transportKey] || transportKey;
    }

    static showToast(message, type = 'danger') {
        const toastContainer = document.querySelector('.toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast fade show';
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto text-${type}">Повідомлення</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">${message}</div>
        `;
        toastContainer.appendChild(toast);
        new bootstrap.Toast(toast, { delay: 5000 }).show();
    }

    static populateTimeSelect(selectId, minTime = null) {
        const select = document.getElementById(selectId);
        if (!select) return;
        
        select.innerHTML = '<option value="">Оберіть час...</option>';
        for (let hours = 0; hours < 24; hours++) {
            for (let minutes = 0; minutes < 60; minutes += 30) {
                const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
                if (!minTime || timeString > minTime) {
                    select.add(new Option(timeString, timeString));
                }
            }
        }
    }
}

// Клас для управління кроками
class StepManager {
    static showStep(stepNumber) {
        document.querySelector('.question-step.active-step').classList.remove('active-step');
        document.getElementById(`step-${stepNumber}`).classList.add('active-step');
        currentStep = stepNumber;
        UI.updateStepPreview();
    }

    static async processStep1() {
        const cityInput = document.getElementById('departure-city');
        const cityName = cityInput.value.trim();

        if (!cityName) {
            TripUtils.showToast('Будь ласка, введіть місто.');
            return;
        }

        currentLeg.departureCity = cityName;
        document.getElementById('main-header').style.display = 'none';
        this.showStep(2);
        cityInput.value = '';
    }

    // Інші методи для обробки кроків...
}

// Клас для управління інтерфейсом
class UI {
    static updateStepPreview() {
        const previewContainer = document.getElementById(`step-${currentStep}-preview`);
        const previewContent = document.getElementById(`step-${currentStep}-preview-content`);
        
        if (!previewContainer || !previewContent) return;

        // Оновлення превью...
    }

    static setupEventListeners() {
        // Налаштування всіх обробників подій...
    }
}

// Ініціалізація додатку
class App {
    static async init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    static async setup() {
        await auth.initialize();
        TripUtils.populateTimeSelect('departure-time');
        TripUtils.populateTimeSelect('arrival-time');
        TripUtils.populateTimeSelect('next-departure-time');
        UI.setupEventListeners();
    }
}

// Експорт основних функцій
window.app = {
    init: App.init.bind(App),
    showStep: StepManager.showStep.bind(StepManager),
    showToast: TripUtils.showToast,
    processStep1: StepManager.processStep1.bind(StepManager),
    // Інші методи...
};