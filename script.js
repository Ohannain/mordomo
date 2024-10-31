/** 
 * Changes the websites colour scheme to dark or light
 * 
 * @param {boolean} isDarkScheme - true (dark scheme applied) or false (light scheme applied)
 * @returns {void}
 */
function changeWebsiteColourScheme(isDarkScheme) {
    if (isDarkScheme) {
        document.getElementById("body").classList.add("dark");
    } else {
        document.getElementById("body").classList.remove("dark");
    }
}

function setFlyoutContainerHeight() {
    const flyoutContainer = document.getElementById("header-mobile-flyout-container");
    flyoutContainer.style.height = `${window.innerHeight}px`;
}

/**
 * Initiates the change of the websites colour scheme
 * 
 * @returns {void}
 */
function darkmodeBtnClicked() {
    if (document.getElementById("body").classList.contains("dark")) {
        changeWebsiteColourScheme(false);
        document.getElementById("header-darkmode-btn").children[0].textContent = "dark_mode";
        document.getElementById("header-flyout-darkmode-btn").children[0].textContent = "dark_mode";
        document.getElementById("header-logo").src = "assets/logo/mordomo_dark_orange.svg";
        document.getElementById("header-mobile-logo").src = "assets/logo/mordomo_dark_orange.svg";
        document.getElementById("footer-logo").src = "assets/logo/mordomo_dark_orange.svg";
    } else {
        changeWebsiteColourScheme(true);
        document.getElementById("header-darkmode-btn").children[0].textContent = "light_mode";
        document.getElementById("header-flyout-darkmode-btn").children[0].textContent = "light_mode";
        document.getElementById("header-logo").src = "assets/logo/mordomo_light_orange.svg";
        document.getElementById("header-mobile-logo").src = "assets/logo/mordomo_light_orange.svg";
        document.getElementById("footer-logo").src = "assets/logo/mordomo_light_orange.svg";
    }
}

/**
 * Event listener for when the website has loaded
 * 
 * @event DOMContentLoaded
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", () => {
    // Checks the users system colour scheme (dark/light)
    const userDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    changeWebsiteColourScheme(userDarkScheme);
    document.getElementById("header-darkmode-btn").children[0].textContent = userDarkScheme ? "light_mode" : "dark_mode";
    document.getElementById("header-flyout-darkmode-btn").children[0].textContent = userDarkScheme ? "light_mode" : "dark_mode";
    document.getElementById("footer-logo").src = userDarkScheme ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
    document.getElementById("header-logo").src = userDarkScheme ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
    document.getElementById("header-mobile-logo").src = userDarkScheme ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
}); 

const colourSchemeChange = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Event listener for when the users system colour scheme changes
 * 
 * @event change
 * @param {MediaQueryListEvent} event - event object
 * @returns {void}
 */
colourSchemeChange.addEventListener("change", (event) => {
    changeWebsiteColourScheme(event.matches);
    document.getElementById("header-darkmode-btn").children[0].textContent = event.matches ? "light_mode" : "dark_mode";
    document.getElementById("header-flyout-darkmode-btn").children[0].textContent = event.matches ? "light_mode" : "dark_mode";
    document.getElementById("header-logo").src = event.matches ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
    document.getElementById("header-mobile-logo").src = event.matches ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
    document.getElementById("footer-logo").src = event.matches ? "assets/logo/mordomo_light_orange.svg" : "assets/logo/mordomo_dark_orange.svg";
});

// document.addEventListener("click", (event) => {
//     if ()
// });


/**
 * Event listener for the header navigation buttons
 * 
 * @event click
 * @param {MouseEvent} event - event object
 * @returns {void}
 */
document.addEventListener("click", (event) => {
    if (event.target.id == "header-nav-products-btn" && !document.getElementById("header-mobile-flyout-container").classList.contains("show")) {
        document.getElementById("header-dropdown-products").classList.toggle("show");
        document.getElementById("header-dropdown-inspiration").classList.remove("show");
        document.getElementById("header-dropdown-smarthome").classList.remove("show");
        if (document.getElementById("header-dropdown-products").classList.contains("show")) {
            document.getElementById("header-dropdown-container").classList.add("blur");
            document.getElementById("header-dropdown-container").classList.add("show");
            document.body.style.overflow = "hidden";
        } else {
            document.getElementById("header-dropdown-container").classList.remove("blur");
            document.getElementById("header-dropdown-container").classList.remove("show");
            document.body.style.overflow = "visible";
        }
    } else if (event.target.id == "header-nav-inspiration-btn" && !document.getElementById("header-mobile-flyout-container").classList.contains("show")) {
        document.getElementById("header-dropdown-inspiration").classList.toggle("show");
        document.getElementById("header-dropdown-products").classList.remove("show");
        document.getElementById("header-dropdown-smarthome").classList.remove("show");
        if (document.getElementById("header-dropdown-inspiration").classList.contains("show")) {
            document.getElementById("header-dropdown-container").classList.add("blur");
            document.getElementById("header-dropdown-container").classList.add("show");
            document.body.style.overflow = "hidden";
        } else {
            document.getElementById("header-dropdown-container").classList.remove("blur");
            document.getElementById("header-dropdown-container").classList.remove("show");
            document.body.style.overflow = "visible";
        }
    } else if (event.target.id == "header-nav-smarthome-btn" && !document.getElementById("header-mobile-flyout-container").classList.contains("show")) {
        document.getElementById("header-dropdown-smarthome").classList.toggle("show");
        document.getElementById("header-dropdown-products").classList.remove("show");
        document.getElementById("header-dropdown-inspiration").classList.remove("show");
        if (document.getElementById("header-dropdown-smarthome").classList.contains("show")) {
            document.getElementById("header-dropdown-container").classList.add("blur");
            document.getElementById("header-dropdown-container").classList.add("show");
            document.body.style.overflow = "hidden";
        } else {
            document.getElementById("header-dropdown-container").classList.remove("blur");
            document.getElementById("header-dropdown-container").classList.remove("show");
            document.body.style.overflow = "visible";
        }
    } 
});

/**
 * Event listener for the footer back to top button
 * 
 * @event click
 * @param {MouseEvent} event - event object
 * @returns {void}
 */
document.addEventListener("click", (event) => {
    if (event.target.id === "footer-back-top") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (event.target.id === "header-darkmode-btn") {
        darkmodeBtnClicked();
    } else if (event.target.id === "header-flyout-darkmode-btn") {
        darkmodeBtnClicked();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const headerMobileMenuButton = document.getElementById("header-mobile-menu-btn");
    const headerMobileMenuCloseButton = document.getElementById("header-mobile-flyout-close-btn");

    headerMobileMenuButton.addEventListener("click", () => {
        document.getElementById("header-mobile-flyout-container").classList.add("show");
        if (window.innerWidth < 520) {
            document.body.style.overflow = "hidden";
        }
        history.pushState(null, null, window.location.href);
    });

    headerMobileMenuCloseButton.addEventListener("click", () => {
        document.getElementById("header-mobile-flyout-container").classList.remove("show");
        document.body.style.overflow = "visible";
    });
});

window.addEventListener("popstate", () => {
    const headerMobileFlyoutContainer = document.getElementById("header-mobile-flyout-container");

    if (headerMobileFlyoutContainer.classList.contains("show")) {
        headerMobileFlyoutContainer.classList.remove("show");
        document.body.style.overflow = "visible";
    }
});

window.addEventListener("resize", setFlyoutContainerHeight);
window.addEventListener("load", setFlyoutContainerHeight);