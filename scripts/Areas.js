import { getAreas, getServices } from "./database.js";

const parkAreas = getAreas();
const services = getServices();

// document.addEventListener("click", (event) => {
//     if(event.target.dataset.type === "")
// })

export const Areas = () => {
  let HTML = `<ul>`;

  for (const area of parkAreas) {
    HTML += `<li
                    data-areaid="${area.id}"
                    data-type="park-area"
                    >
                    ${area.name}
                    >`;
  }
  HTML += "</li>";
  return HTML;
};

//data-services="${area.services.join(`, `)}"
