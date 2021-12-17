//Don't forget to change selectors' expressions such as ".tags .tag", if you want to change class names in your DOM.
const tags = [...document.querySelectorAll(".tags .tag")];
let selectedTag = document.querySelector(".tag.selected");
const searchInput = document.querySelector(".search-bar input");

/* Makes the tags switchable */
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    selectedTag.classList.remove("selected");
    tag.classList.toggle("selected");
    selectedTag = tag;
  });
});

searchInput.addEventListener("input", getTag); // Calls getTag function everytime user pressed a key.

function getTag() {
  /* Filters the tags includes user's input. Then, makes the display of the tags contains user input 'block'. If a tag doesnt contain
  user's input, its display property will be turned into 'none'. */
  tags.filter((tag) => {
    tag.textContent.includes(searchInput.value)
      ? ((tag = tag), (tag.style.display = "block"))
      : (tag.style.display = "none");
  });
}
