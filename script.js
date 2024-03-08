// script.js

fetch('/thoughts')
    .then(response => response.json())
    .then(thoughts => {
        const thoughtsContainer = document.getElementById('thoughtsContainer');
        thoughtsContainer.innerHTML = '<h2>Secret Thoughts:</h2>';
        thoughts.forEach(thought => {
            thoughtsContainer.innerHTML += `<p>${thought.name}: ${thought.thought}</p>`;
        });
    });
