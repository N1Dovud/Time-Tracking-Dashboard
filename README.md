# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Links

- Solution URL: [Git Repo](https://github.com/N1Dovud/Time-Tracking-Dashboard)
- Live URL: [Git live Page](https://n1dovud.github.io/Time-Tracking-Dashboard)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
### What I learned


```css
.report {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
    border-radius: 15px;
    z-index: 1;
    position: relative;
    top: -30px;
    left: 0;
    background-color: var(--Dark-blue);
}
```
```js
let statElements = []; 
let data = [];
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");
async function fetchDataAndProcess() {
    try {
        const response = await fetch("data.json");
        data = await response.json();

        const sections = document.querySelectorAll("section.card");

        sections.forEach((section, index) => {
            const title = data[index].title.toLowerCase();
            const h2Element = section.querySelector(`h2.${title}-stats`);
            const pElement = section.querySelector(`p.${title}-stats`);

            statElements.push({
                h2: h2Element,
                p: pElement
            });
        });
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
fetchDataAndProcess();
function weekly() {
    statElements.forEach((element, index) => {
        element.h2.textContent = `${data[index].timeframes.weekly.current}hrs`;
        element.p.textContent = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
    });
    weeklyBtn.style.color = "white";
    monthlyBtn.style.color = "hsl(235, 45%, 61%)";
    dailyBtn.style.color = "hsl(235, 45%, 61%)";
}
window.addEventListener("load", weekly);
dailyBtn.addEventListener("click", () => {
    statElements.forEach((element, index) => {
        element.h2.textContent = `${data[index].timeframes.daily.current}hrs`;
        element.p.textContent = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
    });
    dailyBtn.style.color = "white";
    monthlyBtn.style.color = "hsl(235, 45%, 61%)";
    weeklyBtn.style.color = "hsl(235, 45%, 61%)";
});
weeklyBtn.addEventListener("click", weekly);
monthlyBtn.addEventListener("click", () => {
    statElements.forEach((element, index) => {
        element.h2.textContent = `${data[index].timeframes.monthly.current}hrs`;
        element.p.textContent = `Last month - ${data[index].timeframes.monthly.previous}hrs`;
    });
    monthlyBtn.style.color = "white";
    weeklyBtn.style.color = "hsl(235, 45%, 61%)";
    dailyBtn.style.color = "hsl(235, 45%, 61%)";
});
```
### Continued development
I need to learn to solve my problems fast and I should make websites quickly without taking a whole day. I should master javascript and some parts of css.


## Author

- Frontend Mentor - [N1Dovud](https://www.frontendmentor.io/profile/N1Dovud)