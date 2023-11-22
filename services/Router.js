// ./services/Router.js

import PasswordElemt from "./password.js";

const Router = {
    init: function initialize() {
        var navLinks = document.querySelectorAll("a.navlink");
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

        let page = null;

        switch (route) {
            case "/":
                page = this.createHomePage();
                break;

            case "/puzzle-1":
                page = document.createElement("puzzle-one");
                break;

            case "/puzzle-two":
                page = this.handlePasswordPuzzles(1, "puzzle-two");
                break;

            case "/puzzle-three":
                page = this.handlePasswordPuzzles(2, "puzzle-three");
                break;

            case "/puzzle-four":
                page = this.handlePasswordPuzzles(3, "puzzle-four");
                break;

            case "/puzzle-five":
                page = this.handlePasswordPuzzles(4, "puzzle-five");
                break;

            case "/password":
                page = document.createElement("my-password");
                break;
        }

        this.renderPage(page);
    },

    setupAnchorNavigationListeners: function setupAnchorNavigationListeners(anchorNavigationElements) {
        anchorNavigationElements.forEach((anchorElement) => {
            anchorElement.addEventListener("click", (event) => {
                event.preventDefault();
                const targetUrl = event.target.getAttribute("href");
                this.navigate(targetUrl);
            });
        });
    },

    handlePasswordPuzzles: function handlePasswordPuzzles(index, puzzleElement) {
        const savedPuzzles = JSON.parse(localStorage.getItem("puzzles"));

        // Check if there are saved puzzles in localStorage
        if (savedPuzzles && savedPuzzles[index].solved) {
            return document.createElement(puzzleElement);
        } else {
            const page = document.createElement("my-password");
            app.puzzles[index].passwordElement = page;

            // Delay for 1 second
            setTimeout(() => {
                const passwordElements = PasswordElemt();
                passwordElements.passwordElement.classList.add("show");

                passwordElements.buttonElement.addEventListener("click", () => {
                    if (passwordElements.inputElement.value === app.puzzles[index].secret) {
                        app.puzzles[index].solved = true;

                        // Update localStorage with the solving state
                        localStorage.setItem("puzzles", JSON.stringify(app.puzzles));

                        this.navigate(`/${puzzleElement}`);
                    } else {
                        alert("Wrong password");
                    }
                });
            }, 1000);

            return page;
        }
    },

    createHomePage: function createHomePage() {
        const page = document.createElement("h1");
        page.textContent = "Home";
        return page;
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
    },
};

export default Router;
