document.getElementById('runnerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById("runnerName").value;

    const message = document.getElementById("greetingMessage");

    message.textContent = `Welcome, ${name}! Keep exploring the trails and enjoying the journey.`;
});