const btn = document.getElementById("btn");
const background = document.getElementById("background");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "grey";
  background.style.backgroundColor = "grey";
  const colors = ["red", "blue", "green", "pink", "yellow", "aqua"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  btn.style.backgroundColor = randomColor;
  background.style.backgroundColor = randomColor;
  names.innerText - randomColor;
  document.getElementById("names").innerHTML = randomColor;
});
