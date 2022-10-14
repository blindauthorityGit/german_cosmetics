import React, { useState, useEffect, useRef } from "react";
import MainContainer from "../../layout/mainContainer";
import { H2, H4 } from "../../utils/headlines";
import { DefaultButton } from "../../utils/buttons";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import myCustomLocale from "./locale";
import client from "../../../client";
import { PortableText } from "@portabletext/react";
import { IoMdTime, IoIosCall, IoMdMap, IoMdMail } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import Error from "../../form/error";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import { Wed, Thu, Fri, No } from "../../utils/days";

export default function CTAContent(props) {
    const [selectedDay, setSelectedDay] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [day, setDay] = useState(new Date().getDay());

    const dateRef = useRef();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function onSubmitForm(values) {
        console.log(values);
        setLoading(true);
        let config = {
            method: "post",
            // url: `http://localhost:3000/api/contactTermin`,
            url: `/api/contactTermin`,
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

    useEffect(() => {
        console.log(new Date().getDay());
    }, []);

    return (
        <MainContainer width={`w-100  font-europa gap-6`}>
            <div className="col-span-12 order-last lg:col-span-6 text-text">
                {/* <p className="text-white sm:w-1/2">{props.text}</p> */}
                <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-12 gap-6 pt-8 sm:pr-t-0">
                    <div className="col-span-12">
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
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register("name", { required: true })}
                            className="border py-4 px-4 w-full"
                            placeholder="Ihr Name"
                            id="name"
                            type="text"
                        />
                        {errors.name && <Error klasse="col-span-12">Bitte geben Sie Ihren vollen Namen an</Error>}
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Telefon
                        </label>
                        <input
                            {...register("phone", { required: true })}
                            className="border py-4 px-4 w-full"
                            placeholder="Ihre Telefonnummer"
                            id="phone"
                            type="phone"
                        />
                        {errors.phone && (
                            <Error klasse="block col-span-12">Bitte geben Sie Ihre Telefonnummer an</Error>
                        )}
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            className="border py-4 px-4 w-full"
                            placeholder="Ihre Email"
                            id="email"
                            type="email"
                        />
                        {errors.email && <Error klasse="block col-span-12">Bitte geben Sie Ihre Email an</Error>}
                    </div>
                    <div className="col-span-12">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Behandlung
                        </label>
                        <select
                            {...register("behandlung", { required: true })}
                            className="border py-4 px-4 w-full"
                            name="behandlung"
                            placeholder="Behandlung wählen"
                            id="behandlung"
                        >
                            <option value="Sprechstunde">Sprechstunde</option>

                            <optgroup label="Ästhethische Behandlungen">
                                <option value="Aesthetische Beratung">Ästhetische Beratung</option>
                                <option value="Botoxbehandlung">Botoxbehandlung, FullFace</option>
                                <option value="Hyaluronsäurebehandlung">Hyaluronsäurebehandlung</option>
                                <option value="Lipolyse-Injektion">Lipolyse-Injektion</option>
                                <option value="PRP-Arthrex Vampirelift">PRP-Arthrex Vampirelift</option>
                                <option value="PRP-Arthrex Vampirelift mit tiefenmedizinischem Microneedling">
                                    PRP-Arthrex Vampirelift mit tiefenmedizinischem Microneedling
                                </option>
                                <option value="Arthrex Vampirelift mit fraktioniertem Laser">
                                    Arthrex Vampirelift mit fraktioniertem Laser
                                </option>
                                <option value="Besenreiser-Schaumverödung">Besenreiser-Schaumverödung</option>
                                <option value="Blepharoplastik">Blepharoplastik (Oberlidstraffung)</option>
                            </optgroup>

                            <optgroup label="Laserbehandlungen">
                                <option value="Photofraktionierte Laserbehandlung">
                                    Photofraktionierte Laserbehandlung
                                </option>
                                <option value="Dauerhafte Haarentfernung">Dauerhafte Haarentfernung</option>
                                <option value="Co2 Laser">Co²-Laser</option>
                                <option value="Abstehende Hautveränderungen">Abstehende Hautveränderungen</option>
                                <option value="Tattoo-Entfernung">Tattoo-Entfernung</option>
                            </optgroup>

                            <optgroup label="Kosmetische Behandlungen">
                                <option value="Kosmetische Beratung">Kosmetische Beratung</option>
                                <option value="HydraFacial-Behandlungen">HydraFacial-Behandlungen</option>
                                <option value="Microneedling">Microneedling</option>
                                <option value="Neostrata Glycolsäurepeeling">Neostrata Glycolsäurepeeling</option>
                            </optgroup>
                            <option value="Sonstiges">Sonstiges</option>
                        </select>
                    </div>
                    <div className="col-span-12 sm:col-span-12">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Ihre Nachricht
                        </label>
                        <textarea
                            className="border py-4 px-4 w-full"
                            {...register("message", { required: true })}
                            type="text"
                            name="message"
                            placeholder="Ihre Nachricht"
                            id="message"
                        />
                    </div>
                    <div className="col-span-12">
                        {loading ? (
                            <div className="w-full flex justify-center">
                                <Rings
                                    height="80"
                                    width="80"
                                    color="#8b8163"
                                    radius="6"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel="rings-loading"
                                />
                            </div>
                        ) : success ? (
                            <div className="success text-primaryColor">
                                <p>Vielen Dank für Ihre Nachricht!</p>
                                <p>Wir melden uns in Kürze bei Ihnen.</p>
                            </div>
                        ) : (
                            <input
                                className="mt-8 clamp w-full cursor-pointer py-6  sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white"
                                type="submit"
                                value="abschicken"
                            />
                        )}
                        <p>
                            Termine sollten bitte nur in dringenden Fällen, spätestens jedoch 24h vor der Behandlung
                            abgesagt werden. Leider müssen wir Ihnen nicht rechtzeitig abgesagte Termine in Rechnung
                            stellen.
                        </p>
                    </div>
                </form>
            </div>
            <div className="col-span-12 lg:col-span-6 sm:pl-12">
                <H2 klasse="font-europa mb-12 hidden sm:block">Rufen Sie uns an!</H2>

                <div className="contactWrapper grid grid-cols-12 mt-12 clamp ">
                    <div className="col-span-12 sm:col-span-12">
                        <div className="wrapper flex items-center">
                            <div className="icon mr-8 text-primaryColor">
                                <IoIosCall />
                            </div>
                            <a href={`tel:${props.phone}`}> {props.phone}</a>
                        </div>

                        <div className="wrapper flex items-center mt-4">
                            <div className="icon mr-8 text-primaryColor">
                                <IoMdMail />
                            </div>
                            <a href={`mailto:${props.email}`}>{props.email}</a>
                        </div>
                        <div className="wrapper flex items-center mt-4">
                            <div className="icon mr-8 text-primaryColor">
                                <IoMdMap />
                            </div>
                            {props.strasse}
                            <br></br>
                            {props.ort}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <H4 klasse="text-text col-span-12 mb-8">Öffnungszeiten</H4>
                    <div className="wrapper flex oeffnung">
                        <div className="left mr-6 text-left clamp">
                            Mi
                            <br />
                            Do
                            <br />
                            Fr
                            <br />
                        </div>
                        <div className="right text-left">
                            <PortableText value={props.value}></PortableText>
                        </div>
                    </div>
                </div>

                <div className="top mt-16">
                    <p>
                        <strong className="font-bold"> Bitte beachten Sie:</strong>
                        <br></br>
                        <br></br>
                        <strong>Keine Behandlung ohne Sprechstunde!</strong>
                    </p>
                </div>
            </div>
        </MainContainer>
    );
}
