'use server';
/**
 * @fileOverview A flow for generating a One-Time Password (OTP).
 *
 * - generateOtp - A function that generates a 6-digit OTP.
 * - GenerateOtpOutput - The return type for the generateOtp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateOtpOutputSchema = z.object({
  otp: z.string().length(6).describe('The 6-digit OTP.'),
});
export type GenerateOtpOutput = z.infer<typeof GenerateOtpOutputSchema>;

export async function generateOtp(): Promise<GenerateOtpOutput> {
  return generateOtpFlow();
}

const generateOtpFlow = ai.defineFlow(
  {
    name: 'generateOtpFlow',
    outputSchema: GenerateOtpOutputSchema,
  },
  async () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return { otp };
  }
);
