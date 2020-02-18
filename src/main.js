import Route from './script/route'
import Router from './script/router'

class App {
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
window.app = new App()
app.router = new Router([
    new Route('/', './home.html', true, 'home', [
        new Route('', './home-content.html', false, 'home')
    ]),            
    new Route('about', './about.html', false, 'about',[
        new Route('content', './about-content.html', false, 'about-content')
    ])
])