import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

async function startWebServer() {
    return new Promise((resolve, reject) => {
        const server: = app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
            resolve(server);
        })
    })
}