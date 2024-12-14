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

