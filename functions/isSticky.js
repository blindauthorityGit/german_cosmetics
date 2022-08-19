const isSticky = (e, state, setState) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop < 250 ? header.classList.add("nonSticky") : header.classList.remove("nonSticky");
    scrollTop >= 250 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
    scrollTop >= 250 ? header.classList.add("slide-in-top") : header.classList.remove("slide-in-top");
    scrollTop >= 250 ? setState(true) : setState(false);
};

export default isSticky;
