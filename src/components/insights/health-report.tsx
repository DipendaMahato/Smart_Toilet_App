'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Droplets, TestTube, Activity, ShieldCheck, Download, User, Clock, Bot, BarChart, FileText, Palette, FlaskConical } from 'lucide-react';
import { Badge } from '../ui/badge';

const ReportSection = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pl-12">
            {children}
        </CardContent>
    </Card>
);

const InfoPill = ({ label, value }: { label: string, value: string }) => (
    <div className="flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm">
        <span className="font-medium text-muted-foreground">{label}:</span>
        <span className="font-semibold">{value}</span>
    </div>
);


export function HealthReport() {
    const handleDownload = () => {
        // Placeholder for PDF download functionality
        alert('PDF download functionality is not yet implemented.');
    };

    return (
        <div className="space-y-8">
            <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold font-headline">Your latest health report is ready.</h2>
                        <p className="text-muted-foreground">
                            This is a secure, medical-grade document generated from your last toilet session.
                        </p>
                    </div>
                    <Button onClick={handleDownload} size="lg">
                        <Download className="mr-2" />
                        Download Report (PDF)
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <ReportSection title="Session & Device Details" icon={<User className="text-primary" />}>
                         <div className="flex flex-wrap gap-4">
                            <InfoPill label="User" value="Dipendra Mahato" />
                            <InfoPill label="Age/Gender" value="34 / Female" />
                            <InfoPill label="Date" value="2024-10-26" />
                            <InfoPill label="Time" value="08:15 AM" />
                            <InfoPill label="Duration" value="2m 35s" />
                            <InfoPill label="Report ID" value="SN-A8B4-C7D6" />
                        </div>
                    </ReportSection>

                     <ReportSection title="Urine Analysis" icon={<Droplets className="text-primary" />}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                            <p><strong>Color:</strong> Pale Yellow</p>
                            <p><strong>Transparency:</strong> Clear</p>
                            <p><strong>Est. Volume:</strong> 350ml</p>
                            <p><strong>Flow Rate:</strong> 15 ml/s</p>
                            <p><strong>Hydration:</strong> <Badge variant="secondary">Optimal</Badge></p>
                            <p><strong>pH Range:</strong> 6.8</p>
                            <p><strong>Protein:</strong> <Badge variant="destructive">Trace</Badge></p>
                            <p><strong>Glucose:</strong> <Badge>Normal</Badge></p>
                            <p><strong>Blood Trace:</strong> <Badge>None</Badge></p>
                            <p><strong>Ketones:</strong> <Badge>None</Badge></p>
                        </div>
                    </ReportSection>

                    <ReportSection title="Stool & Digestive Analysis" icon={<FlaskConical className="text-primary" />}>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                            <p><strong>Bristol Scale:</strong> Type 4</p>
                            <p><strong>Color:</strong> Brown</p>
                            <p><strong>Consistency:</strong> Smooth</p>
                            <p><strong>Texture:</strong> Normal</p>
                            <p><strong>Digestive Score:</strong> <Badge>8.5/10</Badge></p>
                            <p><strong>Fiber Intake:</strong> <Badge variant="secondary">Good</Badge></p>
                            <p><strong>Constipation Flag:</strong> <Badge>No</Badge></p>
                            <p><strong>Diarrhea Flag:</strong> <Badge>No</Badge></p>
                        </div>
                    </ReportSection>

                </div>

                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-3"><Bot /> AI Health Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="font-semibold">Overall Health Score: <span className="text-green-500">92/100</span></p>
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
                     <Card>
                        <CardHeader>
                           <CardTitle className="font-headline flex items-center gap-3"><ShieldCheck/> Privacy & Security</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2 text-muted-foreground">
                            <p className="flex items-center gap-2"><strong>Encryption:</strong> <Badge>Active (AES-256)</Badge></p>
                            <p><strong>Storage:</strong> Secure Cloud</p>
                            <p><strong>User Consent:</strong> Granted</p>
                            <p><strong>Doctor Sharing:</strong> <Badge variant="destructive">Disabled</Badge></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
