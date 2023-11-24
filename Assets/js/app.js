const aboutContainer = document.querySelector(".about-container");
const boxsTotal = document.querySelector(".boxs-total");
const sectionFirst = document.querySelector(".section-first");
const boxContainer = document.querySelector(".box-container");
const sectionSecond = document.querySelector(".section-second");
const boxContainerSecond = document.querySelector(".box-container-second");
const sectionThird = document.querySelector(".section-third");
const boxContainerThird = document.querySelector(".box-container-third");

const paragraph = document.querySelector(".paragraph");
const textBack = document.querySelector(".textBack");
const education = document.querySelector(".edu");

boxContainer.onclick = () => {
  const work = document.createElement("div");

  paragraph.classList.toggle("active");
  sectionFirst.append(work);
};

boxContainerSecond.onclick = () => {
  const workSecond = document.createElement("div");

  textBack.classList.toggle("textActive");
  sectionSecond.append(workSecond);
};

boxContainerThird.onclick = () => {
  const workThird = document.createElement("div");

  education.classList.toggle("eduActive");
  sectionThird.append(workThird);
};

//From these begin contact

const form = document.querySelector("#inputText");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  console.log(input.value);
  e.preventDefault();
});

localStorage.setItem("name", JSON.stringify(input));
let data = JSON.parse(localStorage.getItem("name"));
