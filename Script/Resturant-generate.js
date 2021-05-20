

import resturantModuel from './ResturantModuel.js'


const rest = document.getElementById("rest");

let htmlTxt = "";
let htmlTxttwo = "";

resturantModuel.getAllresturants().forEach(res => {
    htmlTxt += `
        <article class="menu">
        <div class="div-menu-pizza">
                <h3> title: ${res.image}</h3>
                <h5> price:${res.name}Kr</h5>
                <img src="${res.adresse}">
                <p> info: ${res.info}</p>
        </div>
        </article>
    `; 
});

rest.innerHTML = htmlTxt;


