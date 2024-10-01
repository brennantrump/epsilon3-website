// Function to toggle sections (Dropdown functionality)
function toggleSection(sectionId, forceShow = false) {
    const section = document.getElementById(sectionId);
    if (forceShow) {
        section.style.display = "block"; // Force show the section if needed
    } else {
        if (section.style.display === "block") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
        }
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
            // If the section contains the query, show it and highlight it
            sectionContent.style.backgroundColor = '#ffeb3b'; // Highlight matching section
            toggleSection(sectionContent.id, true); // Show the section if hidden
        } else {
            // Reset the background color if no match
            sectionContent.style.backgroundColor = '';
        }
    });
});
