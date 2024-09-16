/// Countdown functionality
function countdown() {
    const countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "Offer Expired";
        }
    }, 1000);
}

countdown();
// Login functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === '12345') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password.');
    }
}

// Countdown functionality
function countdown() {
    const countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();
    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = "Offer Expired";
        }
    }, 1000);
}

countdown();
