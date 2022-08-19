function handleCTA(e, state, setState) {
    e.preventDefault();

    state ? setState(false) : setState(true);
}

export default handleCTA;
