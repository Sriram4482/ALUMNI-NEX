// script.js

// Search function for Alumni Directory
function searchAlumni() {
    const input = document.getElementById('searchInput').value.toUpperCase();
    const alumniList = document.getElementById('alumniList');
    const profiles = alumniList.getElementsByClassName('alumni-profile');

    for (let i = 0; i < profiles.length; i++) {
        const name = profiles[i].getElementsByTagName('h3')[0];
        const textValue = name.textContent || name.innerText;
        if (textValue.toUpperCase().indexOf(input) > -1) {
            profiles[i].style.display = '';
        } else {
            profiles[i].style.display = 'none';
        }
    }
}

// Example function for joining a group
function joinGroup(groupName) {
    alert(`You have joined the ${groupName} group!`);
}

// Example function for requesting mentorship
function requestMentorship() {
    alert('Your mentorship request has been sent!');
}

// Initialize a dummy map (for demonstration purposes)
document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    map.innerHTML = 'Interactive map will be displayed here.';
});
