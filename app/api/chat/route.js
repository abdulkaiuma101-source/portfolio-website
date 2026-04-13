import cvData from '../../../cv-data.json';
import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { messages } = await req.json();
    
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const systemPrompt = `You are a brutalist, concise, and highly professional AI representing Abdul Kaium. 
    Use the following CV context strictly to answer queries:
    ${JSON.stringify(cvData, null, 2)}
    
    Keep answers very brief, direct, and slightly system-like. No fluff.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: { systemInstruction: systemPrompt }
    });
    
    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
  }
}
