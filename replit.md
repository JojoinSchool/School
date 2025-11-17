# School Schedule & Events Website

## Overview

A static web application that displays a live clock, daily bell schedule with automatic period highlighting, and countdown timers for upcoming school events. Built as a pure client-side application using vanilla HTML, CSS, and JavaScript with no external dependencies or build process. Features a dark onyx theme with industrial-style digital aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure vanilla JavaScript, HTML5, and CSS3 with no frameworks or libraries.

**Rationale**: Chosen for simplicity, zero dependencies, and easy deployment to GitHub Pages. Eliminates build processes and makes the code accessible to beginners.

**Design Pattern**: Component-based rendering using JavaScript DOM manipulation with interval-based updates for real-time features.

**Key Components**:
- **Live Clock Display**: Updates every interval showing current time in 24-hour format and full date
- **Bell Schedule Sidebar**: Grid-based layout showing all class periods with automatic highlighting of current period based on time matching
- **Event Countdown Timers**: Multiple simultaneous countdown displays calculating days, hours, minutes, and seconds until configured events

**State Management**: Time-based state derived from system clock and configuration arrays (`bellSchedule` and `events`). No persistent state storage required.

**Styling Approach**: CSS Grid for layout, custom CSS with gradient backgrounds, box shadows, and glow effects for industrial digital aesthetic. Mobile-responsive design using grid template adjustments.

**Update Mechanism**: setInterval-based polling for clock updates and period highlighting. Real-time calculations performed on each render cycle.

### Data Configuration

**Bell Schedule Structure**: Array of objects containing period name, start time, and end time in 24-hour format (HH:MM). Current period detection uses minute-based comparison against current system time.

**Event Structure**: Array of objects with event name and date string in YYYY-MM-DD format. Countdown calculations performed using Date object arithmetic.

**Customization**: All data configured directly in `script.js` arrays - no database or external data sources. Changes require file modification and redeployment.

### Deployment Architecture

**Target Platform**: GitHub Pages static hosting from main branch root directory.

**Build Process**: None required - files served directly as written.

**File Structure**:
- `index.html`: Single page application entry point
- `styles.css`: All styling rules
- `script.js`: All application logic and data configuration
- `README.md`: Documentation

## External Dependencies

**None**. The application is completely self-contained with no external libraries, APIs, frameworks, or third-party services. All functionality implemented using native browser APIs (Date, DOM manipulation, CSS Grid).

**Browser Requirements**: Modern browsers supporting ES6 JavaScript, CSS Grid, and standard DOM APIs.
