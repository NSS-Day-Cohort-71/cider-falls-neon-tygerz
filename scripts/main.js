import { Areas } from "./Areas.js";
import { Guests } from "./Guest.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header">
<img src="images/ciderFallsLogo.png" alt="logo" class="logo">
<h1 class="title">Cider Falls National Park</h1>
</header>
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
