const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function test() {
    try {
        const models = await ai.models.list();
        // The structure seems to be models.data or similar since it's an object
        // Based on the output, it's an object with multiple properties
        for (const key of Object.keys(models)) {
            if (Array.isArray(models[key])) {
                console.log(`Found array in key '${key}':`);
                models[key].forEach(m => console.log(` - ${m.name || m.id || 'N/A'}`));
            }
        }
    } catch (err) {
        console.error("Error listing models:", err);
    }
}

test();
