const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gx7mkcg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

module.exports = app => {

    const chats = client.db("SGE-BOT").collection("chats");

    app.get('/chat/:id', async(req, res)=>{
        const id = req.params?.id;
        const query = { id: id };
        const user = await chats.findOne(query)
        if(user){
            res.send(user)
        }else{
            res.send(false)
        }
    })
    app.get('/chats/:id', async(req, res)=>{
        const chat = req.body
        const id = req.params?.id;
        const query = { id: id };
        const user = await chats.findOne(query)
        if(user){
            res.send(true)
        }else{
            res.send(false)
        }
    })

    app.post('/chat', async(req, res)=>{
        const chat = req.body
        const result = await chats.insertOne(chat)
        res.send(result)
    })

    app.patch('/chats/:id',  async (req, res) => {

        const id = req.params?.id;
        const query = { id: id };
        const updateDoc = {
            $push: {
                messages:req?.body
            },
        };
        const result = await chats.updateOne(query, updateDoc);
        res.send(result);
      })
}