document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button a");
  const sidebar = document.querySelector(".sidebar");

  menuButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    sidebar.classList.toggle("open");
  });
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("open");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("open");
}
