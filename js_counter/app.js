let counter = 0;

const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    counter--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counter;
}