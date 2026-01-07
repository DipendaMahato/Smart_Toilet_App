
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Droplets, Activity, ShieldCheck, Download, User, Clock, Bot, BarChart, FileText, Palette, FlaskConical } from 'lucide-react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

const ReportSection = ({ title, icon, children, className }: { title: string, icon: React.ReactNode, children: React.ReactNode, className?: string }) => (
    <Card className={cn("shadow-sm", className)}>
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-xl">
                {icon}
            </div>
            <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
    </Card>
);

const InfoPill = ({ label, value }: { label: string, value: string }) => (
    <div className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-sm">
        <span className="font-medium text-muted-foreground">{label}:</span>
        <span className="font-semibold">{value}</span>
    </div>
);

const StatusBadge = ({ variant = 'default', children }: { variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'green' | 'yellow' | 'orange' | 'red', children: React.ReactNode}) => {
    const variantClasses = {
        default: 'bg-primary/10 text-primary-foreground border-primary/20',
        secondary: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
        destructive: 'bg-status-red/10 text-status-red border-status-red/20',
        green: 'bg-status-green/10 text-status-green border-status-green/20',
        yellow: 'bg-status-yellow/10 text-status-yellow border-status-yellow/20',
        orange: 'bg-status-orange/10 text-status-orange border-status-orange/20',
        red: 'bg-status-red/10 text-status-red border-status-red/20',
        outline: 'text-foreground',
    };
    return <Badge className={cn('font-semibold', variantClasses[variant])}>{children}</Badge>
}

export function HealthReport() {
    const handleDownload = () => {
        alert('PDF download functionality is not yet implemented.');
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-to-br from-primary/90 to-secondary/90 text-primary-foreground shadow-lg animate-slide-up" style={{animationDelay: '200ms'}}>
                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold font-headline">Your latest health report is ready.</h2>
                        <p className="opacity-80">
                            This is a secure, medical-grade document generated from your last toilet session.
                        </p>
                    </div>
                    <Button onClick={handleDownload} size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white rounded-xl">
                        <Download className="mr-2" />
                        Download Report (PDF)
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <ReportSection title="Session & Device Details" icon={<User />} className="animate-slide-up" style={{animationDelay: '300ms'}}>
                         <div className="flex flex-wrap gap-4">
                            <InfoPill label="User" value="Dipendra Mahato" />
                            <InfoPill label="Age/Gender" value="34 / Female" />
                            <InfoPill label="Date" value="2024-10-26" />
                            <InfoPill label="Time" value="08:15 AM" />
                            <InfoPill label="Duration" value="2m 35s" />
                            <InfoPill label="Report ID" value="SN-A8B4-C7D6" />
                        </div>
                    </ReportSection>

                     <ReportSection title="Urine Analysis" icon={<Droplets />} className="animate-slide-up" style={{animationDelay: '400ms'}}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                            <p><strong>Color:</strong> Pale Yellow</p>
                            <p><strong>Transparency:</strong> Clear</p>
                            <p><strong>Est. Volume:</strong> 350ml</p>
                            <p><strong>Flow Rate:</strong> 15 ml/s</p>
                            <div className="flex items-center gap-2"><strong>Hydration:</strong> <StatusBadge variant="green">Optimal</StatusBadge></div>
                            <p><strong>pH Range:</strong> 6.8</p>
                            <div className="flex items-center gap-2"><strong>Protein:</strong> <StatusBadge variant="yellow">Trace</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Glucose:</strong> <StatusBadge variant="green">Normal</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Blood Trace:</strong> <StatusBadge variant="green">None</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Ketones:</strong> <StatusBadge variant="green">None</StatusBadge></div>
                        </div>
                    </ReportSection>

                    <ReportSection title="Stool & Digestive Analysis" icon={<FlaskConical />} className="animate-slide-up" style={{animationDelay: '500ms'}}>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                            <p><strong>Bristol Scale:</strong> Type 4</p>
                            <p><strong>Color:</strong> Brown</p>
                            <p><strong>Consistency:</strong> Smooth</p>
                            <p><strong>Texture:</strong> Normal</p>
                            <div className="flex items-center gap-2"><strong>Digestive Score:</strong> <StatusBadge variant="green">8.5/10</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Fiber Intake:</strong> <StatusBadge variant="green">Good</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Constipation Flag:</strong> <StatusBadge variant="green">No</StatusBadge></div>
                            <div className="flex items-center gap-2"><strong>Diarrhea Flag:</strong> <StatusBadge variant="green">No</StatusBadge></div>
                        </div>
                    </ReportSection>

                </div>

                <div className="lg:col-span-1 space-y-6">
                    <Card className="shadow-sm animate-slide-up" style={{animationDelay: '600ms'}}>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-lg text-primary"><Bot /></div> AI Health Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="font-semibold">Overall Health Score: <span className="text-status-green">92/100</span></p>
                                <p className="text-xs text-muted-foreground">AI Confidence: 95% (Screening Insight)</p>
                            </div>
                            <Separator />
                            <p className="text-sm">Your results indicate a good overall health status. Hydration is optimal and digestive markers are normal. A trace amount of protein was detected in urine, which is generally not a concern but should be monitored. Consider reducing high-protein foods slightly before your next session to see if it normalizes.</p>
                             <div className="space-y-2">
                                <h4 className="font-semibold text-sm">Recommendations:</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    <li>Maintain current hydration levels.</li>
                                    <li>Monitor protein intake.</li>
                                    <li>Continue with your balanced diet.</li>
                                    <li>No immediate doctor consultation needed.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                     <Card className="shadow-sm animate-slide-up" style={{animationDelay: '700ms'}}>
                        <CardHeader>
                           <CardTitle className="font-headline flex items-center gap-3"><div className="p-2 bg-secondary/10 rounded-lg text-secondary"><ShieldCheck/></div> Privacy & Security</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-3 text-muted-foreground">
                            <div className="flex items-center gap-2"><strong>Encryption:</strong> <StatusBadge variant="green">Active (AES-256)</StatusBadge></div>
                            <p><strong>Storage:</strong> Secure Cloud</p>
                            <p><strong>User Consent:</strong> Granted</p>
                            <div className="flex items-center gap-2"><strong>Doctor Sharing:</strong> <StatusBadge variant="red">Disabled</StatusBadge></div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
