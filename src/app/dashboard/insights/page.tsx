import { HealthReport } from "@/components/insights/health-report";

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold">Real-Time Health Insights</h1>
        <p className="text-muted-foreground">
          A comprehensive health snapshot from your latest session.
        </p>
      </div>
      <HealthReport />
    </div>
  );
}
