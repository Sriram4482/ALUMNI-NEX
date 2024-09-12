// opportunities.js

// Sample data for jobs, internships, scholarships, events, and career programs
const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "New York", type: "Full-time" },
    { title: "Data Analyst", company: "Data Inc.", location: "San Francisco", type: "Part-time" }
];

const internships = [
    { title: "Marketing Intern", company: "Marketing Solutions", location: "Remote", type: "Internship" },
    { title: "Finance Intern", company: "Finance Corp", location: "Chicago", type: "Internship" }
];

const scholarships = [
    { title: "Graduate Scholarship", details: "Available for students pursuing a master's degree.", deadline: "Dec 31, 2024" },
    { title: "Undergraduate Scholarship", details: "Available for students in their third year of study.", deadline: "Nov 15, 2024" }
];

const events = [
    { title: "Alumni Networking Night", date: "Oct 10, 2024", location: "Boston" },
    { title: "Career Development Webinar", date: "Sep 20, 2024", location: "Online" }
];

const careerPrograms = [
    { title: "Leadership Workshop", details: "Develop leadership skills over a 3-week program.", start: "Jan 5, 2025" },
    { title: "Coding Bootcamp", details: "Intensive coding training for all skill levels.", start: "Feb 1, 2025" }
];

// Functions to display data
function loadJobs() {
    const jobList = document.getElementById('jobList');
    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('item');
        jobItem.innerHTML = `<strong>${job.title}</strong> at ${job.company} - ${job.location} (${job.type})`;
        jobList.appendChild(jobItem);
    });
}

function loadInternships() {
    const internshipList = document.getElementById('internshipList');
    internships.forEach(internship => {
        const internshipItem = document.createElement('div');
        internshipItem.classList.add('item');
        internshipItem.innerHTML = `<strong>${internship.title}</strong> at ${internship.company} - ${internship.location} (${internship.type})`;
        internshipList.appendChild(internshipItem);
    });
}

function loadScholarships() {
    const scholarshipList = document.getElementById('scholarshipList');
    scholarships.forEach(scholarship => {
        const scholarshipItem = document.createElement('div');
        scholarshipItem.classList.add('item');
        scholarshipItem.innerHTML = `<strong>${scholarship.title}</strong><br>${scholarship.details}<br>Deadline: ${scholarship.deadline}`;
        scholarshipList.appendChild(scholarshipItem);
    });
}

function loadEvents() {
    const eventList = document.getElementById('eventList');
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('item');
        eventItem.innerHTML = `<strong>${event.title}</strong><br>Date: ${event.date}<br>Location: ${event.location}`;
        eventList.appendChild(eventItem);
    });
}

function loadCareerPrograms() {
    const careerList = document.getElementById('careerList');
    careerPrograms.forEach(program => {
        const programItem = document.createElement('div');
        programItem.classList.add('item');
        programItem.innerHTML = `<strong>${program.title}</strong><br>${program.details}<br>Start Date: ${program.start}`;
        careerList.appendChild(programItem);
    });
}

// Load data when the page loads
window.onload = function() {
    loadJobs();
    loadInternships();
    loadScholarships();
    loadEvents();
    loadCareerPrograms();
}

// Load more jobs and internships (For demonstration purposes, this simply reloads the existing items)
function loadMoreJobs() {
    loadJobs();
}

function loadMoreInternships() {
    loadInternships();
}
