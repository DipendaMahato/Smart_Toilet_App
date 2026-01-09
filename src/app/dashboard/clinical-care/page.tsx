'use client';
import Image from 'next/image';

export default function ClinicalCarePage() {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="animate-slide-up">
            <h1 className="text-3xl font-headline font-bold">Clinical Care & Hospital Services</h1>
            <p className="text-muted-foreground">
                This section is currently under construction.
            </p>
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Image 
                src="https://storage.googleapis.com/aif-us-public-images/app-client-prod/image-generation/c5717ce0-4824-42b7-a065-27a988d447d9.png" 
                alt="Hospital Building"
                width={1200}
                height={600}
                className="rounded-2xl object-cover w-full h-auto"
                data-ai-hint="hospital building"
            />
        </div>
    </div>
  );
}
