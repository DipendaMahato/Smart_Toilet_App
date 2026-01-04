import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="font-headline text-3xl font-bold text-center mb-2 text-primary">
          Welcome Back
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Sign in to access your health dashboard.
        </p>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
