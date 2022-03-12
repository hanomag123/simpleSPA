console.log('1')

const route = event => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
    404: "/pages/404.html"
}

const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]
    const html = await fetch(route).then(data => data.text());
    document.querySelector('#main-page').innerHTML = html;
}

window.onpopstate = handleLocation;

handleLocation();