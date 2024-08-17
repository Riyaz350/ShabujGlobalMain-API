const dialogflow = require('dialogflow');
const config = require('../config/keys');
const { response } = require('express');
const chatbot = require('../chatbot/chatbot')
const credentials = {
    client_email: config.googleClientEmail,
    privateKey: config.googlePrivateKey
}
const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
// const sessionPath = sessionClient.sessionPath(projectId, sessionId);



module.exports = app => {

    app.get('/', (req, res) => {
        res.send({'hello': 'Johnny'})
    });

    app.post('/text_query', async (req, res) => {

        // console.log(req)
        const {text, userId} = req.body
        const resultQuery = await chatbot.textQuery(text, userId)
        // console.log(resultQuery)
        res.send(resultQuery)
    });

    app.post('/api/df_event_query', (req, res) => {
        res.send({'do': 'event query'})
    });
}