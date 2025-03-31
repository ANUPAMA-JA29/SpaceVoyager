
function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sections = document.querySelectorAll("section");
    let found = false;

    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(input)) {
            section.scrollIntoView({ behavior: "smooth" });
            section.style.border = "3px solid yellow"; // Highlight
            setTimeout(() => { section.style.border = "none"; }, 2000);
            found = true;
        }
    });

    if (!found) {
        document.getElementById("searchResults").innerHTML = "No results found.";
    }
}
