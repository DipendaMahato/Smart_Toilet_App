import AppHeader from "@/components/layout/app-header";
import AppSidebar from "@/components/layout/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex bg-background">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <AppHeader />
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {children}
        </div>
      </main>
    </div>
  );
}
