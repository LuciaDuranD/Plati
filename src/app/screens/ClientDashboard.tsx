import { Link } from "react-router";
import { CreditCard, DollarSign, Calendar, ArrowUpRight, Activity } from "lucide-react";

export function ClientDashboard() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hola, Juan Pérez</h1>
        <p className="text-gray-600">Bienvenido a tu panel de control de PLATI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Status Card */}
        <div className="md:col-span-2 bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Crédito Actual</p>
              <h2 className="text-4xl font-bold font-mono">$ 5,000,000</h2>
            </div>
            <div className="px-3 py-1 bg-[#FFF4E5] text-[#F5A623] rounded-full text-xs font-bold uppercase tracking-wide border border-[#F5A623]/20">
              Activo
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 pt-6 border-t border-gray-800">
            <div>
              <p className="text-gray-400 text-xs mb-1">Desembolsado</p>
              <p className="font-semibold">$ 5.0M</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Saldo restante</p>
              <p className="font-semibold">$ 3.2M</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Cuotas pagadas</p>
              <p className="font-semibold">4 de 12</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Tasa mensual</p>
              <p className="font-semibold">2.5%</p>
            </div>
          </div>
        </div>

        {/* Next Payment Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Próximo Pago</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">$ 485,000</p>
            <p className="text-sm text-gray-900 font-medium flex items-center gap-1">
              Vence el 15 de Octubre
            </p>
          </div>
          
          <Link to="/cliente/pagos" className="w-full mt-6 py-3 bg-[#F5A623] text-white rounded-lg font-bold hover:bg-[#E09612] transition-colors flex justify-center items-center gap-2 shadow-md shadow-[#F5A623]/20">
            Pagar ahora <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Activity className="h-5 w-5 text-gray-500" />
            Actividad Reciente
          </h3>
          <Link to="/cliente/historial" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Ver todo
          </Link>
        </div>
        
        <div className="divide-y divide-gray-100">
          {[
            { title: "Pago de cuota #4", date: "15 Sep 2023", amount: "-$485,000", status: "Completado" },
            { title: "Pago de cuota #3", date: "15 Ago 2023", amount: "-$485,000", status: "Completado" },
            { title: "Desembolso de crédito", date: "10 May 2023", amount: "+$5,000,000", status: "Completado" },
          ].map((item, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.amount.startsWith('+') ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700'}`}>
                  {item.amount.startsWith('+') ? <DollarSign className="h-5 w-5" /> : <CreditCard className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-mono font-medium ${item.amount.startsWith('+') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}>
                  {item.amount}
                </p>
                <p className="text-xs text-gray-400 mt-1">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
