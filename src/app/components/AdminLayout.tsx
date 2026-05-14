import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Users, FileText, Settings, LogOut, Menu, AlertTriangle, X } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";
import { useState } from "react";

export function AdminLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Solicitudes", path: "/admin/solicitudes", icon: FileText },
    { name: "Usuarios", path: "/admin/usuarios", icon: Users },
    { name: "Cartera Castigada", path: "/admin/cartera-castigada", icon: AlertTriangle },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#F8F5FF] flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-[#0D0524] via-[#1A0B4E] via-40% to-[#311B92] text-white hidden md:flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#7C4DFF] to-[#9575FF] rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#5E35B1] to-[#7C4DFF] rounded-full blur-[120px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        <div className="h-20 flex items-center px-6 border-b border-white/20 relative z-10">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-white/20" />
            <span className="text-xl font-black tracking-tight text-white" translate="no">PLAT<span className="text-[#F5A623]">I</span> Admin</span>
          </div>
        </div>
        
        <div className="p-4 flex-1 relative z-10">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.path === "/admin"
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#6A1B9A] via-[#7C4DFF] to-[#AB47BC] text-white shadow-xl shadow-[#7C4DFF]/50 border border-[#9575FF]/30"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-white drop-shadow-lg" : "text-white/60"}`} />
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-[#0D0524] via-[#1A0B4E] via-40% to-[#311B92] text-white z-50 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#7C4DFF] to-[#9575FF] rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#5E35B1] to-[#7C4DFF] rounded-full blur-[120px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-white/20" />
            <span className="text-xl font-black tracking-tight text-white" translate="no">PLAT<span className="text-[#F5A623]">I</span> Admin</span>
          </div>
          <button onClick={closeMobileMenu} className="text-white/80 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex-1 relative z-10">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.path === "/admin"
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#6A1B9A] via-[#7C4DFF] to-[#AB47BC] text-white shadow-xl shadow-[#7C4DFF]/50 border border-[#9575FF]/30"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-white drop-shadow-lg" : "text-white/60"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 relative z-10">
          <Link
            to="/ingresar"
            onClick={closeMobileMenu}
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
            <span className="text-lg font-black text-[#311B92]" translate="no">PLAT<span className="text-[#F5A623]">I</span> Admin</span>
          </div>
          <button onClick={() => setMobileMenuOpen(true)} className="text-[#311B92] p-2">
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
