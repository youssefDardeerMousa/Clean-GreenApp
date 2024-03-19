import nodemailer from 'nodemailer'
export const sendEmail = async({to,subject,html, attachments})=>{
    // sender 
     const transporter=nodemailer.createTransport({
        host:'http://localhost:3000',
        port : 465,
        secure:true,
        service:'gmail',
        auth:{
            user:process.env.email,
            pass:process.env.password
        }
    })
    // receiver
const EmailInfo = await transporter.sendMail({
    from: `"Clean And Green" <${process.env.email}>`,
    to, 
    subject,  
    html,attachments
  });
  console.log(EmailInfo);
return EmailInfo.accepted.length<1?false:true
}

