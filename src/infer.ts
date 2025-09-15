import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function infer(newEntry: Buffer, query: string, extantConclusion: string) {
    const prompt = `
Given the previous conclusion: "${extantConclusion}",
and the new entry: "${newEntry.toString()}",
answer the following query: "${query}".
`;

    return (await model.generateContent(prompt)).response.text();
}
