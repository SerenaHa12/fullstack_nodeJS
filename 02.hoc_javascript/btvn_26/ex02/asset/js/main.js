// sidebar
var sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        if (item.classList.contains('active')) {
        } else {
            alert("Feature is being update!");
        }
    });
});
