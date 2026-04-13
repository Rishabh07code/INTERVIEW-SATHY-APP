const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function test() {
    try {
        console.log("Listing models...");
        const models = await ai.models.list();
        console.log("Models object type:", typeof models);
        console.log("Models object keys:", Object.keys(models));
        console.log("Models full object:", JSON.stringify(models, null, 2));
    } catch (err) {
        console.error("Error listing models:", err);
    }
}

test();
