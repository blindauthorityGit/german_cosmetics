import React, { useState } from "react";
import MainContainer from "../layout/mainContainer";
import { useForm } from "react-hook-form";
import Error from "./error";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const FormTemplate = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function onSubmitForm(values) {
        setLoading(true);
        let config = {
            method: "post",
            // url: `http://localhost:3000/api/contact`,
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };

        try {
            const response = await axios(config);
            setLoading(false);
            setSuccess(true);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="col-span-12 sm:col-span-12 grid grid-cols-12">
            <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="col-span-12 grid grid-cols-12 footer  sm:gap-8"
                action=""
            >
                <div className="hidden">
                    <label htmlFor="firstName">Name</label>
                    <input
                        {...register("firstName", { required: false })}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                    />
                </div>
                <input
                    {...register("name", { required: true })}
                    id="name"
                    className="col-span-12"
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <Error klasse="col-span-12">Bitte geben Sie Ihren vollen Namen an</Error>}

                <input
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    className="col-span-12 sm:col-span-6"
                    type="email"
                    placeholder="Email"
                />
                {errors.email && <Error klasse="block col-span-12">Bitte geben Sie Ihre Email an</Error>}

                <input
                    {...register("phone", { required: true })}
                    name="phone"
                    id="phone"
                    className="col-span-12 sm:col-span-6"
                    type="text"
                    placeholder="Telefonnummer"
                />
                {errors.phone && <Error klasse="block col-span-12">Bitte geben Sie Ihre Telefonnummer an</Error>}

                <textarea
                    {...register("message", { required: true })}
                    className="col-span-12"
                    name="message"
                    id="message"
                    cols="20"
                    rows="7"
                    placeholder="Nachricht"
                ></textarea>
                {errors.message && <Error klasse="block col-span-12">Bitte geben Sie Ihre Nachricht an</Error>}

                <div className="check col-span-12 mt-6">
                    <input
                        {...register("checkbox1", { required: true })}
                        id="checkbox1"
                        className="mr-4"
                        type="checkbox"
                    />
                    <label htmlFor="checkbox1" className="text-white">
                        Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zum Zweck der
                        Kontaktaufnahme zu. *
                    </label>
                    {errors.checkbox1 && <Error klasse="block col-span-12">Bitte bestätigen</Error>}
                </div>
                {loading ? (
                    <div className="w-96 flex justify-center">
                        <Rings
                            height="80"
                            width="80"
                            color="#a53f98"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                        />
                    </div>
                ) : (
                    <button
                        className="mt-8 col-span-12 border-2 transition border-white py-4 px-8 w-56 text-white hover:bg-white hover:text-text"
                        type="submit"
                    >
                        Absenden
                    </button>
                )}
            </form>
            {success ? <div className="text-primaryColor w-96 mt-4">Vielen Dank für Ihre Nachricht!</div> : ""}
        </div>
    );
};

export default FormTemplate;
