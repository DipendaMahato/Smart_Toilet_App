
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
import { sendOtp } from "@/lib/actions";


const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function ForgotPasswordForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
    setLoading(true);
    try {
      const response = await sendOtp({ email: values.email });
      if (response.error) {
        throw new Error(response.error);
      }

      sessionStorage.setItem("otp", response.otp!);
      sessionStorage.setItem("email_for_verification", values.email);

      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to ${values.email}.`,
      });

      router.push("/verify-otp");

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to send OTP",
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" loading={loading}>
              Send Reset Code
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
