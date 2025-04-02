


//Document fragment interface???? (only 2%);


//ex: adjust style of a button after it has been clicked



window.confirm("Welcome! Press 'OK' to start recording your gratitude now.")

let gratitudeInput = document.getElementById("gratitudeInput");
let gratitudeForm = document.getElementById("gratitudeForm");
let gratitudeList = document.getElementById("gratitudeList");
let headers = document.querySelector("h1");
let saveButton = document.getElementById("save");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let journalPhoto = document.getElementById("journal");
let emailForm = document.getElementById("email");
let infoLink = document.getElementById("info");


//headers.addEventListener(`mouseover`, handleMouseOver);

gratitudeForm.addEventListener(`submit`, handleSubmit);

saveButton.addEventListener(`click`, handleSave);

clearButton.addEventListener(`click`, handleClear);

deleteButton.addEventListener(`click`, handleDelete);

//emailForm.addEventListener('submit', validateEmail);

infoLink.addEventListener(`click`, handleAClick);

//journalPhoto.addEventListener('mouseenter', handleMouseenter);

function handleSubmit(e){
    e.preventDefault();
    let input = gratitudeInput.value;
    if (input.trim() === ``){
        window.alert(`Please write something you are grateful for!`);
        return; 
    } else {
    let newGratitudeItem = document.createElement(`li`);
    newGratitudeItem.textContent = input;
    gratitudeList.appendChild(newGratitudeItem);
    gratitudeInput.value = ` `;   
    }                                  //problem: my list only prevents an empty input at the beginning
}

// function handleMouseenter(e){
 
// }

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

function handleClear(e){
    while (gratitudeList.firstChild) {
    
    gratitudeList.removeChild(gratitudeList.lastChild);
    }
}

function handleDelete(e){
    gratitudeList.removeChild(gratitudeList.lastChild);
}

// function validateEmail(e){
//     let emailInput = emailForm.value;



// }

function handleAClick(e){
    e.preventDefault();

     let infoParagraph = document.createElement(`p`);
        infoParagraph.textContent = "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis pellentesque metus vitae condimentum. Suspendisse euismod quis ante at gravida. In sagittis nec odio pharetra efficitur. Curabitur dui quam, ornare at justo id, vulputate convallis orci. Fusce leo urna, malesuada eget tincidunt id, vehicula interdum nulla.";
    const paragraphExists = infoLink.querySelector('p');

    if (!e.target.classList.contains("active")){
        e.target.classList.add("active"); 
        if (!paragraphExists) {
            e.target.appendChild(infoParagraph);
        }
    } else {
        e.target.classList.remove("active"); 
        if (paragraphExists) {
            e.target.removeChild(paragraphExists);
        }  
    } 

    
}
