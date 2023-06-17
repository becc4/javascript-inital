const buttons = document.querySelector(".add");
buttons.addEventListener("click", makeParagraph);

function makeParagraph() {
    const para = document.createElement("p");
    para.textContent = "New Item";
    document.body.appendChild(para);
}

function updateParagraph() {
    console.log("UPDATE");
    const name = prompt("Enter Info");
    para.textContent = `${name}`;
}

// ES6 Array and Recusion
var list = ["item1", "item2", "item3"];

function findItem(item) {
    console.log(item);
    if(list[item] !== list[2]) {
        item += 1;
        findItem(item);
    } else {
        console.log("We found", list[item])
    }
}

const answer = findItem(0)

// JavaScript Library