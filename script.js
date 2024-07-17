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