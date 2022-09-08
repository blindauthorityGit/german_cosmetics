const AbsoluteContainer = (props) => {
    return (
        <div
            className={`grid grid-cols-12 col-span-12 absolute sm:gap-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.width}`}
        >
            {props.children}
        </div>
    );
};

export default AbsoluteContainer;
