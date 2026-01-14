
'use client';
import { SettingsTabs } from '@/components/settings/settings-tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="animate-slide-up">
        <h1 className="text-3xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-text-gradient bg-400">App Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and application preferences.
        </p>
      </div>
      <SettingsTabs />
    </div>
  );
}
