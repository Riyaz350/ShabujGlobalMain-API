const dialogflow = require('dialogflow');
const chatbot = require('../chatbot/chatbot')


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