require('dotenv').config()
const nodemailer=require('nodemailer');
const DadosEmail={
    email_clinent:"",
    nome:"",
    ideia:""
}
let transporter=nodemailer.createTransport({
    host: "gmail",
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.SENHA }});
const sendTestEmail=(DadosEmail)=>{
transporter.sendMail({
    from:process.env.EMAIL,
    to:process.env.EMAIL,
    subject:`Novo Email de:${DadosEmail.email_clinent}`,
    text:``,
    html:`<h2>${DadosEmail.nome}</h2>   
      <p>${DadosEmail.ideia}</p>`
}).then(msg=>{
console.log(msg)
}).catch(err=>{
    console.log(`erro ao enviar`+err)
})
}
module.exports = { sendTestEmail };