/*
 * File to send email to users for different purposes
 */

// Dependencies
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const ErrorResponse = require("./ErrorResponse");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const { options } = require("mongoose");
require("../model/User")
// Function to send email
const sendEmail = async (options, dataToSend) => {
  const oauth2_client = new OAuth2(
    process.env.client_id,
    process.env.client_secret,
    process.env.redirect_url
  );

  oauth2_client.setCredentials({
    refresh_token: process.env.refresh_token,
  });

  const access_token = oauth2_client.getAccessToken();

  // Get the path of the email template to send
  const templateToSendPath = path.join(
    __dirname,
    `../templates/${options.templateName}`
  );

  // Get the actual file template
  const source = fs.readFileSync(templateToSendPath, "utf-8").toString();

  // Compile the template
  const template = handlebars.compile(source);

  // html-to-send with dynamic data
  const htmlToSend = template(dataToSend);

  // // Create the transporter
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     type: "OAuth2",
  //     user: process.env.user,
  //     pass: process.env.pass,
  //     clientId: process.env.client_id,
  //     clientSecret: process.env.client_secret,
  //     refreshToken: process.env.refresh_token,
  //     accessToken: access_token,
  //   },
  // });

  // Message to send in email
  // const message = {
  //   from: process.env.user, 
  //   to: options.email,
    // subject: options.subject,
    // text:options.message,
    // html: htmlToSend,
  // };

  // Send the email
//   let info;
//   if (message.to) {
//     info = await transporter.sendMail(message);
//   }

//   console.log("Email Info - " + info);

//   try {
//     return info;
//   } catch (err) {
//     return next(new ErrorResponse("Email cannot be sent", 500));
//   }
// };
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.user,
    pass: process.env.pass
  }
});

var mailOptions = {
  from: process.env.user,
  to: options.email,
  subject: options.subject,
  text:options.message,
  html: htmlToSend,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
// export the function
module.exports = sendEmail;
