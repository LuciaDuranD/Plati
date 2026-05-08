import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FileText, Activity, Clock, Wallet, User, LogOut, Menu, Bell, Calendar, X } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function ClientLayout() {
  const location = useLocation();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { name: "Inicio", path: "/cliente", icon: LayoutDashboard },
    { name: "Mi crédito", path: "/cliente/estado", icon: Activity },
    { name: "Historial", path: "/cliente/historial", icon: Clock },
    { name: "Pagos", path: "/cliente/pagos", icon: Wallet },
    { name: "Perfil", path: "/cliente/perfil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex font-sans text-[#1A0060]">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#1A0060]/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Updated to match new design and mobile responsiveness */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[240px] bg-[#311B92] flex flex-col shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}>
        <div className="h-20 flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-[#7C4DFF] flex items-center justify-center border border-white/10 overflow-hidden">
                <img src={logoImg} alt="PLATI Logo" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#FFD600] border-2 border-[#311B92]"></div>
            </div>
            <span className="text-xl font-black tracking-tight text-white" translate="no">PLAT<span className="text-[#F5A623]">I</span></span>
          </Link>
          <button 
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
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
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 -ml-1 text-[#311B92] hover:bg-[#F5F3FF] rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            <span className="text-lg font-black text-[#311B92]" translate="no">PLAT<span className="text-[#F5A623]">I</span></span>
          </div>
          
          <div className="hidden md:flex text-sm font-medium text-[#6E5FAA]">
            <span>Pagos</span>
            <span className="mx-2">/</span>
            <span className="text-[#1A0060] font-bold">Pagar cuota</span>
          </div>

          <div className="flex items-center gap-6 relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative text-[#6E5FAA] hover:text-[#7C4DFF] transition-colors p-2"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#F5A623] text-white text-[10px] font-bold flex items-center justify-center">2</span>
            </button>

            {/* Dropdown de Notificaciones */}
            {isNotificationsOpen && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#EDE7F6] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="p-4 border-b border-[#EDE7F6] bg-[#F5F3FF]">
                  <h3 className="font-bold text-[#311B92]">Notificaciones</h3>
                </div>
                <div className="divide-y divide-[#EDE7F6] max-h-96 overflow-y-auto">
                  {/* Notificación 1 */}
                  <div className="p-4 hover:bg-gray-50 transition-colors flex gap-4 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A0060]">Próximo pago</p>
                      <p className="text-xs text-gray-600 mt-1">Tu próxima cuota de $120.000 COP vence el 15 de Mayo.</p>
                      <p className="text-[10px] text-gray-400 mt-2">Hace 2 horas</p>
                    </div>
                  </div>
                  {/* Notificación 2 */}
                  <div className="p-4 hover:bg-gray-50 transition-colors flex gap-4 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-[#FFF3E0] flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A0060]">Recordatorio de pago</p>
                      <p className="text-xs text-gray-600 mt-1">Evita recargos pagando a tiempo. Vence el 30 de Mayo.</p>
                      <p className="text-[10px] text-gray-400 mt-2">Hace 1 día</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
