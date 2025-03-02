// Get reference to the red button
const redButton = document.getElementById('redButton');

// Add event listener to the red button
redButton.addEventListener('click', function() {
    sessionStorage.setItem('redButtonClickedTime', Date.now());
    window.location.href = 'https://chilsihooveek.net/4/8442621';
});
