// script.js

function showCareerDetails(position) {
    const details = document.getElementById('career-details');
    let content = '';

    switch (position) {
        case 'software-engineer':
            content = `
                <h3>Software Engineer</h3>
                <p>Worked on developing robust software solutions at XYZ Corp.</p>
            `;
            break;
        case 'senior-developer':
            content = `
                <h3>Senior Developer</h3>
                <p>Led a team of developers to create innovative products.</p>
            `;
            break;
        case 'founder':
            content = `
                <h3>Founder & CEO</h3>
                <p>Founded Tech Innovators, focusing on AI-driven solutions.</p>
            `;
            break;
        default:
            content = `<p>Select a position to see more details.</p>`;
    }

    details.innerHTML = content;
    details.style.display = 'block';
}
