import { useState, useEffect } from "react";
import client from "../../../client";

export default function Aesthetic_Home({ data }) {
    useEffect(() => {
        console.log(data);
        console.log("Test");
    }, []);

    return <div>HALLO</div>;
}

export async function getStaticProps() {
    // const res = await client.fetch(`*[_type == "aesthetic_settings"]);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await res;
    return {
        props: {
            data,
        },
    };
}
