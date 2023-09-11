let btn = document.querySelector(".btn");
let input = document.querySelector("#input");

btn.onclick = function () {
  input.select();
  document.execCommand("copy");

  alert("copyed");
};
