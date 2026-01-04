import { ProfileForm } from "@/components/profile/profile-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-headline font-bold">Medical Profile</h1>
        <p className="text-muted-foreground">Keep your personal and medical details up to date.</p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Edit Your Profile</CardTitle>
            <CardDescription>This information helps our AI provide personalized insights. It is kept secure and private.</CardDescription>
        </CardHeader>
        <CardContent>
            <ProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}
