function modalSwitcher(e, state, setState) {
    e.preventDefault();
    state ? setState(false) : setState(true);
    !state ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "scroll");
}

export { modalSwitcher };
