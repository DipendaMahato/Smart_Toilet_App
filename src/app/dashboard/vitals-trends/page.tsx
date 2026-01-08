'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HydrationTrendChart } from '@/components/charts/trends/hydration-trend-chart';
import { UrinePhTrendChart } from '@/components/charts/trends/urine-ph-trend-chart';
import { UrineBiomarkerTrendChart } from '@/components/charts/trends/urine-biomarker-trend-chart';
import { StoolConsistencyTrendChart } from '@/components/charts/trends/stool-consistency-trend-chart';

const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="bg-white/5 border border-teal-500/20 shadow-lg shadow-teal-500/5">
    <CardHeader>
      <CardTitle className="text-gray-300 font-semibold text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export default function VitalsTrendsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-slide-up">
        <div>
          <h1 className="text-3xl font-headline font-bold">Health Vitals &amp; Trends</h1>
          <p className="text-muted-foreground">
            Analytical views of health vitals with daily, weekly, and long-term trend graphs.
          </p>
        </div>
        <Tabs defaultValue="daily" className="w-full md:w-auto">
          <TabsList className="grid grid-cols-3 w-full md:w-auto bg-card border border-input">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <ChartCard title="Hydration Trend">
          <HydrationTrendChart />
        </ChartCard>
        <ChartCard title="Urine pH Trend">
          <UrinePhTrendChart />
        </ChartCard>
        <ChartCard title="Urine Biomarker Trend">
          <UrineBiomarkerTrendChart />
        </ChartCard>
        <ChartCard title="Stool Consistency Trend">
          <StoolConsistencyTrendChart />
        </ChartCard>
      </div>
    </div>
  );
}
