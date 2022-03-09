let spans = document.querySelectorAll(".the-progress span");
let skills = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

let countDownDate = new Date("Mar 31, 2022 23:25:07").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDeff = countDownDate - dateNow;

    let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

    document.querySelector(".events .days").innerHTML = days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDeff < 0) {
        clearInterval(counter);
    }
}, 1000);


