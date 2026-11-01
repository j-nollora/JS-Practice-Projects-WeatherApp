# Weather App — Practice & Study Journal

> **Learning Project:** Code-along study repository based on the [GreatStack Weather App Tutorial](https://youtu.be/MIYQR-Ybrn4?si=cJWCm_efGv4TaqtK). Built for practicing frontend web development fundamentals, DOM manipulation, and asynchronous API integration.

---

## Learning Reflections & Key Takeaways

As a beginner in JavaScript, this project served as a practical exercise to bridge HTML/CSS with dynamic script logic.

### 1. Connecting HTML/CSS to JavaScript (DOM Manipulation)
* **What I learned:** How JavaScript reads and modifies specific elements inside an HTML file using `document.querySelector()`.
* **Key Concept:** Using class names (e.g., `.temperature`, `.humidity`, `.weather-icon`) and IDs (e.g., `#cityInput`, `#searchButton`) as hooks to inject dynamic values and change image source paths (`.src`).

### 2. Fetching Remote Data (`async` / `await`)
* **What I learned:** How to fetch real-time data from external servers using OpenWeatherMap's REST API.
* **Key Concept:** 
  * `fetch()` initiates asynchronous HTTP requests.
  * `await` pauses execution until data is retrieved without freezing the UI.
  * `.json()` converts raw API responses into usable JavaScript objects.

### 3. Event Handling
* **What I learned:** How to capture user input and trigger functions based on DOM events.
* **Key Concept:** Listening for `click` events on the search button and `keypress` (`Enter` key) inside the text input box.

---

## Bugs Encountered & Debugging Notes

Keeping track of syntax mistakes helped reinforce strict JavaScript rules:

* **Variable Name Collisions:** Learned not to give global DOM variables the exact same name as function parameters (e.g., distinguishing the global `searchBox` input element from the `city` string parameter inside `checkWeather(city)`).
* **Case Sensitivity in DOM Properties:** Discovered that property names in JavaScript must match exact casing (e.g., `.src` vs `.Src`).
* **Clean String Concatenation:** Noticed how easy it is for Markdown syntax or trailing spaces to corrupt string URLs in API calls (`apiUrl + city + ...`).

---

## Next Practice Steps

Ideas to practice independently on top of this tutorial codebase:

- [ ] Practice adding keyboard accessibility and focus styles.
- [ ] Practice implementing a unit toggle button to convert Celsius to Fahrenheit.
- [ ] Research how to safely hide API keys when deploying projects to production (e.g., Vercel environment variables).

---

## Resources & Attribution

* **Original Tutorial & Design:** Created by **[GreatStack](https://www.youtube.com/@GreatStackDev)** on YouTube.
* **Tutorial Video:** [Build Weather App Using HTML CSS & JavaScript](https://youtu.be/MIYQR-Ybrn4?si=cJWCm_efGv4TaqtK).
* **API Data Provider:** Weather data retrieved from [OpenWeatherMap API](https://openweathermap.org/).