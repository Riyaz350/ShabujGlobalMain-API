const dialogflow = require('dialogflow');
const config = require('../config/keys');
const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}


const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
module.exports ={
textQuery : async(userText, userId)=>{
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
    const request = {
        session : sessionPath,
        queryInput: {
            text:{
                text:userText,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        }
    }

    try{
        const responses = await sessionClient.detectIntent(request)
        // console.log(responses)
        return responses[0].queryResult
    }catch(err){
        // console.log(err)
        return err
    }
}

}