let container = document.querySelector(".container");
container.style.display = "flex";
//container.style.width = "960px";
//container.style.height = "300px"

let btn = document.querySelector(".btn");
btn.style.textAlign = "center";
btn.style.margin = "10px 10px";


function divs(n){
    for(let i = 0; i < n; i++){
        const row = document.createElement("div");
        for(let j = 0; j < n; j++){
            const column = document.createElement('div');
            column.style.width = "20px";
            column.style.height = '20px';
            column.style.border = "1px solid black";
            row.appendChild(column);
    
        }
        container.appendChild(row);
    }
}

btn.addEventListener("click", ()=> {
    divs(n);
})
