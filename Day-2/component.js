const searchInput = document.querySelector(".search-bar input");
const tags = document.querySelectorAll(".tags .tag");
let selectedTag = document.querySelector(".tag.selected");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    selectedTag.classList.remove("selected");
    tag.classList.toggle("selected");
    selectedTag = tag;
  });
});

searchInput.addEventListener("input", getTag);

function getTag(e) {
  tags.filter((tag) => {
    tag.textContent.contains(e.value)
      ? console.log("içeriyor")
      : console.log("içermiyor");
  });
}
