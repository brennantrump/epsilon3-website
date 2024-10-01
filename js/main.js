// Function to toggle sections (Dropdown functionality)
function toggleSection(sectionId, forceShow = false) {
    const section = document.getElementById(sectionId);
    
    // Ensure the section exists
    if (section) {
        // If forced to show, ensure the section is shown
        if (forceShow) {
            section.style.display = "block";
        } else {
            // Toggle display between block and none
            section.style.display = section.style.display === "block" ? "none" : "block";
        }
    } else {
        console.error("Section with id " + sectionId + " not found.");
    }
}

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('section');

    // Loop through sections to find matching text
    sections.forEach(section => {
        const sectionText = section.innerText.toLowerCase();
        const sectionContent = section.querySelector('.section-content');

        if (sectionText.includes(query)) {
            // Show and highlight the section if a match is found
            sectionContent.style.backgroundColor = '#ffeb3b'; // Highlight matching section
            toggleSection(sectionContent.id, true); // Show the section if hidden
        } else {
            // Reset the background color if no match
            sectionContent.style.backgroundColor = '';
        }
    });
});
