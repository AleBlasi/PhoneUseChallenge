document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('readme-container');
    
    fetch('README.md')
        .then(response => response.text())
        .then(data => {
            container.innerHTML = `<pre>${data}</pre>`;
        })
        .catch(error => console.error('Error fetching README:', error));
});
