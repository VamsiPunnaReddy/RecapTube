import "dotenv/config";
import { text } from "express";

export const summarizeModel = async (transcript: string): Promise<any> => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    try {
        async function run() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = `Create a short summary derived from a YouTube transcript, encapsulating the central ideas and arguments presented within.
            
            Transcript: ${transcript}`

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            return text;
        }
        const shortSummary = run();
        return shortSummary;
    } catch (error) {
        console.error(error);
    }
};