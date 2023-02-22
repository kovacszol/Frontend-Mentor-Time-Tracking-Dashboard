const dailyClick = document.querySelector("#daily");
const weeklyClick = document.querySelector("#weekly");
const monthlyClick = document.querySelector("#monthly");
const dailyDisplay = document.querySelectorAll(".dailyDisplay");
const weeklyDisplay = document.querySelectorAll(".weeklyDisplay");
const monthlyDisplay = document.querySelectorAll(".monthlyDisplay");

window.addEventListener('load', function () {
    // add active class to dailyClick element
    dailyClick.classList.add('active');
    weeklyClick.classList.add('inactive');
    monthlyClick.classList.add('inactive');


    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }

});
dailyClick.addEventListener("click", function name() {
    dailyClick.classList.add('active');
    weeklyClick.classList.remove('active');
    monthlyClick.classList.remove('active');


    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }
})
weeklyClick.addEventListener("click", function name() {
    dailyClick.classList.remove('active');
    weeklyClick.classList.add('active');
    monthlyClick.classList.remove('active');


    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.remove("hidden");
    }
})
monthlyClick.addEventListener("click", function name() {
    dailyClick.classList.remove('active');
    weeklyClick.classList.remove('active');
    monthlyClick.classList.add('active');


    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }
})
