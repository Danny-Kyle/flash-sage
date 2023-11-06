import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
const app = express();

const PORT = 5000;

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: "my flashcard deck"
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck)
})

mongoose
.connect(
    'mongodb+srv://flashcardsage:1xJzw8N5rndkCvo6@cluster0.ovx6jdg.mongodb.net/test'
).then(()=>{
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
})


