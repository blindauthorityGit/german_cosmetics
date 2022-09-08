function checkTop(divs, state, setState, links) {
    divs.forEach((e, i) => {
        let divTop = e.getBoundingClientRect().top;
        if (divTop <= 128) {
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

const wrap = (toWrap, wrapper) => {
    const newWrapper = wrapper ?? document.createElement("div");
    toWrap.parentNode.appendChild(newWrapper);
    return newWrapper.appendChild(toWrap);
};

const sorter = (data) => {
    return data.sort((a, b) => (a._type > b._type ? 1 : -1));
};

export { checkTop, wrap, sorter };
