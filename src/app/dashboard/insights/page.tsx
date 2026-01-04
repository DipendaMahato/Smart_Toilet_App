import { InsightsGenerator } from "@/components/insights/insights-generator";

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold">AI Health Insights</h1>
        <p className="text-muted-foreground">
          Generate personalized health advice based on your data.
        </p>
      </div>
      <InsightsGenerator />
    </div>
  );
}
