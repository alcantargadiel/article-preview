var toggle = document.getElementById("share-btn");
var getIconsBar = document.getElementById("social-icons-bar");

toggle.addEventListener("click", function() {
    getIconsBar.classList.toggle("appear");
}, false);