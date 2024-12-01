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
        document.getElementById("header-nav-products-btn").classList.toggle("active");
        if (document.getElementById("header-dropdown-products").classList.contains("show")) {
            document.getElementById("header-nav-inspiration-btn").classList.remove("active");
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
        document.getElementById("header-nav-inspiration-btn").classList.toggle("active");
        if (document.getElementById("header-dropdown-inspiration").classList.contains("show")) {
            document.getElementById("header-nav-products-btn").classList.remove("active");
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

/**
 * Checks the position of the footer and changes the colour of the header accordingly
 *  
 * @param {void}
 * @returns {void}
 */
function checkPositionOfHeader() {
    const footer = document.getElementById("footer-container");
    const footerTopPosition = footer.getBoundingClientRect().top;

    if (document.getElementById("body").classList.contains("dark")) {
        return;
    };

    if (footerTopPosition <= 0 && document.querySelector('meta[name="theme-color"]').getAttribute('content') != '#d6bc9d') {
        console.log(document.querySelector('meta[name="theme-color"]').content);
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#d6bc9d');
        document.getElementById("header-container").setAttribute("style", "background-color: #d6bc9d");
    } else if (footerTopPosition > 0 && document.querySelector('meta[name="theme-color"]').getAttribute('content') != '#c6ac8f') {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#c6ac8f');
        document.getElementById("header-container").setAttribute("style", "background-color: #c6ac8f");
    }
}

let triggered = false;

/**
 * Performs checks on the amount input field every 10ms
 * 
 * @param {void}
 * @returns {void}
 */
function checkAmountInput() {
    const amountInput = document.getElementById("main-landing-page-information-amount");

    // Disables/Enables the decrement button
    if (amountInput.value <= 1) {
        document.getElementById("main-landing-page-information-amount-decrement-btn").classList.add("disabled");
    } else if (amountInput.value > 1) {
        document.getElementById("main-landing-page-information-amount-decrement-btn").classList.remove("disabled");
    }

    // Disables/Enables the increment button
    if (amountInput.value >= 99) {
        document.getElementById("main-landing-page-information-amount-increment-btn").classList.add("disabled");
    } else if (amountInput.value < 99) {
        document.getElementById("main-landing-page-information-amount-increment-btn").classList.remove("disabled");
    }

    // Limits the amount of characters in the input field to 2
    if (amountInput.value < 0) {
        amountInput.value = 1;
    } else if (amountInput.value.length > 2) {
        amountInput.value = amountInput.value.slice(0, 2);
    }

    // From my understanding, this should replace all characters that are not numbers with an empty string
    // But it doesn't work
    // Somehow entering + or - still works
    // JS might allow + and - as a part of a number????
    // interestingly, after entering just one + or - all limits of the input field are removed and
    // the user is able to enter as many characters as they want (because I can't check for the size of the 
    // amountInput.value anymore...)
    for (let i = 0; i < amountInput.value.length; i++) {
        if (!amountInput.value[i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
            amountInput.value = amountInput.value.replace(amountInput.value[i], '');
        }
    }

    // Checks if the user entered the amount 69
    const amountAlertPopUp = document.getElementById("main-landing-page-information-set-amount-alert-container");
    if (!triggered && amountInput.value == "69") {
        amountAlertPopUp.classList.add("show");
        
        triggered = true;

        amountAlertPopUp.alertTimeout = setTimeout(() => {
            amountAlertPopUp.classList.remove("show");
        }, 2000);
    } else if (triggered && amountInput.value != "69") {
        amountAlertPopUp.classList.remove("show");
        clearTimeout(amountAlertPopUp.alertTimeout);
        triggered = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const headerMobileMenuButton = document.getElementById("header-mobile-menu-btn");
    const headerMobileMenuCloseButton = document.getElementById("header-mobile-flyout-close-btn");
    const wishlistBtn = document.getElementById("main-landing-page-information-list-btn");

    /**
     * Event listener for the button in the header to open the mobile flyout menu
     * 
     * @event click
     * @returns {void}
     */
    headerMobileMenuButton.addEventListener("click", () => {
        document.getElementById("header-mobile-flyout-container").classList.add("show");
        if (window.innerWidth < 520) {
            document.body.style.overflow = "hidden";
        }
        history.pushState(null, null, window.location.href);
    });

    /**
     * Event listener for the close button in the mobile flyout menu
     * 
     * @event click
     * @returns {void}
     */
    headerMobileMenuCloseButton.addEventListener("click", () => {
        document.getElementById("header-mobile-flyout-container").classList.remove("show");
        document.body.style.overflow = "visible";
    });

    /**
     * Toggles the state of the wishlist button
     * 
     * @event click
     * @returns {void}
     */
    wishlistBtn.addEventListener("click", () => {
        wishlistBtn.classList.toggle("clicked");
    });

    // Loop the function every 100ms
    setInterval(checkPositionOfHeader, 100);

    const amountDecrementBtn = document.getElementById("main-landing-page-information-amount-decrement-btn");
    const amountIncrementBtn = document.getElementById("main-landing-page-information-amount-increment-btn");
    const amountInput = document.getElementById("main-landing-page-information-amount");

    amountDecrementBtn.addEventListener("click", () => {
        if (amountInput.value > 1) {
            amountInput.value = parseInt(amountInput.value) - 1;
        }
    });

    amountIncrementBtn.addEventListener("click", () => {
        if (amountInput.value < 99) {
            amountInput.value = parseInt(amountInput.value) + 1;
        }
    });

    setInterval(checkAmountInput, 10);

    const buyNowBtn = document.getElementById("main-landing-page-information-shop-now-btn");
    const alertContainer = document.getElementById("main-landing-page-information-added-to-cart-alert-container");
    const alertText = document.getElementById("main-landing-page-information-added-to-cart-alert-text");

    buyNowBtn.addEventListener("click", () => {
        if (amountInput.value == 1) {
            alertText.textContent = `Ein Produkt wurde in den Warenkorb gelegt.`;
            alertContainer.classList.add("show");
        } else {
            alertText.textContent = `${amountInput.value} Produkte wurden in den Warenkorb gelegt.`;
            alertContainer.classList.add("show");
        }

        if (window.alertTimeout) {
            clearTimeout(window.alertTimeout);
        }
        window.alertTimeout = setTimeout(() => {
            alertContainer.classList.remove("show");
        }, 2000);
    });

    const accordionElementTitles = document.getElementsByClassName("accordion-element-title");

    for (let i = 0; i < accordionElementTitles.length; i++) {
        accordionElementTitles[i].addEventListener("click", (event) => {
            event.target.parentNode.children[1].classList.toggle("show");
        });
    }
});


/**
 * Event listener for when the user navigates back in the browser (on mobile) while the flyout menu ist open
 * 
 * @event popstate
 * @returns {void}
 */
window.addEventListener("popstate", () => {
    const headerMobileFlyoutContainer = document.getElementById("header-mobile-flyout-container");

    if (headerMobileFlyoutContainer.classList.contains("show")) {
        headerMobileFlyoutContainer.classList.remove("show");
        document.body.style.overflow = "visible";
    }
});

/**
 * Closes the dropdown menu if it's currently open and the window ist resized to a width smaller than 1101px
 * 
 * @event resize
 * @returns {void}
 */
window.addEventListener("resize", () => {
    if (window.innerWidth <= 1100 && document.getElementById("header-dropdown-container").classList.contains("show")) {
        document.getElementById("header-dropdown-container").classList.remove("show");
        document.getElementById("header-dropdown-container").classList.remove("blur");
        if (document.getElementById("header-dropdown-products").classList.contains("show")) {
            document.getElementById("header-dropdown-products").classList.remove("show");
            document.getElementById("header-nav-products-btn").classList.remove("active");
        } else if (document.getElementById("header-dropdown-inspiration").classList.contains("show")) {
            document.getElementById("header-dropdown-inspiration").classList.remove("show");
            document.getElementById("header-nav-inspiration-btn").classList.remove("active");
        }
        document.body.style.overflow = "visible";
    }
});

window.addEventListener("resize", setFlyoutContainerHeight);
window.addEventListener("load", setFlyoutContainerHeight);

/**
 * Function gets called when the user clicks on a colour in the colour selector
 * 
 * @param {*} event 
 * @returns {void}
 */
function toggleColourSelector(event) {
    if (document.getElementsByClassName("selected")[0] !== undefined) {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
    event.target.classList.toggle("selected");
}
