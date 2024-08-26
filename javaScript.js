const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


function divs(n) {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < n; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    container.appendChild(row);
  };
};

function colors(){

};


btn.addEventListener("click", () => {
  const valores = document.getElementById("valores").value;
  divs(valores);
});

container.addEventListener("mouseover", function(event){
  if(event.target.classList.contains('column')){
    event.target.style.background = "black";
  };
});



/*
columnHover.addEventListener("mouseout", ()=> {
  columnHover.style.transition = "background 4s";
});
*/