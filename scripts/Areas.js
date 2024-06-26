import { getGuests, getServicesForParkAreas } from "./database.js";

const pas = getServicesForParkAreas();

export const Areas = () => {
  let HTML = ``;

  for (const area of pas) {
    HTML += `
          <section class="detail--column details__area">
                    <h3 class="area--services"
                    data-id="${area.parkAreaId}"
                    data-type="park-area">
                    ${area.parkArea}</h3>`;

    HTML += `<ul>`;
    for (const service of area.services) {
      HTML += `<li data-type="service" data-service-id="${service.serviceId}" data-name="${service.serviceName}">${service.serviceName}</li>`;
    }

    HTML += `</ul></section>`;
  }

  return HTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "park-area") {
    const areaId = itemClicked.dataset.id;
    const guestList = getGuests();
    let guestCounter = 0;
    for (const guest of guestList) {
      if (parseInt(areaId) === guest.parkAreaId) {
        guestCounter++;
      }
    }
    window.alert(`There are ${guestCounter} guests in this area`);
  } else if (itemClicked.dataset.type === "service") {
    const serviceId = parseInt(itemClicked.dataset.serviceId);
    let servicedArea = [];
    let clickedService = itemClicked.textContent;
    for (const section of pas) {
      if (section.services.some((service) => service.serviceId === serviceId)) {
        servicedArea.push(section.parkArea);
      }
    }

    const formatLocations = (locations) => {
      if (locations.length === 0) {
        return "";
      } else if (locations.length === 1) {
        return locations[0];
      } else if (locations.length === 2) {
        return locations.join(" and ");
      } else {
        return `${locations.slice(0, -1).join(", ")}, and ${
          locations[locations.length - 1]
        }`;
      }
    };

    let message = `${clickedService} is available in `;
    if (servicedArea.length > 0) {
      message += formatLocations(servicedArea);
    } else {
      message += "no park areas";
    }
    window.alert(message);
  }
});
