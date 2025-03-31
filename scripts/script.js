


//Document fragment interface???? (only 2%);


//ex: adjust style of a button after it has been clicked



window.confirm("Welcome, human! Press 'OK' to start recording your gratitude now.")

let gratitudeInput = document.getElementById("gratitudeInput");
let gratitudeForm = document.getElementById("gratitudeForm");
let gratitudeList = document.getElementById("gratitudeList");
let headers = document.querySelector("h1");
let saveButton = document.getElementById("save");

headers.addEventListener(`mouseover`, handleMouseOver);

gratitudeForm.addEventListener(`submit`, handleSubmit);

saveButton.addEventListener(`click`, handleSave);


function handleSubmit(e){
    e.preventDefault();
    let input = gratitudeInput.value;
    if (input.trim() === ``){
        alert(`No input received`)
        return;
    } else {
    let newGratitudeItem = document.createElement(`li`);
    newGratitudeItem.textContent = input;
    gratitudeList.appendChild(newGratitudeItem);
    gratitudeInput.value = ` `;   
    }                                  //problem: my list only prevents an empty input at the beginning
}

function handleMouseOver(e){
    e.target.style.color = "green";
}

function handleSave(e){
    let savedItems = document.getElementsByTagName(`ul`);
    const savedItemsArray = [];
    for (let i = 0; i < savedItems.length; i++){
        savedItemsArray.push(savedItems[i].textContent);
    }
    localStorage.setItem(`savedListItems`, JSON.stringify(savedItemsArray));
    const savedData = localStorage.getItem(`savedListItems`)
    if (savedData){
        const parseData = JSON.parse(savedData);
    }
} 