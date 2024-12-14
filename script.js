        let countdownFinished = false;

        function updateCountdown() {
            const now = new Date();
            const currentYear = now.getFullYear();
            const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0); // Next New Year
            const timeDifference = newYear - now; // Difference in milliseconds

            if (timeDifference <= 0) {
                document.getElementById('timer').textContent = "Happy New Year!";
                clearInterval(countdownInterval);
                countdownFinished = true;
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('timer').textContent = 
                `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function showPreview() {
            if (countdownFinished) {
                document.getElementById('timer').textContent = "Happy New Year!";
            } else {
                alert("The countdown is not yet finished.");
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to avoid delay
