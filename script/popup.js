// 2 Popup Script
// Show first image popup on page load
// window.onload = function () {
//   document.getElementById("popup1").classList.add("show");
// };

// Close first popup and show second popup
// document.getElementById("closePopup1").addEventListener("click", function () {
//   document.getElementById("popup1").classList.remove("show");
//   setTimeout(() => {
//       document.getElementById("popup2").classList.add("show");
//   }, 500); // Short delay before showing second popup
// });

// Close second popup
// document.getElementById("closePopup2").addEventListener("click", function () {
//   document.getElementById("popup2").classList.remove("show");
// });

// 1 Popup Script
// Show first image popup on page load
window.onload = function() {
    document.getElementById("popup2").classList.add("show");
};

// Close first popup and show second popup
document.getElementById("closePopup2").addEventListener("click", function() {
    document.getElementById("popup2").classList.remove("show");
    // setTimeout(() => {
    //     document.getElementById("popup2").classList.add("show");
    // }, 500); // Short delay before showing second popup
});

// Close second popup
document.getElementById("closePopup2").addEventListener("click", function() {
    document.getElementById("popup2").classList.remove("show");
});