import { Router } from "express"
import Messages from "./messagesSchema.js";


const router = Router()

//api routes
router.get("/", (req, res) => res.status(200).send("hello world"));

router.post('/message/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
}) 

router.get('/message/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})


export default router