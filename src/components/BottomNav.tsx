import { Home, ShoppingBag, CreditCard, Wallet, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Users, label: "Groups", path: "/groups" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: CreditCard, label: "Pay", path: "/pay" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 flex-1"
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? "text-accent" : "text-muted-foreground"
                }`} 
              />
              <span 
                className={`text-xs ${
                  isActive ? "text-accent font-medium" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
