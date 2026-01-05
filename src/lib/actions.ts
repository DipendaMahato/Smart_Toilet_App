'use server';

import { config } from 'dotenv';
config();

import { mockMedicalProfile, mockToiletSensorData } from '@/lib/data';
import { generateHealthInsights } from '@/ai/flows/generate-health-insights';
import { refineInsightsWithReasoning } from '@/ai/flows/refine-insights-with-reasoning';
import { sendOtp as sendOtpFlow, SendOtpInput } from '@/ai/flows/send-otp-flow';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';


const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getAiInsights() {
  await sleep(1500); // Simulate network latency

  try {
    const medicalProfileString = JSON.stringify(mockMedicalProfile, null, 2);
    const sensorDataString = JSON.stringify(mockToiletSensorData, null, 2);

    const initialResult = await generateHealthInsights({
      medicalProfileData: medicalProfileString,
      toiletSensorData: sensorDataString,
    });

    if (!initialResult.insights) {
      throw new Error("Initial insight generation failed.");
    }

    const finalResult = await refineInsightsWithReasoning({
      initialInsights: initialResult.insights,
      userProfile: medicalProfileString,
      healthData: sensorDataString,
    });
    
    return { 
      insights: finalResult.refinedInsights, 
      reasoning: initialResult.reasoning,
    };

  } catch (error) {
    console.error('Error generating AI insights:', error);
    return { error: 'Failed to generate insights. Please try again later.' };
  }
}

export async function sendOtp(input: SendOtpInput) {
    try {
        const result = await sendOtpFlow(input);
        return { otp: result.otp };
    } catch (error) {
        console.error('Error sending OTP:', error);
        return { error: 'Failed to send OTP. Please check the email address and try again.' };
    }
}

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function chatWithAi(history: { role: 'user' | 'model'; content: string }[], message: string) {
    try {
        const systemPrompt = `You are a friendly and knowledgeable AI health assistant for a smart toilet application. Your name is 'Aqua'.
- Answer questions about general health, diseases, and nutrition.
- Provide information about how to use the smart toilet and interpret its basic findings.
- If you are asked a question that is outside of your scope as a health assistant, politely decline to answer.
- Always remind the user that you are an AI assistant and not a medical professional, and that they should consult a doctor for any serious health concerns.
- Keep your answers concise and easy to understand.`;

        const messages: ChatCompletionMessageParam[] = [
            { role: 'system', content: systemPrompt },
            ...history.map(h => ({
                role: h.role === 'model' ? 'assistant' : 'user',
                content: h.content,
            })),
            { role: 'user', content: message },
        ];

        const completion = await openai.chat.completions.create({
            model: "deepseek/deepseek-r1-0528:free",
            messages: messages,
        });

        const response = completion.choices[0].message?.content;
        
        if (!response) {
            throw new Error('No response from AI model.');
        }

        return { response };
    } catch (error) {
        console.error('Error in AI chat:', error);
        return { error: 'Sorry, I encountered an error. Please try again.' };
    }
}
