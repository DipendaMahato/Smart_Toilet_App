
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { confirmPasswordReset, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth, useUser } from "@/firebase";

const ResetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});


export function ResetPasswordForm() {
  const router = useRouter();
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email_for_verification');
    setEmail(storedEmail);
  }, []);

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ResetPasswordSchema>) {
    if (!auth) return;
    setLoading(true);

    try {
        if (user) {
             // User is logged in, re-authenticate and update password
             const credential = EmailAuthProvider.credential(user.email!, prompt('Please enter your current password for security reasons: ' )!);
             await reauthenticateWithCredential(user, credential);
             await updatePassword(user, values.password);
        } else {
             // This flow is not fully supported by Firebase client SDK directly without oobCode
             // A more robust solution would use Firebase Admin SDK to generate a reset link
             // For this client-side example, we'll assume we're changing an unauthenticated user's password
             // which is not a standard Firebase Auth flow.
             // We'll redirect to login with a message.
            console.warn("Password reset for unauthenticated users is not directly supported on the client. A backend with Admin SDK is recommended.");
            toast({
                title: "Action required",
                description: "Password reset is not complete. Please login with your old password to update it in settings.",
            });
            router.push('/login');
            return;
        }

      toast({
        title: "Success",
        description: "Your password has been updated successfully.",
      });

      sessionStorage.removeItem('email_for_verification');
      router.push("/dashboard");

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Password Reset Failed",
        description: error.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
           <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                     <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute inset-y-0 right-0 h-full w-10 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                     <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute inset-y-0 right-0 h-full w-10 text-muted-foreground"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" loading={loading}>
              Reset Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
