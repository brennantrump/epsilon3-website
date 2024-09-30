// JavaScript to toggle sections
function toggleSection(sectionId) {
    // Get the section by its ID
    var section = document.getElementById(sectionId);
    
    // Check if the section is currently displayed (has the 'active' class)
    if (section.classList.contains('active')) {
        // If it's active, hide it by removing the 'active' class
        section.classList.remove('active');
    } else {
        // If it's not active, first hide all sections
        var allSections = document.querySelectorAll('.dropdown-content');
        allSections.forEach(function (s) {
            s.classList.remove('active');
        });
        
        // Then show the clicked section by adding the 'active' class
        section.classList.add('active');
    }
}
