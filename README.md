# New Year Countdown Webpage Documentation

## 1. Overview
This project is a simple webpage that displays a countdown timer to the next New Year. It includes:

- A dynamic countdown timer.
- A preview button to display "Happy New Year!" once the countdown reaches zero.
- An image with descriptive text in a rounded rectangle.
- A YouTube link button for additional interaction.
- A colorful animated background.

## 2. File Structure
- **HTML**: Defines the structure and content of the webpage.
- **CSS**: Adds styling for layout, fonts, colors, and visual aesthetics.
- **JavaScript**: Implements the countdown logic and interactivity.

## 3. Code Walkthrough

### HTML
The HTML structure contains:

- **`<head>` Section**: Sets metadata, title, and links the CSS styling.
- **`<body>` Section**: Contains the visual content and interactive elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Year Countdown</title>
    <style>/* CSS Content */</style>
</head>
<body>
    <!-- Countdown Timer Section -->
    <div class="content">
        <div id="timer">00:00:00:00</div>
        <h1>New Year Countdown</h1>
        <button class="preview-button" onclick="showPreview()">PREVIEW</button>
        <a href="https://www.youtube.com/watch?v=XGxIE1hr0w4" class="link-button" target="_blank">Watch Celebration</a>
    </div>

    <!-- Image Section -->
    <div class="image-container">
        <img src="background-image.png" alt="New Year Celebration">
        <div class="text-box">
            I am Manas Ranjan, a third-year student in the MTH department. I am looking forward to learning Web Development.
        </div>
    </div>

    <script>/* JavaScript Content */</script>
</body>
</html>
```
### CSS
The CSS ensures an elegant and responsive design. Here's the breakdown:

BODY STYLING
```css
body {
    font-family: Arial, sans-serif;
    height: 100vh;
    margin: 0;
    background: url('background-image.png') no-repeat center center/cover; /* Full-screen background */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    color: #fff;
}
```

COUNTDOWN AND CONTENT STYLING
```css
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4); /* Semi-transparent white */
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#timer {
    font-size: 3em;
    color: #151616;
    margin: 20px 0;
}

.preview-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ffcc00;
    color: #151616;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
```
- **`.content`**: Displays the countdown, title, and buttons in a rounded rectangle.
- **`#timer`**: Displays the countdown timer.
- **`.preview-button`**: Adds a styled button for interactivity.

IMAGE AND TEXT BOX STYLING
```css
.image-container {
    max-width: 30%;
    position: relative;
    top: -50px;
}

.image-container img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.text-box {
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 15px;
    color: white;
    margin-top: 10px;
    text-align: center;
}
```
**`.image-container`: Displays the image.
**`.text-box`: Adds a rounded rectangle with descriptive text below the image.

YOUTUBE LINK BUTTON STYLING
```css
.link-button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #2b86c5;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
}

.link-button:hover {
    background-color: #1f6aa5;
}
```
**`.link-button`: Styles a button linking to an external YouTube video.
### JavaScript
The JavaScript manages the countdown logic and the button interactivity.

COUNTDOWN FUNCTIONALITY
```javascript
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0);
    const timeDifference = newYear - now;

    if (timeDifference <= 0) {
        document.getElementById('timer').textContent = "Happy New Year!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent =
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
```
**`updateCountdown()`: Calculates the time difference between now and the next New Year and updates the timer every second.

PREVIEW BUTTON LOGIC
```javascript
function showPreview() {
    if (document.getElementById('timer').textContent === "Happy New Year!") {
        alert("Happy New Year!");
    } else {
        alert("The countdown is not yet finished.");
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
```
**`showPreview()`: Checks if the countdown is complete and displays an appropriate alert.
