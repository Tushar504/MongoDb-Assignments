const nodemailer=require("nodemailer")

module.exports= nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "75ae7810da3fd1", // generated ethereal user
      pass: "d2daa9b351566d", // generated ethereal password
    },
  });
  