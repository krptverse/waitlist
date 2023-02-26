const express = require("express");
const serverless = require("serverless-http");
const mailchimp = require('@mailchimp/mailchimp_marketing');


const app = express();
const router = express.Router();

router.get("/", async (req, res) => {


    // mailchimp.setConfig({
    //     apiKey: process.env.API_KEY,
    //     server: "us8",
    // });

    // var message = "";

    // try {
    //     await mailchimp.lists.addListMember(process.env.LIST_ID, {
    //         email_address: 'fadilaasasasasnosi@gmail.com',
    //         status: "subscribed",
    //         merge_fields: {
    //             FNAME: 'fadil'
    //         }
    //     });
    //     message = "subscrition was successfull"
    // } catch (error) {
    //     message = error;
    // }

    res.json({
        message: "Sdjhbuyjhk"
    });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);