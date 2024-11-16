let input = document.querySelector(".input-cont");
let inputSide = document.querySelector(".input");
let btn = document.querySelector(".add");
let lists = document.querySelector(".list-cont");
let deleteBtn = document.querySelector(".delete");
let down = document.querySelector(".down");
let up = document.querySelector(".up");
function addTask() {
  if (input.value === "") {
    return;
  }
  lists.style.display = "flex";
  lists.style.flexDirection = "column";
  lists.style.gap = "10px";
  let li = document.createElement("li");
  li.textContent = input.value;
  input.value = "";
  lists.appendChild(li);

  let img = document.createElement("img");
  img.src = "./image/Group 56.svg"; 
  li.appendChild(img);
  img.addEventListener("mouseenter", () => {
    img.src = "./image/Group 70.svg"; 
  });
  img.addEventListener("mouseleave", () => {
    img.src = "./image/Group 56.svg"; 
  });
  down.disabled = false;
  up.disabled = false;
}

deleteBtn.addEventListener("click", () => {
  inputSide.classList.toggle("adder");
  input.value = "";
});

lists.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  }
  if (lists.children.length === 0) {
    lists.style.display = "none";
    down.disabled = true;
    up.disabled = true;
  }
});

down.addEventListener("click", () => {
  let items = Array.from(lists.children);
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  items.forEach(item => lists.appendChild(item));
  down.style.display = "none";
  up.style.display = "block";
});

up.addEventListener("click", () => {
  let items = Array.from(lists.children);
  items.sort((a, b) => b.textContent.localeCompare(a.textContent));
  items.forEach(item => lists.appendChild(item));
  up.style.display = "none";
  down.style.display = "block";
});
