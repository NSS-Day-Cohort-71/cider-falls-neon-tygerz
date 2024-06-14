import { Areas } from "./Areas.js";
import { Guests } from "./Guest.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list details__areas">
        <h2>Park Areas</h2>
        ${Areas()}
    </section>
    <section class="detail--column list details__guests">
        <h2>Current Guests</h2>
        ${Guests()}
    </section>
`;

mainContainer.innerHTML = applicationHTML;
