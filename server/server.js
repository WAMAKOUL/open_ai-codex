import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json);

app.get('/', async(req,res) => {
    res.status(200).send(
        message: 'Hello from Codex'
    )
})