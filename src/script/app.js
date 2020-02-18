
export default class App {
    router
    constructor() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('app').innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', 'app.html', false);
        xhttp.send()
        window.history.replaceState('Object', 'Title', `/#/`);
    }
}
var app = new App()
app.router = new Router([
    new Route('/', 'views/home.html', true, 'home', [
        new Route('', 'views/home-content.html', false, 'home')
    ]),            
    new Route('about', 'views/about.html', false, 'about',[
        new Route('content', 'views/about-content.html', false, 'about-content')
    ])
])