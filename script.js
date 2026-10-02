// ==========================================
// NEOLIFE MODERN CARE CLINIC
// MAIN WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const nav = document.getElementById("navLinks");
    const menuBtn = document.getElementById("menuBtn");

    if (!nav || !menuBtn) return;

    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {

        menuBtn.textContent = "✕";
        menuBtn.setAttribute(
            "aria-label",
            "Close menu"
        );

    } else {

        menuBtn.textContent = "☰";
        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );
    }
}


// ==========================================
// SLIDER DATABASE
// ==========================================

const sliderIndexes = {};


// ==========================================
// SHOW CURRENT SLIDE
// ==========================================

function showSlide(sliderId) {

    const slider =
        document.getElementById(sliderId);

    if (!slider) return;

    const slides =
        slider.querySelectorAll(".slide");

    if (!slides.length) return;

    if (sliderIndexes[sliderId] === undefined) {
        sliderIndexes[sliderId] = 0;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[
        sliderIndexes[sliderId]
    ].classList.add("active");
}


// ==========================================
// CHANGE SLIDE
// ==========================================

function changeSlide(sliderId, direction) {

    const slider =
        document.getElementById(sliderId);

    if (!slider) return;

    const slides =
        slider.querySelectorAll(".slide");

    if (!slides.length) return;

    if (sliderIndexes[sliderId] === undefined) {
        sliderIndexes[sliderId] = 0;
    }

    sliderIndexes[sliderId] += direction;

    if (
        sliderIndexes[sliderId] >=
        slides.length
    ) {
        sliderIndexes[sliderId] = 0;
    }

    if (
        sliderIndexes[sliderId] < 0
    ) {
        sliderIndexes[sliderId] =
            slides.length - 1;
    }

    showSlide(sliderId);
}


// ==========================================
// INITIALIZE SLIDERS
// ==========================================

function initializeSliders() {

    const sliders = [
        "labSlider",
        "nursingSlider",
        "officeSlider",
        "receptionSlider",
        "buildingSlider"
    ];

    sliders.forEach(function(sliderId) {

        showSlide(sliderId);

        setInterval(function() {

            changeSlide(
                sliderId,
                1
            );

        }, 5000);

    });
}


// ==========================================
// CLOSE MOBILE MENU
// ==========================================

function setupNavigation() {

    const links =
        document.querySelectorAll(
            "#navLinks a"
        );

    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                const nav =
                    document.getElementById(
                        "navLinks"
                    );

                const menuBtn =
                    document.getElementById(
                        "menuBtn"
                    );

                if (nav) {
                    nav.classList.remove(
                        "show"
                    );
                }

                if (menuBtn) {

                    menuBtn.textContent =
                        "☰";

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open menu"
                    );
                }

            }
        );

    });
}


// ==========================================
// FOOTER YEAR
// ==========================================

function setupFooterYear() {

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }
}


// ==========================================
// APPOINTMENT DATE
// ==========================================

function setupAppointmentDate() {

    const dateInput =
        document.getElementById("date");

    if (!dateInput) return;

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    dateInput.min =
        `${year}-${month}-${day}`;
}


// ==========================================
// PAGE START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupNavigation();

        setupFooterYear();

        setupAppointmentDate();

        initializeSliders();

    }
);