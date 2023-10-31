import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASS;

console.log(email,pass);
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass
    }
});


export const mailOption={
    from:email,
    to:email
};