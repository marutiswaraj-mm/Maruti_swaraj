function toggleMenu() {
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


/* Close mobile menu after clicking a link */

const menuLinks = document.querySelectorAll("#navMenu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu = document.getElementById("navMenu");

        navMenu.classList.remove("active");

    });

});


/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
