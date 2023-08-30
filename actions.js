const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");

toggleButton.addEventListener("click", () =>
  naviList.classList.toggle("active")
);

//navButton.addEventListener('click', () => navLinks.classList.toggle('responsive'))
