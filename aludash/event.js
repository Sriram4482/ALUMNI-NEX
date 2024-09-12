// events.js

// Sample data for upcoming and past events
const upcomingEvents = [
    { title: "Alumni Meetup", date: "2024-10-10", location: "New York", description: "Reconnect with your fellow alumni over dinner." },
    { title: "Career Development Workshop", date: "2024-11-20", location: "Online", description: "Enhance your skills with our career development sessions." }
];

const pastEvents = [
    { title: "Alumni Reunion 2023", date: "2023-12-15", location: "Boston", description: "A wonderful evening of memories and networking." },
    { title: "Webinar: The Future of Engineering", date: "2024-03-22", location: "Online", description: "Insights into the evolving field of engineering." }
];

// Functions to display events
function loadUpcomingEvents() {
    const upcomingEventsList = document.getElementById('upcomingEventsList');
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
            <button onclick="rsvp('${event.title}')">RSVP</button>
        `;
        upcomingEventsList.appendChild(eventItem);
    });
}

function loadPastEvents() {
    const pastEventsList = document.getElementById('pastEventsList');
    pastEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
        `;
        pastEventsList.appendChild(eventItem);
    });
}

// Function to simulate RSVP
function rsvp(eventTitle) {
    alert(`You have successfully RSVPed to ${eventTitle}`);
}

// Function to create a simple calendar
function loadCalendar() {
    const calendar = document.getElementById('calendar');
    for (let i = 1; i <= 30; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar-day');
        day.innerText = i;
        day.onclick = () => alert(`Events on day ${i}`);
        calendar.appendChild(day);
    }
}

// Load events and calendar when the page loads
window.onload = function() {
    loadUpcomingEvents();
    loadPastEvents();
    loadCalendar();
}
