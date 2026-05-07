import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Users, FileText, Settings, LogOut, Menu } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function AdminLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Solicitudes", path: "/admin/solicitudes", icon: FileText },
    { name: "Usuarios", path: "/admin/usuarios", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5FF] flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#311B92] text-white hidden md:flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#7C4DFF] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="h-20 flex items-center px-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-white/20" />
            <span className="text-xl font-black tracking-tight text-white">PLATI Admin</span>
          </div>
        </div>
        
        <div className="p-4 flex-1 relative z-10">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-[#7C4DFF] text-white shadow-lg shadow-[#7C4DFF]/20" 
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-white/60"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-white/10 relative z-10">
          <Link
            to="/ingresar"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-[#EDE7F6] flex items-center justify-between px-6 md:hidden">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-[#EDE7F6]" />
            <span className="text-lg font-black text-[#311B92]">Admin</span>
          </div>
          <button className="text-[#311B92] p-2">
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
