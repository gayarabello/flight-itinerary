const body = document.getElementsByTagName('body')[0];
const appTitle = document.createElement('h1');
appTitle.innerText = 'Route Itinerary'
body.prepend(appTitle)
const app = document.getElementById('app');


function getTicket(e){
    const ticket = onewayTickets.find(ticket => ticket[0] === e.target.innerText)
    alert(`Grap your ticket: ${ticket[0]} ✈️ ${ticket[1]}`)

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