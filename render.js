const body = document.getElementsByTagName('body')[0];
const appTitle = document.createElement('h1');
const subtitle = document.createElement('h3');
appTitle.innerText = 'Route ✈️ Itinerary'
subtitle.innerText = 'Click on the code to get your ticket'
body.prepend(subtitle)
body.prepend(appTitle)

const app = document.getElementById('app');


function getTicket(e){
    const ticket = onewayTickets.find(ticket => ticket[0] === e.target.innerText)
    if(ticket) {
        alert(`Grap your ticket: ${ticket[0]} ✈️ ${ticket[1]}`)
    } else {
        alert(`Your trip is over 😔`)
    }

}

function newRoute(route) {
    const routeBox = document.createElement('div');
    routeBox.classList.add('route-box')
    const routeTitle = document.createElement('h3');
    routeTitle.innerText = route
    routeBox.addEventListener('click', getTicket)
    routeBox.append(routeTitle)
    return routeBox;
}

for(let route of routes) {
    app.append(newRoute(route))
}