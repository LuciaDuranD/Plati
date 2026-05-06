import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Users, FileText, Settings, LogOut, Menu } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Solicitudes", path: "/admin/solicitudes", icon: FileText },
    { name: "Usuarios", path: "/admin/usuarios", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-white rounded-sm"></div>
            <span className="text-xl font-bold tracking-tight text-white">PLATI Admin</span>
          </div>
        </div>
        
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-gray-800 text-white" 
                      : "text-white/60 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-white/60"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-gray-800">
          <Link
            to="/ingresar"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-white/60 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:hidden">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-900 rounded-sm"></div>
            <span className="text-lg font-bold text-gray-900">Admin</span>
          </div>
          <button className="text-gray-500">
            <Menu className="h-6 w-6" />
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 flex justify-center">
          <div className="w-full max-w-[1080px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
