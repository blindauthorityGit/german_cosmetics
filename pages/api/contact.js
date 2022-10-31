// import nodemailer from "nodemailer";
import handlebars from "handlebars";
const nodemailer = require("nodemailer");

// const path = require("path");
// const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_USER,
            pass: process.env.NEXT_GMAIL,
        },
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log("SAUBEDA", error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    // const filePath = path.join(__dirname, "../../../../components/form/html/template.html");
    // const source = fs.readFileSync(filePath, "utf-8").toString();
    // const template = handlebars.compile(source);
    // const replacements = {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     message: message,
    // };
    // const htmlToSend = template(replacements);

    await new Promise((resolve, reject) => {
        if (!firstName) {
            try {
                const emailRes = transporter.sendMail({
                    from: email,
                    // to: "contacts@german-cosmetics.de",
                    to: "johabuch@gmail.com",
                    subject: `Email von ${name}`,
                    html: `<p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Telefon:</strong> ${phone}</p> <p><strong>Nachricht:</strong> ${message}</p>`,
                });

                console.log("Message Sent", emailRes.messageId);
                res.status(200).json(req.body);
            } catch (err) {
                console.log("GEHT NET", err);
            }
        } else {
            res.status(403).json(req.body);
        }
    });

    console.log(req.body, "HALLO");
};
