

const express = require("express");
const serverless = require("serverless-http");
const mailchimp = require('@mailchimp/mailchimp_marketing');
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/", async (req, res) => {


    mailchimp.setConfig({
        apiKey: process.env.API_KEY,
        server: "us21",
    });

    var message = "";
    var status = 200;
    try {
        await mailchimp.lists.addListMember(process.env.LIST_ID, {
            email_address: req.body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.name,
                LNAME: req.body.address,
            }
        });
        message = "subscription was successful"
    } catch (error) {
        message = error;
        status = 422
    }

    res.status(status).json({
        message: message
    });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);