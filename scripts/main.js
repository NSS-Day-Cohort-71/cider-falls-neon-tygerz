import { Areas } from "./Areas.js";
import { Guests } from "./Guest.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header">
    <img src="images/ciderFallsLogo.png" alt="logo" class="logo">
    <h1 class="title">Cider Falls National Park</h1>
</header>
<main class="main-content">
    <section class="areas-section">
        <h2>Park Areas</h2>
        <div class="areas-grid">
            ${Areas()}
        </div>
    </section>
    <section class="guests-section detail--column">
        <h2>Current Guests</h2>
        ${Guests()}
    </section>
</main>
`;

mainContainer.innerHTML = applicationHTML;
