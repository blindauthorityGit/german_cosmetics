function checkTop(divs, state, setState, links) {
    divs.forEach((e, i) => {
        let divTop = e.getBoundingClientRect().top;
        if (divTop <= 64) {
            setState(e.id);
            links.forEach((e) => {
                e.classList.remove("activeSideLink");
                e.children[0].style.width = "2rem";
            });
            links[i].classList.add("activeSideLink");
            links[i].children[0].style.width = "3rem";
        }
    });
}

export { checkTop };
