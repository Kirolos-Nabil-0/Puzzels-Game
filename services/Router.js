const Router = {
    init: function initialize() {
        const navLinks = document.querySelectorAll("a.navlink");
        this.setupAnchorNavigationListeners(navLinks);
        this.handleURLChanges();

        // Check if there's an initial state before replacing it
        if (!history.state || !history.state.route) {
            history.replaceState({ route: location.pathname }, "", location.pathname);
        }

        this.navigate(location.pathname);
    },
    navigate: function navigate(route, addToHistory = true) {
        console.log(`Navigating to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        const page = this.getPageElement(route);

        if (page) {
            this.renderPage(page);
        } else {
            console.error("Page not found for route: ", route);
        }
    },
    getPageElement: function getPageElement(route) {
        const routeObject = this.Routes.find(r => r.route === route);
        return routeObject ? document.createElement(routeObject.page) : null;
    },
    renderPage: function renderPage(page) {
        const mainSection = document.querySelector("main");

        if (mainSection) {
            mainSection.innerHTML = "";
            mainSection.appendChild(page);
            window.scrollTo(0, 0);
        } else {
            console.error("Main section not found.");
        }
    },
    Routes: [],
    RouteObject: function createRouteObject(route, page) {
        return { route, page };
    },
    addRoute: function addRoute(route, page) {
        const pageContent = document.createElement(page);
        const routeObject = this.RouteObject(route, pageContent);
        this.Routes.push(routeObject);
    },
    setupAnchorNavigationListeners: function setupAnchorNavigationListeners(anchorNavigationElements) {
        anchorNavigationElements.forEach(anchorElement => this.attachClickEventToAnchor(anchorElement));
    },
    attachClickEventToAnchor: function attachClickEventToAnchor(anchorElement) {
        anchorElement.addEventListener("click", (event) => {
            event.preventDefault();
            const targetUrl = event.target.getAttribute("href");
            this.navigate(targetUrl);
        });
    },
    handleURLChanges: function handleURLChanges() {
        let initialPopState = true;

        window.addEventListener("popstate", (event) => {
            // Ignore the initial popstate event
            if (initialPopState) {
                initialPopState = false;
                return;
            }

            this.navigate(event.state.route, false);
        });
    }
};

export default Router;
