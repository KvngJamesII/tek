document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    }, 5000); // Loads for 5 seconds

    document.getElementById('spinButton').addEventListener('click', () => {
        spinWheel();
    });

    // Spin wheel logic
    function spinWheel() {
        const outcomes = [5, 10, 20, 35, 50, 100, 'TRY AGAIN', 'FREE SPIN (1)'];
        const result = outcomes[Math.floor(Math.random() * outcomes.length)];
        alert(`You won: ${result}FP 🎉`);
        // Update balance and other logic here
    }

    // Add event listener for withdrawal
    document.getElementById('withdrawButton').addEventListener('click', () => {
        // Handle withdrawal logic here
        alert('Withdrawal feature coming soon!');
    });

    // Add event listener for referral
    document.getElementById('referralButton').addEventListener('click', () => {
        alert('Your referral link: [YourReferralLink]');
    });
});
