document.getElementById('runScriptButton').addEventListener('click', () => {
    // Send a POST request to the Flask API
    fetch('/app.py', {  // Use the correct route for your Air Canvas script
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ /* any data you need to send to the Air Canvas script */ })
    })
    .then(response => response.json())
    .then(data => {
        // Process and display the result on the web page
        document.getElementById('result').innerText = data.result;
    });
});
