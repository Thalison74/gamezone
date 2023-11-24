// JavaScript file for countdown logic
document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (New Year's Eve)
    const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Feliz Ano Novo!";
        }
    }, 1000);
});
