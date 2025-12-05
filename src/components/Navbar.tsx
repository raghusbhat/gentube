import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-sidebar">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img src="/logo.png" alt="GenTube" className="h-8 w-auto" />
        </div>

        <Button
          variant="outline"
          className="h-7 border-primary/50 bg-primary px-3 text-xs text-primary-foreground hover:bg-primary/80"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
