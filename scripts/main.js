import { Areas } from "./Areas.js";
import { Guests } from "./Guest.js";
import { getServices } from "./database.js";
import { populateServicesList } from "./Services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header-logo">
  <img src="images/ciderFallsLogo.png" alt="logo" class="logo">
  <h1 class="title">Cider Falls National Park</h1></header>
  <header class="header">
  <div class="services-box detail--column">
    <h2>Park Services:</h2>
    <ul class="services-list"></ul>
  </div>
</header>
<main class="main-content">
  <section class="areas-section">
    <h1>Park Areas</h1>
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

const services = getServices();
populateServicesList(services);
