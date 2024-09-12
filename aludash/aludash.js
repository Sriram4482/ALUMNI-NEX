document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById('profilePic');
    const profileMenu = document.getElementById('profileMenu');

    profilePic.addEventListener('click', function () {
        profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!profilePic.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.style.display = 'none';
        }
    });
});
