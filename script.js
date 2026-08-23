/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


/* =====================================================
   CLOSE MENU AFTER CLICKING
===================================================== */

const menuLinks =
    document.querySelectorAll("#navMenu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu =
            document.getElementById("navMenu");

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =====================================================
   COPY UPI ID
===================================================== */

function copyUPI() {

    const upi =
        document.getElementById("upiText").innerText;

    const message =
        document.getElementById("copyMessage");


    navigator.clipboard.writeText(upi)
        .then(function() {

            message.innerText =
                "✅ UPI ID कॉपी झाला!";

            setTimeout(function() {

                message.innerText = "";

            }, 3000);

        })
        .catch(function() {

            message.innerText =
                "❌ UPI ID कॉपी करता आले नाही.";

        });

}


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

function changeLanguage(language) {

    const elements =
        document.querySelectorAll("[data-" + language + "]");


    elements.forEach(function(element) {

        element.innerText =
            element.getAttribute(
                "data-" + language
            );

    });


    /* Change HTML language */

    if (language === "mr") {

        document.documentElement.lang = "mr";

    }

    else if (language === "hi") {

        document.documentElement.lang = "hi";

    }

    else if (language === "en") {

        document.documentElement.lang = "en";

    }


    /* Save selected language */

    localStorage.setItem(
        "mandalLanguage",
        language
    );

}


/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedLanguage =
            localStorage.getItem(
                "mandalLanguage"
            );


        if (savedLanguage) {

            changeLanguage(savedLanguage);

        }

    }
);
