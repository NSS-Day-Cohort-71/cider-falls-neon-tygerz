import { getAreas, getGuests, getServicesForParkAreas } from "./database.js";

const parkAreas = getAreas();

export const Areas = () => {
  const pas = getServicesForParkAreas();
  let HTML = ``;

  for (const area of pas) {
    HTML += `
      <section class="detail--column details__area">
        <h3 class="area--services" data-id="${
          area.parkAreaId
        }" data-type="park-area">
          ${area.parkArea}
        </h3>
        <ul>
          ${area.services.map((service) => `<li>${service}</li>`).join("")}
        </ul>
      </section>`;
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
  }
});
