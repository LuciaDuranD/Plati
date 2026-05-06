import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FileText, Activity, Clock, LogOut, Menu } from "lucide-react";

export function ClientLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: "Resumen", path: "/cliente", icon: LayoutDashboard },
    { name: "Solicitar Crédito", path: "/cliente/solicitar", icon: FileText },
    { name: "Estado de Solicitud", path: "/cliente/estado", icon: Activity },
    { name: "Historial de Pagos", path: "/cliente/historial", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-800 rounded-sm"></div>
            <span className="text-xl font-bold tracking-tight text-gray-900">PLATI</span>
          </Link>
        </div>
        
        <div className="p-4">
          <div className="mb-6 px-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Mi Cuenta</p>
            <p className="text-sm font-medium text-gray-900 mt-1">Juan Pérez (Empresa SAS)</p>
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-gray-100 text-gray-900" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-gray-900" : "text-gray-400"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-4 border-t border-gray-200">
          <Link
            to="/ingresar"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-400" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-800 rounded-sm"></div>
            <span className="text-lg font-bold text-gray-900">PLATI</span>
          </Link>
          <button className="text-gray-500">
            <Menu className="h-6 w-6" />
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 lg:p-8 flex justify-center">
          <div className="w-full max-w-[1080px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
