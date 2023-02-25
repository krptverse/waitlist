
import mailchimp from '@mailchimp/mailchimp_marketing';

export default defineEventHandler(async (event) => {


    const config = useRuntimeConfig();
    const { email, name } = await readBody(event);

    mailchimp.setConfig({
        apiKey: config.apiKey,
        server: "us8",
    });
    
    let message = "";

    try {
        const response = await mailchimp.lists.addListMember(config.listId, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: name
            }
        });
        message = "subscrition was successfull"
    } catch (error) {
        message = error.response.body.detail;
    }


    return {
        message: message
    }
});
