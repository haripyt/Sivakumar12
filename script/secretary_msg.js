function secretary() {
    document.getElementById("SecretaryMessageModal").style.display = "block";
}

function secretary_close() {
    document.getElementById("SecretaryMessageModal").style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("SecretaryMessageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};