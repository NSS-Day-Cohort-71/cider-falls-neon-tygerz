import { getAreas, getServicesForParkAreas, } from "./database.js";


const parkAreas = getAreas();


// document.addEventListener("click", (event) => {
//     if(event.target.dataset.type === "")
// })

export const Areas = () => {
  const pas = getServicesForParkAreas()
  let HTML = ``;

  for (const area of pas) {
    HTML += `<p
                    data-areaid="${area.id}"
                    data-type="park-area">
                    ${area.parkArea}`;
  
    HTML += `<ul>`
      for (const service of area.services) {
        HTML += `<li>${service}</li>`
      }
              
            HTML += `</ul>`
    
  }
  HTML += "</p>";
  return HTML;
};

//data-services="${area.services.join(`, `)}"
