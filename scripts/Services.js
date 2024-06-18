import { getServices } from "./database.js";

const services = getServices()

export const Services = () => {
    let HTML = `<section class="services"<h2>Park Services</h2>>
              <ul class="services__list">`;
  
    for (const service of services) {
      HTML += `<li class="services__item" data-type="service" 
              data-id="${service.id}" data-name="${service.name}">
              ${service.name}
              </li>`;
    }
  
    HTML += `</ul></section>`;
  
    return HTML;
  };