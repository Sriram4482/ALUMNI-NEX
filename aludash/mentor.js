// mentoring.js

// Handle profile form submission
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value;
    const expertise = document.getElementById('expertise').value;
    const bio = document.getElementById('bio').value;
    const availability = document.getElementById('availability').value;
    const goals = document.getElementById('goals').value;

    // Here you would typically save this data to a server or database
    console.log(`Profile Saved: ${name}, ${role}, ${expertise}`);
    alert('Profile saved successfully!');
});

// Find a Mentor/Mentee (Simplified logic)
function findMatch() {
    const role = document.getElementById('role').value;
    let matchResult = '';

    if (role === 'mentor') {
        matchResult = 'We found a mentee looking for guidance in your field!';
    } else {
        matchResult = 'We found a mentor with experience in your area of interest!';
    }

    document.getElementById('matchResult').innerText = matchResult;
}

// Send a message (Simplified chat)
function sendMessage() {
    const messageBox = document.getElementById('messageBox');
    const message = messageBox.value;
    const chatHistory = document.getElementById('chatHistory');

    if (message.trim()) {
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatHistory.appendChild(newMessage);
        messageBox.value = '';
    }
}

// Add a goal and track progress
function addGoal() {
    const goalInput = document.getElementById('goalInput');
    const goalText = goalInput.value.trim();
    const goalList = document.getElementById('goalList');

    if (goalText) {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalText;
        goalList.appendChild(newGoal);
        goalInput.value = '';
    }
}
