import dotenv from "dotenv";
const SibApiV3Sdk = require("sib-api-v3-typescript");

dotenv.config();

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = "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"
export const mail = async ({
  email,
  sub,
  body,
}: {
  email: string;
  sub: string;
  body: string;
}) => {
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = sub;
  sendSmtpEmail.htmlContent = body;
  sendSmtpEmail.sender = {
    name: "GIMS Pvt Ltd",
    email: "gimsorg2021@gmail.com",
  };
  sendSmtpEmail.to = [{ email: email }];

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: any) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error: any) {
      console.error(error);
    }
  );
};