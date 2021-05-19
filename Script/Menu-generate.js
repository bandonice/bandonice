

import menuModuel from './MenuModuel.js'


const pizzaMenu = document.getElementById("pizza-menu");

let htmlTxt = "";
let htmlTxttwo = "";

menuModuel.getAllPizza().forEach(menu => {
    htmlTxt += `
        <article class="noe">
        <div>
                <h3> title: ${menu.title}</h3>
                <h5> price:${menu.price}Kr</h5>
                <img src="${menu.image}">
                <p> info: ${menu.info}</p>
        </div>
        </article>
    `;
});

pizzaMenu.innerHTML = htmlTxt

/*
menuModuel.getAllPizza().forEach(menu => {
    htmlTxt += `
        <article>
            <div>
                <section>
                    <h3>${menu.title}</h3>
                </section>
                <section>
                    <h5>${menu.price}</h5>
                </section>
                <section>
                    <p>${menu.info}</p>
                </section>
            </div>
        </article>
    `
});

pizzaMenu.innerHTML = htmlTxt;
*/