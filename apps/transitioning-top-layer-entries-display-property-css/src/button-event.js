document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".btn-add");
  const removeButton = document.querySelector(".btn-remove");
  const list = document.querySelector('ul[role="list"]');

  addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    list.appendChild(newItem);
  });

  removeButton.addEventListener("click", () => {
    if (list.lastElementChild) {
      list.lastElementChild.classList.add("removing");
      setTimeout(() => {
        list.removeChild(list.lastElementChild);
      }, 200);
    }
  });
});
