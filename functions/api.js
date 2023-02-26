const express = require("express");
const serverless = require("serverless-http");
const mailchimp = '@mailchimp/mailchimp_marketing';

const app = express();
const router = express.Router();

router.get("/", async (req, res) => {

    mailchimp.setConfig({
        apiKey: '1773d850e9abfd81de003c2b15347599-us8',
        server: "us8",
    });

    // let message = "";

    // try {
    //     const response = await mailchimp.lists.addListMember('d12dde555f', {
    //         email_address: 'fadilamanosi@gmail.com',
    //         status: "subscribed",
    //         merge_fields: {
    //             FNAME: 'fadil'
    //         }
    //     });
    //     message = "subscrition was successfull"
    // } catch (error) {
    //     message = error.response.body.detail;
    // }

    res.json({
        message: mailchimp
    });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);