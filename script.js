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

/**
 * Initiates the change of the websites colour scheme
 * 
 * @returns {void}
 */
function darkmodeBtnClicked() {
    if (document.getElementById("body").classList.contains("dark")) {
        changeWebsiteColourScheme(false);
        document.getElementById("header-darkmode-btn").children[0].textContent = "light_mode";
    } else {
        changeWebsiteColourScheme(true);
        document.getElementById("header-darkmode-btn").children[0].textContent = "dark_mode";
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
});

document.addEventListener("click", (event) => {
    if (event.target.id === "footer-back-top") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (event.target.id === "header-darkmode-btn") {
        darkmodeBtnClicked();
    }
});