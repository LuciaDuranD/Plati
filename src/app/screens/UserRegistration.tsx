import { Link } from "react-router";

export function UserRegistration() {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 md:py-24">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Crea tu cuenta</h1>
        <p className="text-gray-600">Únete a PLATI y solicita tu crédito hoy.</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs font-medium text-gray-400 mb-2">
          <span className="text-gray-900">Paso 1 de 3</span>
          <span>Registro básico</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gray-900 w-1/3"></div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input 
              type="text" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cédula de ciudadanía</label>
            <input 
              type="text" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="Ej. 1020304050"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
            <input 
              type="tel" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="Ej. 300 123 4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar contraseña</label>
            <input 
              type="password" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input 
              type="checkbox" 
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
              Acepto los <a href="#" className="underline font-medium text-gray-900">Términos y Condiciones</a> y la <a href="#" className="underline font-medium text-gray-900">Política de Tratamiento de Datos Personales</a>.
            </label>
          </div>

          <Link to="/cliente/solicitar" className="block w-full py-4 mt-6 bg-gray-900 text-white rounded-lg font-medium text-center hover:bg-gray-800 transition-colors">
            Crear cuenta
          </Link>
        </form>
      </div>

      <p className="text-center mt-6 text-sm text-gray-600">
        ¿Ya tienes cuenta? <Link to="/ingresar" className="font-semibold text-gray-900 hover:underline">Ingresa aquí</Link>
      </p>
    </div>
  );
}
