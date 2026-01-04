"use client";

import { useState } from "react";
import { Bot, Zap } from "lucide-react";
import { getAiInsights } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "../ui/separator";

interface InsightResult {
  insights?: string;
  reasoning?: string;
  error?: string;
}

export function InsightsGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InsightResult | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    const response = await getAiInsights();
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-primary/10 border-primary/20">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold font-headline">Ready for your health check-in?</h2>
            <p className="text-muted-foreground">
              Click the button to process your latest medical and sensor data for new personalized insights.
            </p>
          </div>
          <Button onClick={handleGenerate} loading={loading} size="lg">
            <Zap className="mr-2" />
            Generate My Insights
          </Button>
        </CardContent>
      </Card>

      {loading && (
        <div className="space-y-4">
            <div className="flex items-center justify-center text-muted-foreground gap-2">
                <Bot className="animate-pulse" />
                <p>Our AI is analyzing your data... this may take a moment.</p>
            </div>
        </div>
      )}

      {result?.error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.error}</AlertDescription>
        </Alert>
      )}

      {result?.insights && (
        <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Bot /> Refined Health Insights</CardTitle>
                <CardDescription>Actionable advice tailored for you.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: result.insights.replace(/\n/g, '<br />') }} />
              </CardContent>
            </Card>
            <Card className="md:col-span-2 bg-muted/50">
              <CardHeader>
                <CardTitle className="font-headline text-base">AI's Reasoning</CardTitle>
                <CardDescription>How the AI reached its conclusions.</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="prose prose-xs dark:prose-invert max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: result.reasoning?.replace(/\n/g, '<br />') || 'No reasoning provided.' }} />
              </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
