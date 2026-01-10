
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone } from 'lucide-react';

export default function DigestiveHealthPage() {
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
                <h1 className="text-3xl font-bold font-headline text-status-green">Digestive Health Checkup</h1>
                <p className="text-muted-foreground">Consult with our specialist for digestive health.</p>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '200ms'}}>
                <Card className="text-center p-6 border-status-green/50">
                    <CardContent className="flex flex-col items-center">
                         <div className="relative mb-4">
                            <Image
                                src="/Honorary Dr. V. ARULSELVAN.png"
                                alt="Honorary Dr. V. Arulselvan"
                                width={150}
                                height={150}
                                className="rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute bottom-0 right-2 bg-green-500 rounded-full w-5 h-5 border-2 border-card" title="Online"></div>
                         </div>
                        <h3 className="text-2xl font-bold font-headline">Honorary Dr. V. Arulselvan</h3>
                        <p className="text-status-green font-semibold">Gastroenterology Specialist</p>
                        <p className="text-sm text-muted-foreground mt-2">MS, M.Ch (Surgical Gastroenterology)</p>
                        <p className="text-sm text-muted-foreground">20+ Years of Experience</p>

                        <div className="mt-6 w-full space-y-3">
                            <Button className="w-full bg-status-green hover:bg-status-green/90">
                                <Calendar className="mr-2 h-4 w-4" />
                                Book an Appointment
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Phone className="mr-2 h-4 w-4" />
                                Contact Clinic
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{animationDelay: '300ms'}}>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">About Dr. V. Arulselvan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Dr. V. Arulselvan is a renowned gastroenterologist with over two decades of expertise in managing complex digestive disorders. He is a pioneer in advanced endoscopic procedures and is committed to providing evidence-based, patient-centric care. His research focuses on inflammatory bowel disease (IBD) and liver diseases, contributing significantly to the field.
                        </p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <Clock className="h-5 w-5 text-status-green"/>
                            <span>Monday, Wednesday, Friday: 11:00 AM - 6:00 PM</span>
                        </div>
                         <div className="flex items-center gap-4 text-muted-foreground">
                            <Clock className="h-5 w-5 text-status-green"/>
                            <span>Tuesday, Thursday (Procedures): By Appointment</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
