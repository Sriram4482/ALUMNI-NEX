function showDetails() {
    document.getElementById("scholarship-details").classList.add("active");
    // Update the details dynamically (you can implement this based on the scholarship clicked)
    document.getElementById("scholarship-name").textContent = "Updated Scholarship Name";
    document.getElementById("scholarship-description").textContent = "Updated scholarship description...";
    document.getElementById("scholarship-eligibility").textContent = "Updated eligibility...";
    document.getElementById("application-process").textContent = "Updated application process...";
    document.getElementById("scholarship-deadline").textContent = "Updated deadline...";
}
