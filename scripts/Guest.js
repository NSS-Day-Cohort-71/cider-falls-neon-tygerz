import { getGuests } from "./database.js";

const guests = getGuests();

export const Guests = () => {
  let html = "<ul>";

  for (const guest of guests) {
    html += `<li 
                    data-guestid="${guest.id}" 
                    data-type="guest" 
                    data-parkareaid="${guest.parkAreaId}">
                    ${guest.name}
                </li>`;
  }

  html += "</ul>";
  return html;
};

//Test
