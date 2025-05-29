import { createToken } from "../lib/encryption";
import { dataZod, type CertificateZod } from "./validation";

// export const getMessages = (data:CertificateZod[0] ) => {
//     const { name, checked, feedback } = data
//     return `Hello  ${name}!

// ${!checked ? "Looks like you registered the FOSSDAY event and didn't scanned the tickets at venue. \n\nPlease fill this form before 19th for generating your digital certificate."
//            :  !feedback ? "We are waiting for your feedback on the event. Please fill this form before 19th for generating your digital certificate."
//                         : "" }

// Registration Status: ✅
// Checked In: ${checked ? "✅" : "❌"}
// Feedback Status: ${feedback ? "✅" : "❌"}
// Qualification status for certificate: ${checked && feedback ? "✅" : "❌"}

// Link: https://nexus.sjcetpalai.ac.in/fossday/feedback/final

// > Please feel free to reach out to us if you have any queries.`
// }

export const getMessages = (data: CertificateZod[0]) => {
    const { name, email, type } = data;

    const token = createToken({
        id: "asthra-9",
        email: email,
        type: "certificate",
        options: {
            type: "volunteer",
            position: type,
        },
    });

    // const tokenCertify = `https://certify.sjcet.in/${token}`

    const image = `https://res.cloudinary.com/de3q8zas9/image/upload/co_rgb:000000,l_text:roboto_140_bold_normal_left:${encodeURIComponent(name)}/fl_layer_apply,y_300/co_rgb:000000,l_text:arial_80_bold_normal_left:${encodeURIComponent(type)}/fl_layer_apply,y_580/volenteering.png`;
    const url = `https://asthra.sjcetpalai.ac.in/api/qr/with-image?scale=3&url=${encodeURIComponent(image)}&qr=${encodeURIComponent(token)}`;

    return `Hello ${name}!,

Greetings!
Thank you for volunteering at Asthra 9.0, the National Level Technical Fest of SJCET Palai. We are grateful for your support and dedication.

Here is your volunteering certificate for the event Asthra 9.0 at SJCET Palai.

<a href="${url}">Click to View</a>

If you have any queries, please feel free to reach out to us.

Team Asthra, 
SJCET Palai` as const;
};
export const getMessages2 = (data: CertificateZod[0]) => {
    const { name, email, type } = data;

    const token = createToken({
        id: "asthra-9",
        email: email,
        type: "certificate",
        options: {
            type: "participant",
            position: type,
        },
    });

    // const tokenCertify = `https://certify.sjcet.in/${token}`

    const image = `https://res.cloudinary.com/de3q8zas9/image/upload/co_rgb:000000,l_text:roboto_140_bold_normal_left:${encodeURIComponent(name)}/fl_layer_apply,y_280/co_rgb:000000,l_text:arial_80_bold_normal_left:${encodeURIComponent(type)}/fl_layer_apply,y_540/participation.png`;
    const url = `https://asthra.sjcetpalai.ac.in/api/qr/with-image?scale=3&url=${encodeURIComponent(image)}&qr=${encodeURIComponent(token)}`;

    return `Sir/Ma'am,

Greetings!
Thank you for participating in the 'Inventra' from Asthra 9.0, the National Level Technical Fest of SJCET Palai. We are grateful for your support and dedication.

Here is your certificate for the event Asthra 9.0 at SJCET Palai.

<a href="${url}">Click to View</a>

If you have any queries, please feel free to reach out to us.

Team Asthra, 
SJCET Palai` as const;
};
