const pBar = document.querySelector(".p-bar");
const pCount = document.querySelector(".p-count");

const setProp = (elem, prop, value) => {
  return elem.style.setProperty(prop, value);
};

let count = 0;
setInterval(() => {
  if (count <= 99) {
    count++;
    pCount.innerHTML = `${count}%`;
    setProp(pBar, "--width", count);
  }
}, 50);
