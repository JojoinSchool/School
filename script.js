// ============================================
// LOVELADY HIGH SCHOOL SCHEDULES
// ============================================
// You can add or modify schedules here. Each schedule needs:
// - name: Display name for the schedule
// - periods: Array of period objects with name, start time, and end time
// Times should be in 24-hour format (HH:MM)
// Example: "7:25" for 7:25 AM, "13:30" for 1:30 PM

const schedules = {
    bell: {
        name: "Bell Schedule",
        periods: [
            { name: "1st Period", start: "07:25", end: "08:17" },
            { name: "2nd Period", start: "08:22", end: "09:14" },
            { name: "Pride Time", start: "09:19", end: "09:38" },
            { name: "3rd Period", start: "09:43", end: "10:35" },
            { name: "4th Period", start: "10:40", end: "11:32" },
            { name: "5th Period", start: "11:37", end: "13:11" },
            { name: "Lunch A", start: "11:37", end: "12:07" },
            { name: "Lunch B", start: "12:09", end: "12:39" },
            { name: "Lunch C", start: "12:41", end: "13:11" },
            { name: "6th Period", start: "13:16", end: "14:08" },
            { name: "7th Period", start: "14:13", end: "15:05" }
        ]
    },
    pepRally: {
        name: "Pep Rally Schedule",
        periods: [
            { name: "1st Period", start: "07:25", end: "08:14" },
            { name: "2nd Period", start: "08:19", end: "09:08" },
            { name: "3rd Period", start: "09:13", end: "10:02" },
            { name: "4th Period", start: "10:07", end: "10:56" },
            { name: "5th Period", start: "11:01", end: "12:37" },
            { name: "Lunch A", start: "11:03", end: "11:33" },
            { name: "Lunch B", start: "11:35", end: "12:05" },
            { name: "Lunch C", start: "12:07", end: "12:37" },
            { name: "6th Period", start: "12:42", end: "13:31" },
            { name: "7th Period", start: "13:36", end: "14:25" },
            { name: "Pep Rally", start: "14:30", end: "15:05" }
        ]
    },
    earlyRelease: {
        name: "Early Release Schedule",
        periods: [
            { name: "1st Period", start: "07:25", end: "08:00" },
            { name: "2nd Period", start: "08:05", end: "08:40" },
            { name: "3rd Period", start: "08:45", end: "09:20" },
            { name: "4th Period", start: "09:25", end: "10:00" },
            { name: "5th Period", start: "10:05", end: "10:40" },
            { name: "6th Period", start: "10:45", end: "11:20" },
            { name: "7th Period", start: "11:25", end: "12:00" },
            { name: "Lunch", start: "12:05", end: "12:30" }
        ]
    }
};

let currentSchedule = 'bell';

// ============================================
// SCHOOL EVENTS
// ============================================
// Add your school events here! Each event needs:
// - name: The name of the event (e.g., "Winter Break", "Homecoming")
// - date: The date in YYYY-MM-DD format (e.g., "2025-12-20")
//
// HOW TO ADD A NEW EVENT:
// Just copy one of the lines below and change the name and date!
// Example: { name: "Field Trip", date: "2025-12-05" },

const events = [
    { name: "Thanksgiving Break", date: "2025-11-27" },
    { name: "Winter Break", date: "2025-12-20" },
    { name: "New Year 2026", date: "2026-01-01" },
    { name: "Spring Break", date: "2026-03-15" },
    { name: "Final Exams", date: "2026-06-01" },
    { name: "Last Day of School", date: "2026-06-15" },
    { name: "Homecoming Dance", date: "2024-11-30" },
    { name: "Halloween", date: "2024-10-31" }
];

// ============================================
// THEME SYSTEM
// ============================================

const themes = {
    black: {
        name: "Black",
        bgGradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        cardBg: "linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 100%)",
        textColor: "#ffffff",
        accentColor: "#888888",
        borderColor: "#333333",
        digitBg: "rgba(0, 0, 0, 0.7)",
        digitBorder: "#555555"
    },
    white: {
        name: "White",
        bgGradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
        cardBg: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
        textColor: "#1a1a1a",
        accentColor: "#333333",
        borderColor: "#cccccc",
        digitBg: "rgba(255, 255, 255, 0.9)",
        digitBorder: "#999999"
    },
    blackWhite: {
        name: "Black & White",
        bgGradient: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        cardBg: "linear-gradient(135deg, #1a1a1a 0%, #252525 100%)",
        textColor: "#ffffff",
        accentColor: "#00ff88",
        borderColor: "#444444",
        digitBg: "rgba(0, 0, 0, 0.6)",
        digitBorder: "#666666"
    }
};

let currentTheme = 'blackWhite';
let customAccentColor = null;

// ============================================
// THEME FUNCTIONS
// ============================================

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    document.documentElement.style.setProperty('--bg-gradient', theme.bgGradient);
    document.documentElement.style.setProperty('--card-bg', theme.cardBg);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    document.documentElement.style.setProperty('--digit-bg', theme.digitBg);
    document.documentElement.style.setProperty('--digit-border', theme.digitBorder);
    
    currentTheme = themeName;
    localStorage.setItem('selectedTheme', themeName);
    
    if (customAccentColor !== null) {
        document.documentElement.style.setProperty('--accent-color', customAccentColor);
    } else {
        document.documentElement.style.setProperty('--accent-color', theme.accentColor);
    }
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
}

function applyCustomColor(color) {
    customAccentColor = color;
    document.documentElement.style.setProperty('--accent-color', color);
    localStorage.setItem('customAccentColor', color);
}

function createThemeSwitcher() {
    const container = document.getElementById('themeSwitcher');
    container.innerHTML = Object.keys(themes).map(themeKey => `
        <button class="theme-btn ${themeKey === currentTheme ? 'active' : ''}" 
                data-theme="${themeKey}" 
                onclick="applyTheme('${themeKey}')">
            ${themes[themeKey].name}
        </button>
    `).join('');
}

// ============================================
// SCHEDULE FUNCTIONS
// ============================================

function createScheduleSelector() {
    const container = document.getElementById('scheduleSelector');
    container.innerHTML = Object.keys(schedules).map(scheduleKey => `
        <button class="schedule-btn ${scheduleKey === currentSchedule ? 'active' : ''}" 
                data-schedule="${scheduleKey}" 
                onclick="switchSchedule('${scheduleKey}')">
            ${schedules[scheduleKey].name}
        </button>
    `).join('');
}

function switchSchedule(scheduleKey) {
    currentSchedule = scheduleKey;
    localStorage.setItem('selectedSchedule', scheduleKey);
    renderBellSchedule();
    
    document.querySelectorAll('.schedule-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.schedule === scheduleKey);
    });
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dateString = now.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('currentDate').textContent = dateString;
}

function renderBellSchedule() {
    const container = document.getElementById('scheduleContainer');
    const schedule = schedules[currentSchedule];
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    container.innerHTML = schedule.periods.map(period => {
        const [startHour, startMin] = period.start.split(':').map(Number);
        const [endHour, endMin] = period.end.split(':').map(Number);
        const startTime = startHour * 60 + startMin;
        const endTime = endHour * 60 + endMin;
        
        const isActive = currentTime >= startTime && currentTime <= endTime;
        
        return `
            <div class="schedule-item ${isActive ? 'active' : ''}">
                <div class="period-name">${period.name}</div>
                <div class="period-time">${period.start} - ${period.end}</div>
            </div>
        `;
    }).join('');
}

// ============================================
// COUNTDOWN FUNCTIONS
// ============================================

function padZero(num, places = 2) {
    return String(num).padStart(places, '0');
}

function createDigits(value, places = 2) {
    const str = padZero(value, places);
    return str.split('').map(digit => `<div class="digit">${digit}</div>`).join('');
}

function calculateTimeUntil(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;
    
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, isPast: false };
}

function renderCountdowns() {
    const upcomingContainer = document.getElementById('upcomingEvents');
    const pastContainer = document.getElementById('pastEvents');
    
    const upcomingEvents = [];
    const pastEvents = [];
    
    events.forEach(event => {
        const time = calculateTimeUntil(event.date);
        if (time.isPast) {
            pastEvents.push(event);
        } else {
            upcomingEvents.push(event);
        }
    });
    
    upcomingContainer.innerHTML = upcomingEvents.map(event => {
        const time = calculateTimeUntil(event.date);
        return `
            <div class="countdown-card">
                <div class="countdown-header">
                    <div class="countdown-title">${event.name}</div>
                </div>
                <div class="countdown-display">
                    <div class="digit-group">
                        <div class="digits">${createDigits(time.days, 3)}</div>
                        <div class="digit-label">Days</div>
                    </div>
                    <div class="digit-group">
                        <div class="digits">${createDigits(time.hours)}</div>
                        <div class="digit-label">Hours</div>
                    </div>
                    <div class="digit-group">
                        <div class="digits">${createDigits(time.minutes)}</div>
                        <div class="digit-label">Minutes</div>
                    </div>
                    <div class="digit-group">
                        <div class="digits">${createDigits(time.seconds)}</div>
                        <div class="digit-label">Seconds</div>
                    </div>
                </div>
                <div class="countdown-info">Target date: ${new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</div>
            </div>
        `;
    }).join('');
    
    if (pastEvents.length > 0) {
        pastContainer.innerHTML = pastEvents.map(event => {
            return `
                <div class="past-event-card">
                    <div class="past-event-name">${event.name}</div>
                    <div class="past-event-date">${new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</div>
                </div>
            `;
        }).join('');
        document.getElementById('pastEventsSection').style.display = 'block';
    } else {
        document.getElementById('pastEventsSection').style.display = 'none';
    }
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'blackWhite';
    const savedSchedule = localStorage.getItem('selectedSchedule') || 'bell';
    const savedCustomColor = localStorage.getItem('customAccentColor');
    
    currentTheme = savedTheme;
    currentSchedule = savedSchedule;
    
    if (savedCustomColor) {
        customAccentColor = savedCustomColor;
        document.getElementById('colorPicker').value = savedCustomColor;
    } else {
        customAccentColor = null;
        document.getElementById('colorPicker').value = '#00ff88';
    }
    
    applyTheme(currentTheme);
    if (savedCustomColor) {
        applyCustomColor(savedCustomColor);
    }
    createThemeSwitcher();
    createScheduleSelector();
    updateClock();
    renderBellSchedule();
    renderCountdowns();
    
    setInterval(updateClock, 1000);
    setInterval(renderBellSchedule, 60000);
    setInterval(renderCountdowns, 1000);
    
    document.getElementById('colorPicker').addEventListener('input', (e) => {
        applyCustomColor(e.target.value);
    });
}

window.addEventListener('DOMContentLoaded', init);
