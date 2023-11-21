const Router = {
    init: function initialize() {
        var navLinks = document.querySelectorAll("a.navlink");
        setupAnchorNavigationListeners(navLinks);
        HandleURLChanges();

        // Check if there's an initial state before replacing it
        if (!history.state || !history.state.route) {
            history.replaceState({ route: location.pathname }, "", location.pathname);
        }

        Router.navigate(location.pathname);
    },
    navigate: function navigate(route, addToHistory = true) {
        console.log(`Navigating to ${route}`);
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }

        let page = null;

        switch (route) {
            case "/":
                page = document.createElement("h1");
                page.textContent = "Home";

                break;

            case "/puzzle-1":
                page = document.createElement("puzzle-one");

                break;
            case "/puzzle-2":
                if (app.puzzles[0].solved == true){
                    page = document.createElement("puzzle-two");

                }else {
                    page = document.createElement("my-password");
                    page.puzzle = app.puzzles[0];
                }


                break;

            case "/puzzle-3":
                if (app.puzzles[1].solved == true){
                    page = document.createElement("puzzle-three");

                }else {
                    page = document.createElement("my-password");
                }
                break;
             case "/puzzle-4":
                 if (app.puzzles[2].solved == true){
                     page = document.createElement("puzzle-four");

                 }else {
                     page = document.createElement("my-password");
                 }
                break;
            case "/puzzle-5":
                if (app.puzzles[3].solved == true){
                    page = document.createElement("puzzle-five");

                }else {
                    page = document.createElement("my-password");
                }
                break;

            case "/password":
                page = document.createElement("my-password");
                break;


        }

        if (page) {
            let mainSection = document.querySelector("main");
            if (mainSection) {
                mainSection.innerHTML = "";
                mainSection.appendChild(page);
                window.scrollTo(0, 0);
            } else {
                console.error("Main section not found.");
            }
        }
    },

};

function setupAnchorNavigationListeners(anchorNavigationElements) {
    anchorNavigationElements.forEach(attachClickEventToAnchor);
}

function attachClickEventToAnchor(anchorElement) {
    anchorElement.addEventListener("click", (event) => {
        event.preventDefault();

        const targetUrl = event.target.getAttribute("href");
        Router.navigate(targetUrl);
    });
}

function HandleURLChanges() {
    let initialPopState = true;

    window.addEventListener("popstate", function HandleChanges(event) {
        // Ignore the initial popstate event
        if (initialPopState) {
            initialPopState = false;
            return;
        }

        Router.navigate(event.state.route, false);
    });
}

export default Router;
