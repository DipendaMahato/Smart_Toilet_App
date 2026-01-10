
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone } from 'lucide-react';

export default function UrinaryHealthCheckupPage() {
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
                <h1 className="text-3xl font-bold font-headline text-secondary">Urinary Health Checkup</h1>
                <p className="text-muted-foreground">Consult with our specialist for urinary health.</p>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 animate-slide-up" style={{animationDelay: '200ms'}}>
                <Card className="text-center p-6 border-secondary/50">
                    <CardContent className="flex flex-col items-center">
                         <div className="relative mb-4">
                            <Image
                                src="/Dr.Suresh-Dhamodharan.png"
                                alt="Dr. Suresh Dhamodharan"
                                width={150}
                                height={150}
                                className="rounded-full object-cover border-4 border-secondary shadow-lg shadow-secondary/20"
                            />
                            <div className="absolute bottom-0 right-2 bg-green-500 rounded-full w-5 h-5 border-2 border-card" title="Online"></div>
                         </div>
                        <h3 className="text-2xl font-bold font-headline">Dr. Suresh Dhamodharan</h3>
                        <p className="text-secondary font-semibold">Consultant Urologist</p>
                        <p className="text-sm text-muted-foreground mt-2">MS, M.Ch (Urology)</p>
                        <p className="text-sm text-muted-foreground">15+ Years of Experience</p>

                        <div className="mt-6 w-full space-y-3">
                            <Button className="w-full bg-secondary hover:bg-secondary/90">
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
                        <CardTitle className="font-headline">About Dr. Suresh Dhamodharan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Dr. Suresh Dhamodharan is a distinguished urologist with extensive experience in diagnosing and treating a wide array of urinary tract conditions. He is an expert in minimally invasive surgical techniques and is dedicated to providing patient-centered care. Dr. Dhamodharan is a leader in the field of urological research and has published numerous papers on innovative treatment methods.
                        </p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <Clock className="h-5 w-5 text-secondary"/>
                            <span>Tuesday, Thursday, Saturday: 10:00 AM - 4:00 PM</span>
                        </div>
                         <div className="flex items-center gap-4 text-muted-foreground">
                            <Clock className="h-5 w-5 text-secondary"/>
                            <span>Wednesday, Friday (Surgery): By Appointment</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
