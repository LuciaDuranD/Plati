import { Link } from "react-router";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function UserRegistration() {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 md:py-24">
      <div className="text-center mb-8">
        <img src={logoImg} alt="PLATI Logo" className="h-16 w-16 mx-auto mb-6 rounded-2xl object-cover border-2 border-[#EDE7F6] shadow-sm" />
        <h1 className="text-3xl font-black text-[#311B92] mb-2">Crea tu cuenta</h1>
        <p className="text-gray-600">Únete a PLATI y solicita tu crédito hoy.</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold text-gray-400 mb-2">
          <span className="text-[#311B92]">Paso 1 de 3</span>
          <span>Registro básico</span>
        </div>
        <div className="h-2 w-full bg-[#EDE7F6] rounded-full overflow-hidden">
          <div className="h-full bg-[#F5A623] w-1/3"></div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#EDE7F6]">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
            <input 
              type="text" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Cédula de ciudadanía</label>
            <input 
              type="text" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="Ej. 1020304050"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Celular</label>
            <input 
              type="tel" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="Ej. 300 123 4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
            <input 
              type="password" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Confirmar contraseña</label>
            <input 
              type="password" 
              className="w-full h-12 px-4 rounded-xl border border-[#EDE7F6] focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all bg-[#F8F5FF]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input 
              type="checkbox" 
              id="terms"
              className="mt-1 h-4 w-4 rounded border-[#EDE7F6] text-[#7C4DFF] focus:ring-[#7C4DFF]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
              Acepto los <a href="#" className="underline font-bold text-[#7C4DFF] hover:text-[#311B92]">Términos y Condiciones</a> y la <a href="#" className="underline font-bold text-[#7C4DFF] hover:text-[#311B92]">Política de Tratamiento de Datos Personales</a>.
            </label>
          </div>

          <Link to="/cliente/solicitar" className="block w-full py-4 mt-6 bg-[#F5A623] text-white rounded-xl font-bold text-center hover:bg-[#E09612] transition-colors shadow-lg shadow-[#F5A623]/20">
            Crear cuenta
          </Link>
        </form>
      </div>

      <p className="text-center mt-6 text-sm text-gray-600">
        ¿Ya tienes cuenta? <Link to="/ingresar" className="font-bold text-[#7C4DFF] hover:text-[#311B92] hover:underline">Ingresa aquí</Link>
      </p>
    </div>
  );
}
