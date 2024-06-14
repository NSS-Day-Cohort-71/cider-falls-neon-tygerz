import { getAreas, getGuests, getServicesForParkAreas, } from "./database.js";


const parkAreas = getAreas();

export const Areas = () => {
  const pas = getServicesForParkAreas()
  let HTML = ``;

  for (const area of pas) {
    HTML += `<h3    class="area--services"
                    data-id="${area.parkAreaId}"
                    data-type="park-area">
                    ${area.parkArea}</h3>`;
  
    HTML += `<ul>`
      for (const service of area.services) {
        HTML += `<li>${service}</li>`
      }
              
            HTML += `</ul>`
    
  }
  HTML += "</p>";
  return HTML;
};

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "park-area") {
      const areaId = itemClicked.dataset.id
      const guestList = getGuests()
      let guestCounter = 0
      for (const guest of guestList) {
        if (parseInt(areaId) === guest.parkAreaId) {
          guestCounter++
        }
      } window.alert(`There are ${guestCounter} in this area`)
    }

  }
)


