

import menuModuel from './MenuModuel.js'


const pizzaMenu = document.getElementById("pizza-menu");

let htmlTxt = "";
let htmlTxttwo = "";

menuModuel.getAllPizza().forEach(menu => {
    htmlTxt += `
        <article class="noe">
        <div style="width:200px; height:200px;
        ">
                <h3> title: ${menu.title}</h3>
                <h5> price:${menu.price}Kr</h5>
                <img src="${menu.image}">
                <p> info: ${menu.info}</p>
        </div>
        </article>
    `;
});

pizzaMenu.innerHTML = htmlTxt
