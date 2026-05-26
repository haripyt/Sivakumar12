document.getElementById('searchInput').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let menuItems = document.querySelectorAll("#menu a");
    let searchResults = document.getElementById("searchResults");

    searchResults.innerHTML = "";
    searchResults.classList.add("hidden");

    if (query.trim() === "") return;

    menuItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            let resultItem = document.createElement("li");
            resultItem.textContent = item.textContent;
            resultItem.classList.add("search-item");

            // Set the link as data attribute
            resultItem.setAttribute("data-link", item.href);

            // Add click event to navigate
            resultItem.addEventListener("click", function() {
                window.location.href = this.getAttribute("data-link");
            });

            searchResults.appendChild(resultItem);
            searchResults.classList.remove("hidden");
        }
    });
});

// Hide search results when clicking outside
document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-container")) {
        document.getElementById("searchResults").classList.add("hidden");
    }
});