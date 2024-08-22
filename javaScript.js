const container = document.querySelector(".container");

let btn = document.querySelector(".btn");

function divs(n) {
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < n; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

btn.addEventListener("click", () => {
  const valores = document.getElementById("valores").value;
  divs(valores);
});
