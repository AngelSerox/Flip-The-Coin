# Flip The Coin - DevChallenges Solution

This is my solution to the **Flip The Coin** challenge from the **DevChallenges.io** platform. 
This project is a fun, interactive web game designed to test core web development skills by combining structured HTML5,
stylized CSS3 layout effects, and vanilla JavaScript event handling.

## 🎯 Project Goals
- Master the integration of JavaScript logic within an active web page.
- Gain experience in **DOM Manipulation** by selecting and dynamically updating HTML elements based on user interaction.
- Practice **Event Handling** in JavaScript using `addEventListener` to capture and respond to click events.
- Enhance CSS styling skills by implementing specialized typography shadow effects and custom component borders.
- Deliver a fully responsive, lightweight, and engaging mobile-first web game.

## 📋 Features & Requirements Fulfilled
According to the challenge specifications, the web application includes:
- **Interactive Gameplay:** A dynamic "Flip Coin" button that triggers a virtual coin toss.
- **Randomization Logic:** Implemented secure probability scripting (`Math.random() < 0.5`) to randomly produce and render either **Heads** or **Tails**.
- **Visual Polish & Styling:**
  - Applied the recommended stylized text stroke and drop shadow to the heading:
    ```css
    text-shadow: 2px 2px 0px #35383f;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: #35383f;
    ```
  - Designed the primary interaction button with a prominent 3D-effect shadow:
    ```css
    box-shadow: 0px 4px 0px 0px #23649b;
    ```
- **Result Display:** Instantly updates the webpage's DOM with the final coin toss outcome using clean `textContent` injection.
- **Responsive Fluidity:** Fully adaptive interface that scales seamlessly on mobile phones, tablets, and desktop displays.

## 🛠️ Tech Stack
- **HTML5** (Semantic layout structure for game screens)
- **CSS3** (Typography stroke effects, 3D button shadows, Flexbox centering, and media queries)
- **JavaScript (Vanilla)** (Randomization logic, event listeners, and dynamic DOM updating)
- **Editor:** Visual Studio Code
