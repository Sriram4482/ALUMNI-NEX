document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const donationAmount = document.getElementById('donationAmount').value;
    const donationFrequency = document.getElementById('donationFrequency').value;
    const donationDesignation = document.getElementById('donationDesignation').value;
    const donorName = document.getElementById('donorName').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate processing donation
    alert(`Thank you ${donorName} for your donation of $${donationAmount} to ${donationDesignation}.`);

    // Clear form fields
    document.getElementById('donationForm').reset();
    
    // Update recent donations (for demo purposes)
    const recentDonations = document.getElementById('recentDonations');
    const newDonation = document.createElement('li');
    newDonation.textContent = `${donorName} - $${donationAmount}`;
    recentDonations.appendChild(newDonation);
});
