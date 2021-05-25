

import resturantModuel from './ResturantModuel.js'


const rest = document.getElementById("rest");

const restButton = document.getElementById("rest-search-button");
const outputSearch = document.getElementById("input-serch");

let htmlTxt = "";
let htmlTxttwo = "";

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
                <h2> Adresse: ${res.adresse}</h2>
                <p> ${res.info}</p>
            <div>
        </div>
        </article>
    `; 
});

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
            <button class="card-btn">Remove</button>
            <h2> Tables: ${res.table} </h2>
            <h2> Adresse: ${res.adresse}</h2>
            <p> ${res.info}</p>
           
        <div>
    </div>
    </article>
`; 

})
outputSearch.innerHTML = htmlTxttwo;

const restCard = document.querySelectorAll("#rest-card");
    for (var i = 0; i < restCard.length; i++){
    restCard[i].querySelector("button").addEventListener("click",
     function(){
     this.closest("#rest-card").remove();
    });
     }
}

restButton.onclick = generateSearch;
rest.innerHTML = htmlTxt;









