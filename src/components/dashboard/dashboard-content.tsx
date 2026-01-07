
'use client';

import {
  Card,
} from '@/components/ui/card';
import {
  Activity,
  Heart,
  FlaskConical,
  BrainCircuit,
  RadioTower,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const subDashboards = [
  {
    title: 'Live Sensor Data',
    description: 'Real-time IoT sensor readings and device status.',
    icon: RadioTower,
    href: '/dashboard/live-sensor-data',
  },
  {
    title: 'AI Process Tracker',
    description: 'Visualize AI stages from data capture to insights.',
    icon: BrainCircuit,
    href: '/dashboard/ai-process-tracker',
  },
  {
    title: 'Urine & Stool Diagnostics',
    description: 'Analysis, classifications, and risk indicators.',
    icon: FlaskConical,
    href: '/dashboard/diagnostics',
  },
  {
    title: 'Health Vitals & Trends',
    description: 'Daily, weekly, and long-term trend graphs.',
    icon: Activity,
    href: '/dashboard/vitals-trends',
  },
  {
    title: 'Overall Health Status',
    description: 'AI-derived health scores and conclusions.',
    icon: Heart,
    href: '/dashboard/health-status',
  },
  {
    title: 'Clinical Care & Doctor Support',
    description: 'Doctor profiles, consultations, and facilities.',
    icon: Stethoscope,
    href: '/dashboard/clinical-care',
  },
];


export function DashboardContent() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div style={{ animationDelay: '200ms', animationFillMode: 'backwards' }} className="animate-slide-up">
        <h1 className="text-3xl font-headline font-bold">Health Command Center</h1>
        <p className="text-muted-foreground">
          Select a dashboard below to explore your health data in detail.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subDashboards.map((dashboard, index) => (
          <Link href={dashboard.href} key={dashboard.title} className="group" style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'backwards' }}>
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 animate-slide-up">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit">
                          <dashboard.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h2 className="font-headline text-xl font-semibold">{dashboard.title}</h2>
                        <p className="text-muted-foreground text-sm">{dashboard.description}</p>
                    </div>
                </div>
                 <div className="mt-6 flex items-center justify-end">
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
