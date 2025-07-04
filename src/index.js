import express from 'express';
import 'dotenv/config';
import chat from '../routes/chat/chat.js';
import cors from 'cors';
import loaders from '../routes/loaders/loaders.js';


const app = express();
app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));
app.use('/loaders', loaders.router);
app.use('/ai', chat.router);
app.get('/', (req, res) => {
    res.send("Welcome to the Chatbot Builder API! This is a simple chatbot builder application.");
});
app.listen(5080, '0.0.0.0', () => {
  console.log("Server running on port 5080 new setup 1");
});