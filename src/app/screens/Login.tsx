import { Link } from "react-router";

export function Login() {
  return (
    <div className="w-full max-w-md mx-auto px-6 py-12 md:py-32">
      <div className="text-center mb-10">
        <div className="h-12 w-12 bg-gray-900 rounded-lg mx-auto mb-6 flex items-center justify-center">
          <span className="text-white font-bold text-xl">P</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Iniciar sesión</h1>
        <p className="text-gray-600">Ingresa a tu cuenta de PLATI.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">¿Olvidaste tu contraseña?</a>
            </div>
            <input 
              type="password" 
              className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <Link to="/cliente" className="block w-full py-4 mt-8 bg-gray-900 text-white rounded-lg font-medium text-center hover:bg-gray-800 transition-colors">
            Ingresar
          </Link>

          <Link to="/admin" className="block w-full py-4 bg-gray-100 text-gray-600 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors">
            Ingresar como Admin (Demo)
          </Link>
        </form>
      </div>

      <p className="text-center mt-8 text-sm text-gray-600">
        ¿Aún no tienes cuenta? <Link to="/registro" className="font-semibold text-gray-900 hover:underline">Regístrate aquí</Link>
      </p>
    </div>
  );
}
