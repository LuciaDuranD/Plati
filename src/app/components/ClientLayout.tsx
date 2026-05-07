import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FileText, Activity, Clock, LogOut, Menu } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function ClientLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Resumen", path: "/cliente", icon: LayoutDashboard },
    { name: "Solicitar Crédito", path: "/cliente/solicitar", icon: FileText },
    { name: "Estado de Solicitud", path: "/cliente/estado", icon: Activity },
    { name: "Historial de Pagos", path: "/cliente/historial", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5FF] flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#EDE7F6] hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-[#EDE7F6]">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-[#EDE7F6]" />
            <span className="text-xl font-black tracking-tight text-[#311B92]">PLATI</span>
          </Link>
        </div>
        
        <div className="p-4">
          <div className="mb-6 px-2">
            <p className="text-xs font-bold text-[#7C4DFF] uppercase tracking-wider">Mi Cuenta</p>
            <p className="text-sm font-bold text-[#311B92] mt-1">Juan Pérez (Empresa SAS)</p>
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive 
                      ? "bg-[#7C4DFF]/10 text-[#7C4DFF]" 
                      : "text-gray-500 hover:bg-[#EDE7F6] hover:text-[#311B92]"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-[#7C4DFF]" : "text-gray-400"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-[#EDE7F6]">
          <Link
            to="/ingresar"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:bg-[#EDE7F6] hover:text-[#311B92] transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-400" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-[#EDE7F6] flex items-center justify-between px-6 md:hidden">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover border border-[#EDE7F6]" />
            <span className="text-lg font-black text-[#311B92]">PLATI</span>
          </Link>
          <button className="text-[#311B92] p-2">
            <Menu className="h-6 w-6" />
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-[#F8F5FF] p-6 lg:p-8 flex justify-center">
          <div className="w-full max-w-[1080px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
