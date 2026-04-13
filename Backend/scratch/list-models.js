const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function test() {
    try {
        console.log("Listing models...");
        const models = await ai.models.list(); // Check if list exists in this SDK
        console.log("Available models:", models.map(m => m.name));
    } catch (err) {
        console.error("Error listing models:", err);
    }
}

test();
