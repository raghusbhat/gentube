import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-sidebar/50 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <img src="/logo.png" alt="GenTube" className="h-8 w-auto" />
        </div>

        <Button size="sm" className="">
          Login
        </Button>
      </div>
    </nav>
  );
}
