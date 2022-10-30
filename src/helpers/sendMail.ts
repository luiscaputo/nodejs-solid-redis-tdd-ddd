// import sgMail from '@sendgrid/mail';
import { AppError } from '~/shared/errors/appErrors';
import nodemailer from 'nodemailer';

type IEmailItems = {
  to: string;
  subject: string;
  text?: string;
  html: string;
};

class SendMail {
  async execute({ to, subject, html, text }: IEmailItems): Promise<any> {
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.nzooji.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `Sanzala - Eventos <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
        text,
      });
      return true;
    } catch (error: any) {
      throw new AppError(error.message, 500);
    }
  }
}

export { SendMail };
