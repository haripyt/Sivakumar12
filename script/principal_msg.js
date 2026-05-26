function princpal() {
    document.getElementById("principalMessageModal").style.display = "block";
}

function principal_close() {
    document.getElementById("principalMessageModal").style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("principalMessageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};