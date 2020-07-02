
// console.log(window.location)
console.log(window.location.pathname)

window.document.title = window.location.pathname.split('/').join(' ');

function setRoute(route, props) {
    // if (window.location.pathname === route) {
    //     return console.log('route is already set to:', route);
    // }
    window.document.title = route.split('/').join(' ');
    window.history.pushState(props, route, route);
}
function getRoute() {
    return window.location.pathname;
}

export default { getRoute, setRoute };