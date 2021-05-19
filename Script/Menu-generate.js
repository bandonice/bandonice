

import menuModuel from './MenyModuel.js'


const pizzaMeny = document.querySelector("#pizza-menu");

let htmlTxt = "";
let htmlTxttwo = "";

menuModuel.gettAllPizza().array.forEach(menu => {
    htmlTxt += `
        <article>
            <div>
                <section>
                    <img src="">
                </section>
                <section>
                    <h3>${menu.title}<h3>
                </section>
                <section>
                    <h5>${menu.price}<h5>
                </section>
                <section>
                    <p>${menu.info}<p>
                </section>
            <div>
        <article>
    `

});

pizzaMeny.innerHTML = htmlTxt;