// crowdfunding.js

// Handle campaign creation
document.getElementById('campaignForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const goal = document.getElementById('goal').value;
    const deadline = document.getElementById('deadline').value;

    // Here you would normally send this data to a server
    console.log(`Creating campaign: ${title}`);

    // Add new campaign to the list
    const campaignList = document.getElementById('campaignList');
    const campaignDiv = document.createElement('div');
    campaignDiv.className = 'campaign';
    campaignDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <div class="progress">
            <div class="bar" style="width: 0%;"></div>
        </div>
        <p>$0 of $${goal} raised</p>
        <button onclick="viewCampaign('${title}')">View Details</button>
    `;
    campaignList.appendChild(campaignDiv);

    // Clear form
    document.getElementById('campaignForm').reset();
});

// Example function to view campaign details
function viewCampaign(campaignTitle) {
    alert(`Viewing details for: ${campaignTitle}`);
}

// Example function to update campaign progress (to be implemented)
function updateCampaignProgress(campaignElement, newProgress) {
    const bar = campaignElement.querySelector('.bar');
    bar.style.width = newProgress + '%';
}
