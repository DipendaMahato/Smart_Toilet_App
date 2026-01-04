
// @ts-nocheck
'use server';

import { generateHealthInsights } from '@/ai/flows/generate-health-insights';
import { refineInsightsWithReasoning } from '@/ai/flows/refine-insights-with-reasoning';
import { sendOtp } from '@/ai/flows/send-otp-flow';
import { mockMedicalProfile, mockToiletSensorData } from '@/lib/data';
import { z } from 'zod';

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

export async function sendOtpAction(email: string) {
  try {
    const result = await sendOtp({ email });
    if (result.success) {
      // In a real app, you'd save the OTP to a database with an expiry
      // For this prototype, we'll return it to the client to simulate verification
      return { success: true, otp: result.otp };
    }
    return { success: false, error: "Failed to send OTP. Please try again." };
  } catch (error) {
    console.error('Error in sendOtpAction:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
