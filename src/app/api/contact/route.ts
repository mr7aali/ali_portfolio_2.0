import { mailOption } from './../../../utils/nodemailer';
import { transporter } from "@/utils/nodemailer";

export async function GET(request: Request) {
    return Response.json({ ali: "a;i" })
}
export async function POST(request: Request) {


    try {
        // const data = request.json();

     const data =   await transporter.sendMail({
            ...mailOption,
            subject: "This is subject",
            text: "This is test string",
            html: "<h1>Test title</h1><p>Some body text</p>"
        })
        return Response.json(data)
    } catch (err) {
        console.log(err);
        return Response.json(err)
    }





}