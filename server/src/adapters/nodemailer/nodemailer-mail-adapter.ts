import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ac78bad5bbca8d",
        pass: "3f6f3cef37516a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <teste@projeto.com.br>',
            to: 'Thiago Monreal <thiago.monreal@aluno.ifsp.edu.br>',
            subject,
            html: body,
        });
    }
}