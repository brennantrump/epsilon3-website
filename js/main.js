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
