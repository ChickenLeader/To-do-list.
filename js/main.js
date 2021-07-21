let submit = document.getElementById("submit");
let clearLists = document.getElementById("clear");
let list = document.getElementById("list");
let input = document.getElementById("input");



let notesList = [];



function addNote() {

    let value = input.value;

    if (value == "") {

        alert("Fill the empty space")
    }
    else {

        notesList.push(value);


    }


    display()
    clear()
}

submit.addEventListener("click", addNote);

function display() {

    let lst = "";

    for(let i = 0; i<notesList.length;i++){

        lst += `

            <div class="nota shadow p-4">
                <td>${i+1} - </td>
                <td>${notesList[i]}</td>
                <button onClick="deleteNote(${i})" class= "xButton btn btn-secondary"> X </button>
            </div>
        `
    }

    list.innerHTML = lst;

}

function deleteNote(i){

    notesList.splice(i,1)

    display()
}



function clear() {

    input.value = "";

}

function clearList(){

    list.innerHTML = ` `;

    notesList = [];

}
clearLists.addEventListener("click",clearList)
