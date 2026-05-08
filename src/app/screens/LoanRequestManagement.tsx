import { Filter, Search, MoreVertical, Check, X, Eye } from "lucide-react";

export function LoanRequestManagement() {
  const requests = [
    { id: "REQ-001", applicant: "María Gómez", amount: 8000000, date: "12 Oct 2023", riskScore: "A", status: "En revisión" },
    { id: "REQ-002", applicant: "Carlos Ruiz", amount: 3500000, date: "12 Oct 2023", riskScore: "C", status: "Nueva" },
    { id: "REQ-003", applicant: "Ana Torres", amount: 12000000, date: "11 Oct 2023", riskScore: "B", status: "Aprobada" },
    { id: "REQ-004", applicant: "Luis Fernando", amount: 2000000, date: "10 Oct 2023", riskScore: "D", status: "Rechazada" },
    { id: "REQ-005", applicant: "Empresa XYZ", amount: 15000000, date: "09 Oct 2023", riskScore: "A", status: "Desembolsada" },
  ];

  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gestión de Solicitudes</h1>
        <p className="text-gray-600">Revisa, aprueba o rechaza las solicitudes de crédito.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar por cliente o ID..." 
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Estado
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Riesgo
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">ID / Solicitante</th>
                <th className="px-6 py-4 font-semibold">Monto</th>
                <th className="px-6 py-4 font-semibold">Fecha</th>
                <th className="px-6 py-4 font-semibold text-center">Score Riesgo</th>
                <th className="px-6 py-4 font-semibold">Estado</th>
                <th className="px-6 py-4 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.map((req, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{req.applicant}</p>
                    <p className="text-xs font-mono text-gray-500">{req.id}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-900">
                    $ {req.amount.toLocaleString('es-CO')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{req.date}</td>
                  <td className="px-6 py-4 text-center">
                    <div className={`inline-flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm ${
                      req.riskScore === 'A' ? 'bg-gray-100 text-gray-600 border border-gray-300' :
                      req.riskScore === 'B' ? 'bg-gray-200 text-gray-800' :
                      req.riskScore === 'C' ? 'bg-gray-400 text-gray-900' :
                      'bg-gray-800 text-white'
                    }`}>
                      {req.riskScore}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      req.status === 'Nueva' ? 'bg-[#FFF4E5] text-[#F5A623] border border-[#F5A623]/30 font-bold' :
                      req.status === 'En revisión' ? 'bg-gray-200 text-gray-900 border-gray-400' :
                      req.status === 'Aprobada' || req.status === 'Desembolsada' ? 'bg-gray-100 text-gray-600 border-gray-300' :
                      'bg-white text-gray-500 border-gray-300 line-through'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button title="Ver detalle" className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      {(req.status === 'Nueva' || req.status === 'En revisión') && (
                        <>
                          <button title="Aprobar" className="p-1.5 text-[#F5A623] hover:bg-[#FFF4E5] rounded">
                            <Check className="h-4 w-4" strokeWidth={2.5} />
                          </button>
                          <button title="Rechazar" className="p-1.5 text-gray-400 hover:bg-gray-100 rounded">
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500 flex justify-between items-center">
          <span>Mostrando 1 a 5 de 45 registros</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
