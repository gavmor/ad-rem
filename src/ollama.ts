import ollama from 'ollama';

// Example usage:
// const response = await ollama.chat({
//   model: 'llama3.1',
//   messages: [{ role: 'user', content: 'Why is the sky blue?' }],
// })
// console.log(response.message.content)

export async function infer(newEntry: Buffer, query: string, extantConclusion: string) {

    const content = `
Given the previous conclusion: "${extantConclusion}",
and the new entry: "${newEntry.toString()}",
answer the following query: "${query}".
`;

    const response = await ollama.chat({
        model: 'gemma3:27b-it-qat',
        messages: [{ role: 'user', content }],
    });

    console.log("Ollama response:", response.message.content);
    return response.message.content;
}