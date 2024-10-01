// JavaScript to toggle sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);

    // Toggle between showing and hiding the section
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}


// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('section');

    // Loop through sections to find matching text
    sections.forEach(section => {
        const sectionText = section.innerText.toLowerCase();
        if (sectionText.includes(query)) {
            section.style.backgroundColor = '#ffeb3b';  // Highlight matching section
        } else {
            section.style.backgroundColor = '';  // Reset section background if no match
        }
    });
});
