const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const GEMINI_MODEL = "models/gemini-2.0-flash-lite";

async function test() {
    try {
        console.log(`Testing content generation with model: ${GEMINI_MODEL}`);
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: "Hello, this is a test and reply with 'Success'."
        });
        console.log("Response text:", response.text());
        console.log("SUCCESS");
    } catch (err) {
        console.error("TEST FAILED:", err);
    }
}

test();
