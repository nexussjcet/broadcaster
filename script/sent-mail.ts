import JsonData from "./certificates/out.json";
import { dataZod, type CertificateZod } from "./validation";
import { sentMail, simpleHTMLMail } from "@/source/mailer";
import { getMessages } from "./message";
// import fs from "fs";
// import { promisify } from "util";

// const readFileAsync = promisify(fs.readFile);

const json = dataZod.parse(JsonData);
const id = "fossday-24";
const imageFolder = `./script/certificates/${id}`;

console.log("Total JSON", json.length);

// biome-ignore lint/complexity/noForEach: <explanation>
json.forEach(async (data, i) => {
    const { name, email } = data;

    // const imageAttachment = await readFileAsync(imageFolder + `/${email}.png`, { encoding: 'base64' });
    const text = getMessages(data);
    const subject = "Asthra 9.0 - Certificate For Volunteering";

    sentMail({
        to: email,
        // text,
        subject,
        html: simpleHTMLMail({
            title: subject,
            body: `<p>${text.replaceAll("\n", "<br/>")}</p>`,
        }),

        // attachments: [{
        //     filename: `${email}.png`,
        //     content: imageAttachment,
        //     encoding: 'base64',
        //     cid: 'uniqueImageCID', // Referenced in the HTML template
        // }],
    })
        .then((e) => {
            // console.log(e)
            console.log(`${i}. Sent to ${email}, ✅`);
        })
        .catch((e) => {
            console.log(`error while ${email},`, e);
        });
});
