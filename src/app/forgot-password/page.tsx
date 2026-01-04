
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="font-headline text-3xl font-bold text-center mb-2 text-primary">
          Forgot Password
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Enter your email to receive a code to reset your password.
        </p>
        <ForgotPasswordForm />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Remembered your password?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
