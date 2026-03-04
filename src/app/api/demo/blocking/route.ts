import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST() {
    console.log("KEY:", process.env.ANTHROPIC_API_KEY);
    const response = await generateText({
        model: anthropic('claude-haiku-4-5-20251001'),
        prompt: 'Write a vegetarian lasagna recipe for 4 people.',
    });

    return Response.json({ response });
};