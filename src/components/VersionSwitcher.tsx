import { Link, useLocation } from "react-router-dom";
import { Sparkles, Briefcase } from "lucide-react";

export function VersionSwitcher() {
  const location = useLocation();
  const isGenZ = location.pathname === "/genz";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      <Link
        to="/classic"
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${
          !isGenZ
            ? "bg-primary text-primary-foreground"
            : "bg-sidebar/80 text-sidebar-foreground backdrop-blur-sm hover:bg-sidebar"
        }`}
      >
        <Briefcase className="h-4 w-4" />
        Classic
      </Link>
      <Link
        to="/genz"
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300 ${
          isGenZ
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            : "bg-sidebar/80 text-sidebar-foreground backdrop-blur-sm hover:bg-sidebar"
        }`}
      >
        <Sparkles className="h-4 w-4" />
        Gen-Z
      </Link>
    </div>
  );
}
