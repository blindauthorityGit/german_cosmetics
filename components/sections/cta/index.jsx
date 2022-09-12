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
import { Mon, Tue, Wed, Thu, Fri } from "../../utils/days";

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
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contactTermin`,
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
            <div className="col-span-12 sm:col-span-6 text-text">
                <H2 klasse="font-europa mb-12 hidden sm:block">Wählen Sie Ihren Wunschtermin</H2>
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
                            <option value="Kontrolle">Kontrolle</option>
                            <option value="Hautkrebsvorsorge">Hautkrebsvorsorge</option>
                            <option value="med. Lidstraffung">med. Lidstraffung</option>

                            <optgroup label="med. Lasertherapie">
                                <option value="Rosazea/Gefäße/Blutschwämmchen">Rosazea/Gefäße/Blutschwämmchen</option>
                                <option value="Pigmente/Hyperpigmentierungen">Pigmente/Hyperpigmentierungen</option>
                                <option value="krankh. Haarwuchs">krankh. Haarwuchs</option>
                                <option value="Hautveränderungen (Warzen etc.)">Hautveränderungen (Warzen etc.)</option>
                                <option value="Venen/Besenreisser">Venen/Besenreisser</option>
                                <option value="Narben">Narben</option>
                                <option value="heller Hautkrebs">heller Hautkrebs</option>
                            </optgroup>
                            <option value="Venenverödung">Venenverödung</option>
                            <option value="med. Botox">med. Botox</option>
                            <option value="Blutentnahme">Blutentnahme</option>
                            <option value="PRP-Eigenbluttherapie">PRP-Eigenbluttherapie</option>
                            <option value="Fadenzug">Fadenzug</option>
                            <option value="Verbandwechsel/Wundversorgung">Verbandwechsel/Wundversorgung</option>
                            <option value="Operationen v. Tumoren">Operationen v. Tumoren</option>
                            <option value="med. Infusion">med. Infusion</option>
                            <option value="Sonstiges">Sonstiges</option>
                        </select>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Datum wählen
                        </label>

                        {/* <DatePicker
                            {...register("date", { required: true })}
                            value={selectedDay}
                            onChange={setSelectedDay}
                            locale={myCustomLocale}
                            inputPlaceholder="Datum wählen"
                            inputClassName="dateInput font-europa w-full cursor-pointer"
                            shouldHighlightWeekends
                        /> */}
                        <input
                            className="border py-4 px-4 w-full"
                            value={date}
                            {...register("date", { required: true })}
                            type="date"
                            onChange={(e) => {
                                setDate(e.target.value);
                                console.log(Date.parse(e.target.value));
                                console.log(new Date(e.target.value).getDay());
                                setDay(new Date(e.target.value).getDay());
                            }}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Uhrzeit wählen
                        </label>
                        <select
                            {...register("time", { required: true })}
                            className="border py-4 px-4 w-full"
                            name="uhrzeit"
                            placeholder="Uhrzeit wählen"
                            id="uhrzeit"
                        >
                            {/* <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option> */}
                            {day === 1 && Mon()}
                            {day === 2 && Tue()}
                            {day === 3 && Wed()}
                            {day === 4 && Thu()}
                            {day === 5 && Fri()}
                        </select>
                    </div>
                    <div className="col-span-12">
                        {loading ? (
                            <div className="w-full flex justify-center">
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
                        ) : success ? (
                            <div className="success text-primaryColor">
                                <p>Vielen Dank für Ihre Nachricht!</p>
                                <p>
                                    Wir bestätigen In Kürze Ihren Terminwunsch oder schlagen Ihnen einen freien Termin
                                    vor.
                                </p>
                            </div>
                        ) : (
                            <input
                                className="mt-8 clamp w-full cursor-pointer py-6  sm:mb-0 hover:bg-darkPurple bg-primaryColor hover:text-white  text-white"
                                type="submit"
                                value="abschicken"
                            />
                        )}
                    </div>
                </form>
            </div>
            <div className="col-span-12 sm:col-span-6 sm:pl-12">
                <div className="top">
                    <p>
                        <strong className="font-bold"> Bitte beachten Sie:</strong>
                        <br></br>
                        <br></br>
                        Termine sollten bitte nur in dringenden Fällen, spätestens jedoch 24h vor der Behandlung
                        abgesagt werden. Leider müssen wir Ihnen nicht rechtzeitig abgesagte Termine in Rechnung
                        stellen.
                    </p>
                </div>

                <div className="contactWrapper grid grid-cols-12 mt-12 clamp ">
                    <H4 klasse="text-text col-span-12 mb-8">Kontakt</H4>

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
                    {/* <div className="col-span-12 sm:col-span-6 mt-4 sm:mt-0">
                        <div className="wrapper flex items-center">
                            <div className="icon mr-8 text-primaryColor">
                                <IoMdMap />
                            </div>
                            {props.strasse}
                            <br></br>
                            {props.ort}
                        </div>
                    </div> */}
                </div>

                <div className="mt-12">
                    <H4 klasse="text-text col-span-12 mb-8">Öffnungszeiten</H4>
                    <div className="wrapper flex oeffnung">
                        <div className="left mr-6 text-left clamp">
                            Mo
                            <br />
                            Di
                            <br />
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
            </div>
        </MainContainer>
    );
}
