import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from 'cors';

const app=express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1337331",
    key: "ae27e796ae6ab57741fd",
    secret: "b0cd61936f24ace3f682",
    cluster: "eu",
    useTLS: true
  });

const db=mongoose.connection
 
app.use(express.json());
app.use(cors());

const connection_url="mongodb+srv://admin:r9piVZFHUsQWGNo2@cluster0.rdkor.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url);
db.once('open',()=>{
    console.log("DB Connected");

    const msgCollection=db.collection("messagecontents");
    const changeStream=msgCollection.watch();

    changeStream.on("change",(change)=>{
        console.log("A change occured",change);
        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received
            });
        }
        else{
            console.log("Error triggering Pusher");
        }
    });
});

app.get("/",(req,res)=>res.status(200).send("hello world"));

app.get("/messages/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})


app.listen(port,()=>console.log('Running at port '+port));