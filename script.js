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

document.addEventListener("DOMContentLoaded", () => {
    const headerMobileMenuButton = document.getElementById("header-mobile-menu-btn");
    const headerMobileMenuCloseButton = document.getElementById("header-mobile-flyout-close-btn");
    const wishlistBtn = document.getElementById("main-landing-page-information-list-btn");

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

    wishlistBtn.addEventListener("click", () => {
        wishlistBtn.classList.toggle("clicked");
    });
});

window.addEventListener("popstate", () => {
    const headerMobileFlyoutContainer = document.getElementById("header-mobile-flyout-container");

    if (headerMobileFlyoutContainer.classList.contains("show")) {
        headerMobileFlyoutContainer.classList.remove("show");
        document.body.style.overflow = "visible";
    }
});

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

// const colourSelectors = document.getElementsByClassName("colour-selector");

// Array.from(colourSelectors).forEach(colourSelector => {
//     colourSelector.addEventListener("click", event => {
//         console.log("test");
//         document.getElementsByClassName("selected")[0].classList.remove("selected");
//         event.target.classList.toggle("selected");
//     });
// });

function toggleColourSelector(event) {
    if (document.getElementsByClassName("selected")[0] !== undefined) {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
    event.target.classList.toggle("selected");
}

document.addEventListener("DOMContentLoaded", () => {
    const footerMadeInGermanyText = document.getElementsByClassName("footer-made-in-germany-text");

    let isScrolling;
    let previousScrollY = 0;
    let amountScrolled = 0;

    window.addEventListener("scroll",  () => {
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            const newScrollY = window.scrollY; // Get the new Y-Position after scrolling
            amountScrolled = newScrollY > previousScrollY ? newScrollY - previousScrollY : -(previousScrollY - newScrollY); // Calculates the amount scrolled

            for (let i = 0; i < footerMadeInGermanyText.length; i++) {
                const currentElement = footerMadeInGermanyText[i]; // Selects on of the h4 elements
                const currentTransform = currentElement.style.transform; // Gets the current transform value
                const currentTranslateX = currentTransform.match(/translateX\((-?\d+)px\)/); // Gets the current translateX value

                currentElement.style.transform = `translateX(${currentTranslateX ? parseInt(currentTranslateX[1]) - amountScrolled : -amountScrolled}px)`;
            }
            previousScrollY = newScrollY;
        }, 100);
    });

    window.addEventListener("scroll", () => {
        if (amountScrolled > 0) {
            if (footerMadeInGermanyText[0].getBoundingClientRect().right <= 0) {
                const parent = footerMadeInGermanyText[0].parentNode;
                parent.appendChild(footerMadeInGermanyText[0]);
                footerMadeInGermanyText[0].style.transform = `translateX(${parent.scrollWidth}px)`;
            }
        } else if (amountScrolled < 0) {
            if (footerMadeInGermanyText[footerMadeInGermanyText.length - 1].getBoundingClientRect().left >= window.innerWidth) {
                const parent = footerMadeInGermanyText[footerMadeInGermanyText.length - 1].parentNode;
                parent.insertBefore(footerMadeInGermanyText[footerMadeInGermanyText.length - 1], parent.firstChild);
                footerMadeInGermanyText[footerMadeInGermanyText.length - 1].style.transform = `translateX(-${parent.scrollWidth}px)`;
            }
        }
    });
});
