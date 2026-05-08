import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FileText, Activity, Clock, Wallet, User, LogOut, Menu, Bell, ChevronDown } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function ClientLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Inicio", path: "/cliente", icon: LayoutDashboard },
    { name: "Mi crédito", path: "/cliente/estado", icon: Activity },
    { name: "Historial", path: "/cliente/historial", icon: Clock },
    { name: "Pagos", path: "/cliente/pagos", icon: Wallet },
    { name: "Perfil", path: "/cliente/perfil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex font-sans text-[#1A0060]">
      {/* Sidebar - Updated to match new design */}
      <aside className="w-[240px] bg-[#311B92] hidden md:flex flex-col shrink-0">
        <div className="h-20 flex items-center px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-[#7C4DFF] flex items-center justify-center border border-white/10 overflow-hidden">
                <img src={logoImg} alt="PLATI Logo" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#FFD600] border-2 border-[#311B92]"></div>
            </div>
            <span className="text-xl font-black tracking-tight text-white" translate="no">PLATI</span>
          </Link>
        </div>
        
        <div className="p-4 pt-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (location.pathname === "/cliente/solicitar" && item.path === "/cliente");
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-3 px-4 h-12 rounded-xl text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-[#7C4DFF] text-white" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] bg-[#FFD600] rounded-r-full"></div>
                  )}
                  <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-white/70"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between mb-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#7C4DFF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                CR
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">Carlos R.</p>
                <p className="text-xs text-white/60 truncate">Miembro activo</p>
              </div>
            </div>
          </div>
          <Link
            to="/ingresar"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* New Header */}
        <header className="h-16 bg-white border-b border-[#D1C4E9] flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 md:hidden">
            <Menu className="h-6 w-6 text-[#311B92]" />
            <span className="text-lg font-black text-[#311B92]" translate="no">PLATI</span>
          </div>
          
          <div className="hidden md:flex text-sm font-medium text-[#6E5FAA]">
            <span>Pagos</span>
            <span className="mx-2">/</span>
            <span className="text-[#1A0060] font-bold">Pagar cuota</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-[#6E5FAA] hover:text-[#7C4DFF] transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">2</span>
            </button>
            <div className="h-8 w-[1px] bg-[#D1C4E9]"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="h-8 w-8 rounded-full bg-[#7C4DFF] flex items-center justify-center text-white font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                CR
              </div>
              <span className="text-sm font-bold text-[#1A0060] hidden sm:block">Carlos R.</span>
              <ChevronDown className="h-4 w-4 text-[#6E5FAA] hidden sm:block" />
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-[#F5F3FF] p-6 md:p-8 flex justify-center">
          <div className="w-full max-w-[1080px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
