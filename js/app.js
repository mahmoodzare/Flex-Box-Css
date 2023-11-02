
// nav control

const navbtn = document.getElementById("nav-toggle");
const navlinks = document.getElementById("nav-link");


navbtn.addEventListener("click", () => {
    navlinks.classList.toggle("show-links");
});

// scroll control




const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        // prevent default
        e.preventDefault();
        navlinks.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});