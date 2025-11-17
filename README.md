# Lovelady High School - Schedule & Events Website

A dynamic, customizable website featuring multiple bell schedules, theme switching, live clock, and countdown timers to upcoming school events. Built with pure HTML, CSS, and JavaScript - no dependencies required!

## ✨ Features

### 📅 Multiple Bell Schedules
- **Bell Schedule** - Regular school day schedule
- **Pep Rally Schedule** - Modified schedule for pep rally days
- **Early Release Schedule** - Shortened day schedule
- Automatic highlighting of current period
- Easy schedule switching with one click
- Remembers your preferred schedule

### 🎨 7 Amazing Themes
Switch between multiple themes to match your vibe:
- **Onyx Black** - Sleek dark theme with green accents (default)
- **Cyberpunk 2077** - Neon pink and cyan futuristic aesthetic
- **Fallout 4** - Classic green terminal vibes
- **Fallout Show** - Orange wasteland atmosphere  
- **GTA Vice City** - Purple and cyan retro gaming style
- **Roblox** - Blue and red platform colors
- **Brainrot** - Rainbow gradient chaos mode

All themes are saved automatically so they persist when you reload!

### ⏰ Live Features
- **Real-time Clock** - Updates every second in 24-hour format
- **Dynamic Countdowns** - Multiple event timers showing days, hours, minutes, and seconds
- **Auto-sorting** - Automatically separates upcoming and past events
- **Current Period Highlight** - Shows which class you're in right now

### 📱 Fully Responsive
Works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- Any screen size!

## 🎯 How to Customize

All customization is done in the `script.js` file, which has detailed comments to guide you!

### Adding a New Event

1. Open `script.js`
2. Find the `events` array (around line 50)
3. Add a new line following this format:

```javascript
{ name: "Your Event Name", date: "2026-05-15" },
```

**Important:** Dates must be in `YYYY-MM-DD` format!

**Example:**
```javascript
const events = [
    { name: "Thanksgiving Break", date: "2025-11-27" },
    { name: "Winter Break", date: "2025-12-20" },
    { name: "Your New Event", date: "2026-04-20" },  // <-- Add here!
];
```

### Changing Bell Schedule Times

1. Open `script.js`
2. Find the `schedules` object (starts around line 15)
3. Modify the times for any schedule:

```javascript
{ name: "1st Period", start: "07:25", end: "08:17" },
```

**Note:** Times use 24-hour format:
- Morning: `07:00` = 7:00 AM
- Afternoon: `13:00` = 1:00 PM
- Use `HH:MM` format (always two digits)

### Adding a New Bell Schedule

Copy one of the existing schedules and modify it:

```javascript
newSchedule: {
    name: "Assembly Schedule",
    periods: [
        { name: "1st Period", start: "07:30", end: "08:15" },
        { name: "2nd Period", start: "08:20", end: "09:05" },
        // Add more periods...
    ]
}
```

## 🚀 GitHub Pages Deployment

### Quick Setup (5 minutes!)

1. **Create a GitHub account** at https://github.com (if you don't have one)

2. **Create a new repository:**
   - Click the `+` icon → "New repository"
   - Name it something like `school-schedule`
   - Make it Public
   - Click "Create repository"

3. **Upload your files:**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md` (optional)
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select `main` branch
   - Click Save
   - Wait 1-2 minutes

5. **Your site is live!**
   - You'll see a URL like: `https://yourusername.github.io/school-schedule/`
   - Share this link with your school!

### Using Git Command Line (Advanced)

```bash
# Clone or create your repository
git clone https://github.com/yourusername/school-schedule.git
cd school-schedule

# Add all files
git add index.html styles.css script.js README.md

# Commit
git commit -m "Add school schedule website"

# Push to GitHub
git push origin main
```

Then enable GitHub Pages in your repository settings as described above.

## 🖥️ Local Testing

Want to test before uploading? Just open `index.html` in any web browser!

Or use a local server:

```bash
# Using Python 3
python -m http.server 5000

# Then visit: http://localhost:5000
```

## 📁 File Structure

```
school-schedule/
├── index.html          # Main page structure
├── styles.css          # All styling and themes (uses CSS variables)
├── script.js          # Logic, schedules, events, themes
└── README.md          # This file (documentation)
```

## 🎓 How It Works

### Theme System
- Uses CSS custom properties (variables) for easy theme switching
- Themes are stored in `localStorage` to persist between visits
- No page reload needed when switching themes

### Schedule System  
- Three pre-configured schedules based on Lovelady High School
- Automatically detects and highlights current period
- Schedule preference saved in browser

### Countdown System
- Calculates time differences in real-time
- Automatically separates past and upcoming events
- Updates every second for accuracy
- Shows full date information for each event

## 💡 Tips & Tricks

1. **Change Default Theme:** Edit line 166 in `script.js`:
   ```javascript
   const savedTheme = localStorage.getItem('selectedTheme') || 'cyberpunk';
   ```

2. **Remove Past Events:** Delete or comment out events with old dates in the `events` array

3. **Customize Colors:** Each theme object in `script.js` has 7 color properties you can adjust

4. **Mobile View:** The site automatically rearranges for phones - schedules move below countdowns

## 🔧 Troubleshooting

**Countdown shows "This event has passed"**
- Update the date to a future date in `YYYY-MM-DD` format

**Schedule doesn't highlight current period**
- Check that times are in 24-hour format (`HH:MM`)
- Make sure your computer clock is set correctly

**Theme won't change**
- Clear your browser cache
- Check browser console for JavaScript errors (F12)

**Site not loading on GitHub Pages**
- Wait 2-3 minutes after enabling Pages
- Check that files are named exactly: `index.html`, `styles.css`, `script.js`
- Make sure repository is set to Public

## 🌟 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (version 90+)
- Firefox (version 88+)
- Safari (version 14+)
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires JavaScript enabled!

## 📝 License

Free to use and modify for educational purposes. Perfect for schools and student projects!

## 🎉 Credits

Created for Lovelady High School with industrial-style digital aesthetics and multiple theme options.

---

**Need help?** Check the comments in `script.js` - they explain everything in detail!
