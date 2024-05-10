import nodemailer from 'nodemailer'

export async function SendMail(to, subject, text){
    let transport = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{
            user: "info@teamrabbil.com",
            pass:"~sR4[bhaC[Qs"
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let mailOption = {
        from:"Next JS News Portal<info@teamrabbil.com>",
        to:to,
        subject: subject,
        text:text
    }

    return await transport.sendMail(mailOption)
}