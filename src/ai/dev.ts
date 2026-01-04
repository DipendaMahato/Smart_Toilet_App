import { config } from 'dotenv';
config();

import '@/ai/flows/generate-health-insights.ts';
import '@/ai/flows/refine-insights-with-reasoning.ts';