function checkTop(divs, activeLink, setActiveLink, links) {
    divs.forEach((div, i) => {
        const rect = div.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveLink(div.id);

            // Check if links[i] exists
            if (links[i]) {
                // Loop through all links and ensure they have children before accessing
                links.forEach((e) => {
                    e.classList.remove("activeSideLink");

                    // Check if e has children and if children[0] exists
                    if (e.children && e.children[0]) {
                        e.children[0].style.width = "2rem";
                    }
                });

                // Add class and style to the current link
                links[i].classList.add("activeSideLink");

                // Ensure links[i] has children before accessing
                if (links[i].children && links[i].children[0]) {
                    links[i].children[0].style.width = "3rem";
                }
            }
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
