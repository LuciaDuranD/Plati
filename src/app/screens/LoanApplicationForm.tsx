import { useState } from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";

export function LoanApplicationForm() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Solicitud de Crédito</h1>
        <p className="text-gray-600">Completa esta información para evaluar tu capacidad de pago.</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between relative z-10">
          {['Datos Personales', 'Datos Financieros', 'Documentos'].map((label, i) => {
            const stepNum = i + 1;
            const isCompleted = step > stepNum;
            const isCurrent = step === stepNum;
            
            return (
              <div key={i} className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  isCompleted ? 'bg-gray-900 text-white' : 
                  isCurrent ? 'bg-gray-900 text-white border-4 border-gray-200' : 'bg-gray-100 text-gray-400'
                }`}>
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNum}
                </div>
                <span className={`mt-3 text-sm font-medium ${isCurrent || isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[88px] md:top-[124px] left-10 right-10 h-1 bg-gray-200 -z-0 hidden md:block">
          <div className="h-full bg-gray-900 transition-all duration-300" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Información Personal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" defaultValue="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cédula de ciudadanía</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" defaultValue="1020304050" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                <input type="tel" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" defaultValue="300 123 4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento</label>
                <input type="date" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-gray-600" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección de residencia</label>
                <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" placeholder="Calle 123 # 45 - 67" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none bg-white">
                  <option>Bogotá</option>
                  <option>Medellín</option>
                  <option>Cali</option>
                  <option>Barranquilla</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end pt-6">
              <button onClick={() => setStep(2)} className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Siguiente paso
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Información Financiera</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de negocio</label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none bg-white">
                  <option>Comercio al por menor</option>
                  <option>Servicios</option>
                  <option>Manufactura</option>
                  <option>Agropecuario</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tiempo de operación (meses)</label>
                <input type="number" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" placeholder="Ej. 24" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ventas mensuales promedio</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input type="text" className="w-full h-12 pl-8 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Propósito del crédito</label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none bg-white">
                  <option>Capital de trabajo</option>
                  <option>Compra de inventario</option>
                  <option>Maquinaria y equipo</option>
                  <option>Adecuación de local</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Monto solicitado (Máx. $5,000,000)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input type="text" className="w-full h-12 pl-8 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none font-mono" defaultValue="5,000,000" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Atrás
              </button>
              <button onClick={() => setStep(3)} className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Siguiente paso
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6">Documentos de Soporte</h2>
            <p className="text-sm text-gray-600 mb-4">Sube los siguientes documentos para agilizar tu aprobación.</p>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-xl">+</span>
                </div>
                <h3 className="font-medium text-gray-900">Cédula de ciudadanía</h3>
                <p className="text-xs text-gray-500 mt-1">Foto por ambas caras (JPG, PNG o PDF)</p>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-xl">+</span>
                </div>
                <h3 className="font-medium text-gray-900">Extractos bancarios (Últimos 3 meses)</h3>
                <p className="text-xs text-gray-500 mt-1">Formato PDF</p>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50">
                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-500 text-xl">+</span>
                </div>
                <h3 className="font-medium text-gray-900">RUT (Opcional)</h3>
                <p className="text-xs text-gray-500 mt-1">Formato PDF</p>
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <button onClick={() => setStep(2)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Atrás
              </button>
              <Link to="/cliente/estado" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-center">
                Enviar solicitud
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
