//
const newMovie = document.querySelector("#A01");
const add = document.querySelector(".button");
add.addEventListener("click", function () {
  // create a new list element
  var newList = document.createElement("li");
  newList.setAttribute("class", "movies");
  // input the value and the image file for removal
  newList.innerHTML =
    newMovie.value + ' <img src="images/close.png" alt="remove" />';
  // append the value to the un-ordered list.
  var element = document.querySelector(".movie-group");
  element.appendChild(newList);
  // add a click functin to the newly added movie.
  newList.addEventListener("click", onStrikeThrough);
});

const moviesDomNodes = document.querySelectorAll(".movies");
const removeButtons = document.querySelectorAll("div img");
moviesDomNodes.forEach((movie) => {
  movie.addEventListener("click", onStrikeThrough);
});
removeButtons.forEach((removeImg) => {
  removeImg.addEventListener("click", onRemove);
});

function onStrikeThrough(event) {
  event.target.style.textDecoration = "line-through";
}

function onRemove(event) {
  event.target.parentNode.remove();
}
