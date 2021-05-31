
/*This imports the moduel made in another javascript*/
import resturantModuel from './ResturantModuel.js'

/*This gets a html element by its id*/
const rest = document.getElementById("rest");
const restButton = document.getElementById("rest-search-button");
const outputSearch = document.getElementById("input-serch");

/*Two empty strings*/
let htmlTxt = "";
let htmlTxttwo = "";

/*This gets the array values from the moduel and puts it in the text. It is a for loop so its prints out the text to a html output div, after how many arays there is.*/
resturantModuel.getAllresturants().forEach(res => {
    htmlTxt += `
        <article class="column is-half" id="rest-card">
            <div class="card" id="rest-card-div">
                <div class="card-image">
                    <img id="rest-card-img" src="image/${res.image}">
                </div>
                <div class= "card-content" id="rest-card-info">
                    <h1>${res.name}</h1>
                    <h2> Tables: ${res.table} </h2>
                    <h2> Adress: ${res.adresse}</h2>
                    <p> ${res.info}</p>
                <div>
            </div>
        </article>
    `; 
});

/*This is the filter system it takes in a seach value then finds the matching title and prints out that array in to a html output div.*/
const generateSearch = () => {
let restInput = document.getElementById("rest-bar").value;

    resturantModuel.getresturantsByName(restInput).forEach(res => {
        htmlTxttwo = `
            <article class="column is-half" id="rest-card">
                <div class="card" id="rest-card-div-output">
                    <div class="card-image">
                        <img id="rest-card-img-two" src="image/${res.image}">
                    </div> 
                    <div class= "card-content"  id="rest-card-info">
                        <h1>${res.name}</h1>
                        <button class="card-btn">Back</button>
                        <h2> Tables: ${res.table} </h2>
                        <h2> Adress: ${res.adresse}</h2>
                        <p> ${res.info}</p>   
                    <div>
                </div>
            </article>
        `; 
    })

    /*This is the output div*/
    outputSearch.innerHTML = htmlTxttwo;

    /*This is a delete loop. when clicking on the delete button it gose thourgh every card until it finds that card you click on, and removes it. */ 
    const restCard = document.querySelectorAll("#rest-card");
        for (var i = 0; i < restCard.length; i++){
            restCard[i].querySelector("button").addEventListener("click",
                function(){
                    this.closest("#rest-card").remove();
                });
        }
}

/*........Events........*/
restButton.onclick = generateSearch;
rest.innerHTML = htmlTxt;









