var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var import_mailchimp_marketing = __toESM(require("@mailchimp/mailchimp_marketing"));
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
router.get("/", async (req, res) => {
  import_mailchimp_marketing.default.setConfig({
    apiKey: "1773d850e9abfd81de003c2b15347599-us8",
    server: "us8"
  });
  let message = "";
  try {
    const response = await import_mailchimp_marketing.default.lists.addListMember("d12dde555f", {
      email_address: "fadilamanosi@gmail.com",
      status: "subscribed",
      merge_fields: {
        FNAME: "fadil"
      }
    });
    message = "subscrition was successfull";
  } catch (error) {
    message = error.response.body.detail;
  }
  res.json({
    message
  });
});
app.use("/.netlify/functions/api", router);
module.exports = app;
module.exports.handler = serverless(app);
