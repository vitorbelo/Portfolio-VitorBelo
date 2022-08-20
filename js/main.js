let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}


//! GSAP

const tl = gsap.timeline();
tl.from(".navbar, .logo, .nav-link", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
        amount: 0.4,
    },
});

tl.from(
    ".home-img, #container",
    {
        y: -1100,
        skewY: 5,
        duration: 1,
        stagger: {
            amount: 0.4,
        },
    },
    "-=1"
);

tl.from(
    ".home-text",
    {
        y: 1100,
        duration: 1,
        opacity: 0,
    },
    "-=.5"
);
tl.from(".social", {
    x: 500,
    opacity: 0,
    duration: 1,
});
tl.from(".heading, .about-content, .services-content, .about-data", {
    y: -500,
    opacity: 0,
    duration: 1.2,
});
tl.from(".", {
    x: 2200,
    duration: 0.5,
    stagger: {
        amount: 0.4,
    },
});

tl.from(".text", {
    x: -1200,
    duration: 0.5,
    stagger: {
        amount: 0.4,
    },
});