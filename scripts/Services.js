import { getServicesForParkAreas } from "./database.js";

export function populateServicesList(services) {
  const servicesList = document.querySelector(".services-list");
  services.forEach((service) => {
    const listItem = document.createElement("li");
    listItem.dataset.serviceId = service.id;
    listItem.dataset.type = "service";
    listItem.textContent = service.name;
    servicesList.appendChild(listItem);
  });
}