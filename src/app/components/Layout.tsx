import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function Layout() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.documentElement.lang = "es";
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-[#EDE7F6] bg-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-24">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImg} alt="PLATI Logo" className="h-10 w-10 rounded-lg object-cover border border-[#EDE7F6]" />
            <span className="text-2xl font-black text-[#311B92] tracking-tight" translate="no">PLAT<span className="text-[#F5A623]">I</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#311B92]">
            <Link to="/" className="hover:text-[#F5A623] transition-colors">Inicio</Link>
            <Link to="/simular" className="hover:text-[#F5A623] transition-colors">Simular</Link>
            <Link to="/medios-de-pago" className="hover:text-[#F5A623] transition-colors">Medios de Pagos</Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/ingresar" className="text-sm font-medium text-[#311B92] hover:text-[#F5A623] transition-colors">
              Iniciar sesión
            </Link>
            <Link to="/registro" className="bg-[#7C4DFF] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#F5A623] transition-colors shadow-sm">
              Crear cuenta
            </Link>
          </div>
          
          <button 
            className="md:hidden p-2 text-[#311B92] hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#311B92]/50 z-50 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-[280px] bg-white flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#EDE7F6]">
          <span className="text-xl font-black text-[#311B92]" translate="no">PLAT<span className="text-[#F5A623]">I</span></span>
          <button 
            className="p-2 text-gray-400 hover:text-[#311B92] hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#311B92]">
            <Link to="/" className="hover:text-[#F5A623] transition-colors py-2">Inicio</Link>
            <Link to="/simular" className="hover:text-[#F5A623] transition-colors py-2">Simular</Link>
            <Link to="/medios-de-pago" className="hover:text-[#F5A623] transition-colors py-2">Medios de Pagos</Link>
          </nav>
          
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-[#EDE7F6]">
            <Link 
              to="/ingresar" 
              className="w-full text-center py-3 text-sm font-bold text-[#311B92] bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link 
              to="/registro" 
              className="w-full text-center py-3 bg-[#7C4DFF] text-white rounded-lg text-sm font-bold hover:bg-[#F5A623] transition-colors"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
      
      <main className="flex-1 flex flex-col items-center w-full">
        <Outlet />
      </main>

      <footer className="border-t border-[#EDE7F6] bg-white py-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="PLATI Logo" className="h-8 w-8 rounded-md object-cover grayscale opacity-60" />
              <span className="text-xl font-black text-gray-400 tracking-tight" translate="no">PLAT<span className="text-gray-300">I</span></span>
            </div>
            <p className="text-sm text-gray-500">Dinero rápido, seguro y confiable para tu negocio.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#311B92] mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/simular" className="hover:text-[#7C4DFF]">Simulador de crédito</Link></li>
              <li><Link to="/" className="hover:text-[#7C4DFF]">Beneficios</Link></li>
              <li><Link to="/" className="hover:text-[#7C4DFF]">Requisitos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#311B92] mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-[#7C4DFF]">Sobre nosotros</Link></li>
              <li><Link to="/" className="hover:text-[#7C4DFF]">Contacto</Link></li>
              <li><Link to="/" className="hover:text-[#7C4DFF]">Preguntas frecuentes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#311B92] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-[#7C4DFF]">Términos y condiciones</Link></li>
              <li><Link to="/" className="hover:text-[#7C4DFF]">Política de privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-24 mt-12 pt-8 border-t border-[#EDE7F6]">
          <p className="text-xs text-gray-400 text-center">
            Plati es una plataforma de tecnología financiera. Los préstamos están sujetos a aprobación de crédito. Monto máximo $5.000.000 COP.
          </p>
        </div>
      </footer>
    </div>
  );
}
