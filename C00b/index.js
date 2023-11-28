// Dùng DOM để lấy các thẻ
const startNumber = document.querySelector('input[name="start"]');
const endNumber = document.querySelector('input[name="end"]');
const displayNumber = document.getElementById("display_number");
const applyBtn = document.getElementById("apply");
const playBtn = document.querySelector('button[name="play"]');
const pauseBtn = document.querySelector('button[name="pause"]');
const restartBtn = document.querySelector('button[name="restart"]');
// Tạo các biến
let startValue;
let endValue;
let currentValue = startValue;
let interval;
// Thêm sự kiện cho các thẻ button
// 1. Nút áp dụng
applyBtn.addEventListener("click", () => {
    startValue = parseInt(startNumber.value);
    endValue = parseInt(endNumber.value);
    currentValue = startValue;
    displayNumber.innerHTML = startValue;
});

// 2. Nút play
playBtn.addEventListener("click", () => {
    interval = setInterval(function () {
        if (currentValue <= endValue) {
            displayNumber.innerHTML = currentValue;
            currentValue++;
        } else {
            clearInterval(interval);
        }
    }, 1500);
});

// 3. Nút restart
restartBtn.addEventListener("click", () => {
    currentValue = startValue;
    displayNumber.innerHTML = startValue;
});

// 4. Nút pause
pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
});
