import Link from "next/link";

function DefaultButton(props) {
    return (
        <>
            <div
                className={`group uppercase font-bold ease-in-out duration-200 hover:bg-darkBlue cursor-pointer p-4 flex items-center justify-center ${props.klasse}`}
                onClick={props.onClick}
            >
                {props.children}
            </div>
        </>
    );
}
function DefaultButtonLink(props) {
    return (
        <>
            <Link href={props.href}>
                <a
                    className={`group uppercase font-bold ease-in-out duration-200 hover:bg-darkBlue cursor-pointer p-4 flex items-center justify-center ${props.klasse}`}
                >
                    {props.children}
                </a>
            </Link>
        </>
    );
}

export { DefaultButton, DefaultButtonLink };
