const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Toggle menu responsive
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

document.getElementById("help1").addEventListener("click", function() {
    alert("Hubungi Admin Ya!");
});

document.getElementById("help2").addEventListener("click", function() {
    alert("Hubungi Admin Ya!");
});



