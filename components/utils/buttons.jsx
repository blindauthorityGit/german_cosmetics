function DefaultButton(props) {
    return (
        <>
            <div
                className={`group  ease-in-out duration-200 hover:bg-darkBlue cursor-pointer p-4 flex items-center justify-center ${props.klasse}`}
                onClick={props.onClick}
            >
                {props.children}
            </div>
        </>
    );
}

export { DefaultButton };
