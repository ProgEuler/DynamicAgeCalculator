let submitBtn = document.querySelector("#btn");
let input = document.querySelector("#inpBox");
let msg = document.querySelector("#msg");

const calculateAndShowAge = () => {
    let inputValue = parseInt(input.value);
    if (isNaN(inputValue) || inputValue < 1900 || inputValue > new Date().getFullYear()) {
        showError("Please enter a valid birth year between 1900 and the current year.");
        return;
    }

    let currentYear = new Date().getFullYear();
    let age = currentYear - inputValue;
    showAge(age);
    clearInput();
};

const showAge = (age) => {
    msg.innerText = "Your age is " + age;
};

const showError = (message) => {
    msg.innerText = message;
    msg.style.color = "red";
};

const clearInput = () => {
    input.value = "";
};

submitBtn.addEventListener("click", calculateAndShowAge);

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        calculateAndShowAge();
    }
});
