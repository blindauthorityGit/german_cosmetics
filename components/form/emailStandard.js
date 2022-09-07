const EmailStandard = (props) => {
    return (
        <div>
            <p>BlanBla</p>
            <br />
            <p>
                <strong>Name: </strong> {props.name}
            </p>
            <br />
            <p>
                <strong>Email: </strong> {props.email}
            </p>
            <br />
            <p>
                <strong>Telefon: </strong> {props.phone}
            </p>
            <br />
            <p>
                <strong>Message: </strong> {props.message}
            </p>
            <br></br>
        </div>
    );
};

export default EmailStandard;
