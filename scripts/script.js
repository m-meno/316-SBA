


//Document fragment interface???? (only 2%);


//Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

//ex: adjust style of a button after it has been clicked



window.confirm("Welcome, human! Press 'OK' to start recording your gratitude now.")

let gratitudeInput = document.getElementById("gratitudeInput");
let gratitudeForm = document.getElementById("gratitudeForm");
let gratitudeList = document.getElementById("gratitudeList");
let headers = document.querySelector("h1");

headers.addEventListener(`mouseover`, handleMouseOver);

gratitudeForm.addEventListener(`submit`, handleSubmit);



function handleSubmit(e){
    e.preventDefault();
    let input = gratitudeInput.value;
    if (input == ``){
        alert(`No input received`)
        return;
    }
    let newGratitudeItem = document.createElement(`li`);
    newGratitudeItem.textContent = input;
    gratitudeList.appendChild(newGratitudeItem);
    gratitudeInput.value = ` `;
}

function handleMouseOver(e){
    e.target.style.color = "green";
}