
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function EmergencyCarePage() {
  return (
    <div className="space-y-8 animate-fade-in">
        <header className="flex items-center gap-4 animate-slide-up">
            <Image 
                src="/hospital_logo.png" 
                alt="Hospital Logo" 
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
            />
            <div>
                <h1 className="text-3xl font-bold font-headline text-status-red">Emergency Care</h1>
                <p className="text-muted-foreground">Immediate access to our emergency medical team.</p>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '200ms'}}>
                <Card className="text-center p-6 border-status-red/50">
                    <CardContent className="flex flex-col items-center">
                         <div className="relative mb-4">
                            <Image
                                src="/Dr. N. MANJUNATHAN.png"
                                alt="Dr. N. Manjunathan"
                                width={150}
                                height={150}
                                className="rounded-full object-cover border-4 border-white shadow-lg shadow-status-red/20"
                            />
                         </div>
                        <h3 className="text-2xl font-bold font-headline">Dr. N. Manjunathan</h3>
                        <p className="text-status-red font-semibold">Chief Emergency Medical Officer</p>
                        <p className="text-sm text-muted-foreground mt-2">MD, DNB (Emergency Medicine)</p>
                        <p className="text-sm text-muted-foreground">25+ Years in Critical Care</p>

                        <div className="mt-6 w-full space-y-3">
                            <Button className="w-full bg-status-red hover:bg-status-red/90">
                                <Phone className="mr-2 h-4 w-4" />
                                Call Emergency Line
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{animationDelay: '300ms'}}>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Emergency Services</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                           Dr. N. Manjunathan leads a dedicated team of emergency physicians, nurses, and support staff, available 24/7. Our state-of-the-art emergency department is equipped to handle all medical emergencies, from minor injuries to life-threatening conditions, ensuring rapid diagnosis and treatment.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <Badge variant="destructive">24/7 Trauma Care</Badge>
                           <Badge variant="destructive">Cardiac Emergency Unit</Badge>
                           <Badge variant="destructive">Stroke Ready</Badge>
                           <Badge variant="destructive">Ambulance Service</Badge>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="bg-status-red/10 border-status-red/30">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><AlertTriangle className="text-status-red" /> In Case of Emergency</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       <p className="text-muted-foreground">
                           If you are experiencing a medical emergency, please call our emergency line immediately or visit the nearest hospital. Do not rely on email or app messages for urgent medical needs.
                       </p>
                       <p className="text-center text-2xl font-bold text-status-red tracking-wider">
                           EMERGENCY: +91 123 456 7890
                       </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
