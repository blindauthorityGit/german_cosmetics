import nodemailer from "nodemailer";
import handlebars from "handlebars";
const path = require("path");
const fs = require("fs");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_USER,
            pass: process.env.NEXT_PASSWORD,
        },
    });

    const filePath = path.join(__dirname, "../../../../components/form/html/template.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const replacements = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };
    const htmlToSend = template(replacements);

    if (!firstName) {
        try {
            const emailRes = await transporter.sendMail({
                from: email,
                to: "johabuch@gmail.com",
                subject: `Email von ${name}`,
                html: htmlToSend,
            });

            console.log("Message Sent", emailRes.messageId);
            res.status(200).json(req.body);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(403).json(req.body);
    }

    console.log(req.body, "HALLO");
};