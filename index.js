const section = document.querySelectorAll(".section");

section.forEach((item) => {
  item.addEventListener("click", (e) => {
    const bigText = item.firstElementChild;
    bigText.classList.toggle("active");
    bigText.nextElementSibling.classList.toggle("visible");
    deleteClass(item);

    e.preventDefault();
  });
});

function deleteClass(item) {
  section.forEach((section) => {
    if (item != section) {
      const bigText = section.firstElementChild;
      bigText.classList.remove("active");
      bigText.nextElementSibling.classList.remove("visible");
    }
  });
}
