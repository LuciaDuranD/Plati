import { Link } from "react-router";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function Login() {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 md:py-32">
      <div className="text-center mb-10">
        <img src={logoImg} alt="PLATI Logo" className="h-16 w-16 mx-auto mb-6 rounded-2xl object-cover border-2 border-[#EDE7F6] shadow-sm" />
        <h1 className="text-3xl font-black text-[#311B92] mb-2">Iniciar sesión</h1>
        <p className="text-gray-600">Ingresa a tu cuenta de PLATI.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#EDE7F6]">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full h-14 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-gray-700">Contraseña</label>
              <a href="#" className="text-sm font-bold text-[#7C4DFF] hover:text-[#311B92]">¿Olvidaste tu contraseña?</a>
            </div>
            <input 
              type="password" 
              className="w-full h-14 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="••••••••"
            />
          </div>

          <Link to="/cliente" className="block w-full py-4 mt-8 bg-[#7C4DFF] text-white rounded-xl font-bold text-center hover:bg-[#651FFF] transition-colors shadow-lg shadow-[#7C4DFF]/20">
            Ingresar
          </Link>

          <Link to="/admin" className="block w-full py-4 bg-[#EDE7F6] text-[#311B92] rounded-xl font-bold text-center hover:bg-[#D1C4E9] transition-colors">
            Ingresar como Admin (Demo)
          </Link>
        </form>
      </div>

      <p className="text-center mt-8 text-sm text-gray-600">
        ¿Aún no tienes cuenta? <Link to="/registro" className="font-bold text-[#7C4DFF] hover:text-[#311B92] hover:underline">Regístrate aquí</Link>
      </p>
    </div>
  );
}
