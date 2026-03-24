import { Link, useLocation } from "react-router-dom";
import { Bot, LayoutGrid, Home, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { businessUnits } from "@/data/catalogData";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/catalog", label: "Catalog", icon: LayoutGrid },
    ...businessUnits.map((bu) => ({
      path: `/bu/${bu.id.toLowerCase()}`,
      label: bu.id,
      icon: Building2,
    })),
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-accent">
            <Bot className="h-5 w-5 text-accent-foreground" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Services Agentic Store
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
