// for sending a email
import { Validation } from "@/helpers/validationSchema";
import { ValidationSchema } from "@/interfaces/contact/validation.interface";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as yup from 'yup';



const validationSchema: yup.ObjectSchema<ValidationSchema> = Validation;

interface RequestBody {
    name: string;
    email: string;
    subject: string;
    messageBody?: string;
}


export async function POST(request: NextRequest) {
    if (request.method !== "POST") {
        return new Response(JSON.stringify({ name: "Method Not Allowed" }), {
            status: 405,
        });
    }

    const body: RequestBody = await request.json();
    const { name, email, subject, messageBody } = body;

    try {
        await validationSchema.validate({ name, email, subject, messageBody }, { abortEarly: false });

        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transport.sendMail({
            from: email,
            to: process.env.MAIL_TO,
            subject: subject,
            html: `
            <body style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #303030;color: #000000">
                <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #303030;width:100%" cellpadding="0" cellspacing="0">
                <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <div style="padding: 0px;background-color: transparent">
                        <div style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <div style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 0px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px;font-weight: 400;"><span>${name}</span></h1>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                            <p style="line-height: 140%;"><span style="line-height: 19.6px;">${email}</span></p>
                                        </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                <img align="center" border="0" src="https://media.graphassets.com/TWwjeyqWRfSNNwl33Wmv" alt="image" title="image"
                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;" width="480" />
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <h1 style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 24px; font-weight: 400;">
                                            <span style="line-height: 31.2px;">${subject}</span></h1>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style="padding: 0px;background-color: transparent">
                        <div style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <div style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #f8f8fc;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 10px solid #ffffff;border-left: 30px solid #ffffff;border-right: 30px solid #ffffff;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 60px 30px 20px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                            <p style="line-height: 140%;"><span style="line-height: 19.6px;">Hello,</span></p>
                                            <p style="line-height: 140%;"><span style="line-height: 19.6px;">My name is ${name}</span></p>
                                            <p style="line-height: 140%;">${messageBody}</p>
                                        </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style="padding: 0px;background-color: transparent">
                        <diV style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                            <div style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                                        <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="90%"
                                            style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #e2e2e2;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <tbody>
                                            <tr style="vertical-align: top">
                                                <td
                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <span>&#160;</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </diV>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </body>`,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully", status: 200 }), {
            status: 200
        })
    } catch (error) {
        return new Response(JSON.stringify({ message: `Error sending email ${error}`, status: 400 }), {
            status: 400
        })
    }
}