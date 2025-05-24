document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const usdToMxnRate = data.rates.MXN;
            const rateWithSpread = usdToMxnRate * 1.01; // Adding 1% spread
            document.getElementById('exchangeRateDisplay').innerText = `1 USD = ${rateWithSpread.toFixed(4)} MXN`;
        })
        .catch(error => {
            document.getElementById('exchangeRateDisplay').innerText = 'Failed to load data';
            console.error('Error fetching exchange rate:', error);
        });


        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const usdToMxnRate = data.rates.MXN;
            const rateWithSpread = usdToMxnRate * 0.99; // Adding 1% spread
            document.getElementById('exchangeRateDisplay2').innerText = `1 USD = ${rateWithSpread.toFixed(4)} MXN`;
        })
        .catch(error => {
            document.getElementById('exchangeRateDisplay2').innerText = 'Failed to load data';
            console.error('Error fetching exchange rate:', error);
        });
});