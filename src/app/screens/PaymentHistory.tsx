import { Download, Filter, Search } from "lucide-react";
import { Link } from "react-router";

export function PaymentHistory() {
  const payments = [
    { id: "12", date: "15 Oct 2023", amount: 485000, status: "Pendiente" },
    { id: "11", date: "15 Sep 2023", amount: 485000, status: "Pagado" },
    { id: "10", date: "15 Ago 2023", amount: 485000, status: "Pagado" },
    { id: "09", date: "15 Jul 2023", amount: 485000, status: "Pagado" },
    { id: "08", date: "15 Jun 2023", amount: 485000, status: "Pagado" },
    { id: "07", date: "15 May 2023", amount: 5000000, status: "Desembolso", isCredit: true },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Historial de Pagos</h1>
          <p className="text-gray-600">Revisa todos los movimientos asociados a tus créditos.</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <Download className="h-4 w-4" />
          Descargar Extracto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium mb-1">Total Pagado</p>
          <p className="text-2xl font-bold text-gray-900">$ 1,940,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium mb-1">Saldo Pendiente</p>
          <p className="text-2xl font-bold text-gray-900">$ 3,880,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-medium mb-1">Próximo Vencimiento</p>
          <p className="text-2xl font-bold text-gray-900">15 Oct 2023</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar transacción..." 
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filtrar
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Ref</th>
                <th className="px-6 py-4 font-semibold">Fecha</th>
                <th className="px-6 py-4 font-semibold">Concepto</th>
                <th className="px-6 py-4 font-semibold text-right">Monto</th>
                <th className="px-6 py-4 font-semibold text-center">Estado</th>
                <th className="px-6 py-4 font-semibold text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payments.map((payment, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">#{payment.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {payment.isCredit ? 'Desembolso de Crédito' : 'Pago de Cuota Mensual'}
                  </td>
                  <td className={`px-6 py-4 text-sm text-right font-mono font-medium ${payment.isCredit ? 'text-gray-900 font-bold' : 'text-gray-600'}`}>
                    {payment.isCredit ? '+' : '-'}$ {payment.amount.toLocaleString('es-CO')}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      payment.status === 'Pagado' ? 'bg-gray-100 text-gray-700 border-gray-300' :
                      payment.status === 'Pendiente' ? 'bg-[#FFF4E5] text-[#F5A623] border-[#F5A623]/30 font-bold' :
                      payment.status === 'Vencido' ? 'bg-gray-800 text-white border-gray-900' :
                      'bg-gray-50 text-gray-500 border-gray-200'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {payment.status === 'Pendiente' ? (
                      <Link to="/cliente/pagos" className="inline-block text-sm font-medium bg-[#F5A623] text-white px-3 py-1.5 rounded hover:bg-[#E09612] text-center shadow-sm shadow-[#F5A623]/20">
                        Pagar
                      </Link>
                    ) : (
                      <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
                        Comprobante
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500 flex justify-between items-center">
          <span>Mostrando 6 de 12 registros</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
