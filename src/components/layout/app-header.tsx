"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  Home,
  Bot,
  User,
  Settings,
  HeartPulse,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { mockMedicalProfile } from "@/lib/data";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/insights", icon: Bot, label: "AI Insights" },
  { href: "/dashboard/profile", icon: User, label: "Medical Profile" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

function getPageTitle(pathname: string) {
    if (pathname === '/dashboard') return 'Dashboard';
    const matchedItem = navItems.find(item => pathname.startsWith(item.href));
    return matchedItem ? matchedItem.label : 'Dashboard';
}

export default function AppHeader() {
  const pathname = usePathname();
  const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 sticky top-0 z-30">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold mb-4 font-headline text-primary"
            >
              <HeartPulse className="h-6 w-6" />
              <span>TotoHealth</span>
            </Link>
            {navItems.map((item) => (
                 <Link key={item.label} href={item.href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    <item.icon className="h-5 w-5" />
                    {item.label}
                 </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center gap-4 md:gap-2 lg:gap-4">
        <h1 className="text-xl font-semibold font-headline">{pageTitle}</h1>
        <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <div className="relative">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <span className="absolute top-1 right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                </span>
            </div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                {userAvatar && (
                    <Image
                    src={userAvatar.imageUrl}
                    width={32}
                    height={32}
                    alt="User Avatar"
                    className="rounded-full"
                    data-ai-hint={userAvatar.imageHint}
                    />
                )}
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/dashboard/profile">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/dashboard/settings">Settings</Link></DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link href="/login">Logout</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
