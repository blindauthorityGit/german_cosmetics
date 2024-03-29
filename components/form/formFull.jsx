import React, { useState } from "react";
import MainContainer from "../layout/mainContainer";
import { useForm } from "react-hook-form";
import Error from "./error";
import axios from "axios";
import { Rings } from "react-loader-spinner";

const FormFull = () => {
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
            url: `/api/contact`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };

        try {
            const response = await axios(config);
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            console.log("frontend error", err);
        }
    }
    return (
        <MainContainer width="container sm:pt-16 sm:pt-16 sm:pb-32 font-europa relative px-12 lg:px-32">
            <div className="col-span-12 sm:col-span-12 grid grid-cols-12">
                <form
                    onSubmit={handleSubmit(onSubmitForm)}
                    className="col-span-12 grid grid-cols-12 footer topKontakt sm:gap-8"
                    action=""
                >
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
                            {...register("checkbox", { required: true })}
                            id="checkbox"
                            className="mr-4"
                            type="checkbox"
                        />
                        <label htmlFor="checkbox" className="text-text">
                            Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zum Zweck der
                            Kontaktaufnahme zu. *
                        </label>
                        {errors.checkbox && <Error klasse="block col-span-12">Bitte bestätigen</Error>}
                    </div>
                    {loading ? (
                        <div className="w-96 flex justify-center">
                            <Rings
                                height="80"
                                width="80"
                                color="#8c8264"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                    ) : (
                        <div className="w-full col-span-12">
                            <button
                                className="group w-full  sm:w-96 ease-in-out duration-200 hover:bg-darkBlue cursor-pointer p-4 flex items-center justify-center mt-8 sm:mt-4 mb-12 sm:mb-0 hover:bg-primaryColor hover:text-white border border-primaryColor text-primaryColor"
                                type="submit"
                            >
                                Absenden
                            </button>
                        </div>
                    )}
                </form>
                {success ? <div className="text-primaryColor w-96 mt-4">Vielen Dank für Ihre Nachricht!</div> : ""}
            </div>
        </MainContainer>
    );
};

export default FormFull;
