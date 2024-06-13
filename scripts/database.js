
const database = {
    parkAreas: [{
        id: 1,
        name: "Chamfort River",
    },{
        id: 2,
        name: "Lost Wolf Hiking Trail",
    },{
        id: 3,
        name: "Lodge",
    },{
        id: 4,
        name: "Gander River",
    },{
        id: 5,
        name: "Campgrounds",
    },{
        id: 6,
        name: "Pine Bluffs Trails",
    },],
    services: [{
        id: 1,
        name:  "rafting",
    },{
        id: 2,
        name: "conoeing",
    },{
        id: 3,
        name: "fishing",
    },{
        id: 4,
        name: "hiking",
    },{
        id: 5,
        name: "picnicking",
    },{
        id: 6,
        name: "rock climbing",
    },{
        id: 7,
        name: "lodging",
    },{
        id: 8,
        name: "parking",
    },{
        id: 9,
        name: "information",
    },{
        id: 10,
        name: "zip lines",
    },{
        id: 11,
        name: "hotel",
    },{
        id: 12,
        name: "restaurant",
    },{
        id: 13,
        name: "office park",
    },{
        id: 14,
        name: "children's play areas",
    },{
        id: 15,
        name: "food vendors",
    },],
    guests: [
        { id: 1, name: "Homer Simpson", parkAreaId: 1 },
        { id: 2, name: "Bart Simpson", parkAreaId: 2 },
        { id: 3, name: "Lisa Simpson", parkAreaId: 3 },
        { id: 4, name: "Marge Simpson", parkAreaId: 1 },
        { id: 5, name: "Stewie Griffin", parkAreaId: 2 },
        { id: 6, name: "Peter Griffin", parkAreaId: 3 },
        { id: 7, name: "Brian Griffin", parkAreaId: 1 },
        { id: 8, name: "Tommy Pickles", parkAreaId: 2 },
        { id: 9, name: "Chuckie Finster", parkAreaId: 3 },
        { id: 10, name: "Angelica Pickles", parkAreaId: 1 },
        { id: 11, name: "Arnold Shortman", parkAreaId: 2 },
        { id: 12, name: "Helga Pataki", parkAreaId: 3 },
        { id: 13, name: "Gerald Johanssen", parkAreaId: 1 },
        { id: 14, name: "Doug Funnie", parkAreaId: 2 },
        { id: 15, name: "Patti Mayonnaise", parkAreaId: 3 },
        { id: 16, name: "Roger Klotz", parkAreaId: 1 },
        { id: 17, name: "Daria Morgendorffer", parkAreaId: 2 },
        { id: 18, name: "Jane Lane", parkAreaId: 3 },
        { id: 19, name: "Beavis", parkAreaId: 1 },
        { id: 20, name: "Butt-Head", parkAreaId: 2 },
        { id: 21, name: "Yakko Warner", parkAreaId: 3 },
        { id: 22, name: "Wakko Warner", parkAreaId: 1 },
        { id: 23, name: "Dot Warner", parkAreaId: 2 },
        { id: 24, name: "Pinky", parkAreaId: 3 },
        { id: 25, name: "The Brain", parkAreaId: 1 },
        { id: 26, name: "Dexter", parkAreaId: 2 },
        { id: 27, name: "Dee Dee", parkAreaId: 3 },
        { id: 28, name: "Johnny Bravo", parkAreaId: 1 },
        { id: 29, name: "Blossom", parkAreaId: 2 },
        { id: 30, name: "Bubbles", parkAreaId: 3 },
        { id: 31, name: "Buttercup", parkAreaId: 1 },
        { id: 32, name: "Ren Hoek", parkAreaId: 2 },
        { id: 33, name: "Stimpy", parkAreaId: 3 },
        { id: 34, name: "Rocko", parkAreaId: 1 },
        { id: 35, name: "Heffer Wolfe", parkAreaId: 2 },
        { id: 36, name: "Cat", parkAreaId: 3 },
        { id: 37, name: "Dog", parkAreaId: 1 },
        { id: 38, name: "Goliath", parkAreaId: 2 },
        { id: 39, name: "Brooklyn", parkAreaId: 3 },
        { id: 40, name: "Lexington", parkAreaId: 1 },]
}

export const getAreas = () => {
    return database.parkAreas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(area => ({...area}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

//rafting, conoeing, fishing, hiking, picnicking, rock climbing, lodging, parking, information, zip lines, hotel, restaurant, office park, children play areas, food vendors