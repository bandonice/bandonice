

import resturantModuel from './ResturantModuel.js'


const rest = document.getElementById("rest");

const restButton = document.getElementById("rest-search-button");
const inputSearch = document.getElementById("input-serch");

let htmlTxt = "";
let htmlTxttwo = "";

resturantModuel.getAllresturants().forEach(res => {
    htmlTxt += `
        <article class="column is-half" id="rest">
        <div class="card" style="border-radius:30px">
            <div class="card-image">
                <img src="image/${res.image}">
            </div>
            <div class= "card-content">
                <h1> name:${res.name}</h5>
                <h2> table: ${res.table} </h2>
                <h2>${res.adresse}</h2>
                <p> info: ${res.info}</p>
            <div>
        </div>
        </article>
    `; 
});

const generateSearch = () => {
    
let restInput = document.getElementById("rest-bar").value;
resturantModuel.getresturantsByName(restInput).forEach(res => {
    htmlTxttwo = `
    <article class="column is-half" id="rest">
    <div class="card" style="border-radius:30px">
        <div class="card-image">
            <img src="image/${res.image}">
        </div>
        <div class= "card-content">
            <h1> name:${res.name}</h5>
            <h2> table: ${res.table} </h2>
            <h2>${res.adresse}</h2>
            <p> info: ${res.info}</p>
        <div>
    </div>
    </article>
`; 
})
inputSearch.innerHTML = htmlTxttwo;

}

restButton.onclick = generateSearch;
rest.innerHTML = htmlTxt;


