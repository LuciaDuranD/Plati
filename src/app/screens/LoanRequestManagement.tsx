import { Filter, Search, MoreVertical, Check, X, Eye } from "lucide-react";

export function LoanRequestManagement() {
  const requests = [
    { id: "REQ-001", applicant: "María Gómez", amount: 5000000, date: "12 Oct 2023", riskScore: "A", status: "En revisión" },
    { id: "REQ-002", applicant: "Carlos Ruiz", amount: 3500000, date: "12 Oct 2023", riskScore: "C", status: "Nueva" },
    { id: "REQ-003", applicant: "Ana Torres", amount: 4500000, date: "11 Oct 2023", riskScore: "B", status: "Aprobada" },
    { id: "REQ-004", applicant: "Luis Fernando", amount: 2000000, date: "10 Oct 2023", riskScore: "D", status: "Rechazada" },
    { id: "REQ-005", applicant: "Empresa XYZ", amount: 5000000, date: "09 Oct 2023", riskScore: "A", status: "Desembolsada" },
    { id: "REQ-006", applicant: "Pedro Sánchez", amount: 1500000, date: "08 Oct 2023", riskScore: "B", status: "Aprobada" },
    { id: "REQ-007", applicant: "Laura Díaz", amount: 3000000, date: "08 Oct 2023", riskScore: "D", status: "Rechazada" },
    { id: "REQ-008", applicant: "Jorge Ortiz", amount: 4000000, date: "07 Oct 2023", riskScore: "A", status: "Desembolsada" },
  ];

  const newRequests = requests.filter(r => r.status === 'Nueva');
  const reviewRequests = requests.filter(r => r.status === 'En revisión');
  const approvedRequests = requests.filter(r => r.status === 'Aprobada');
  const rejectedRequests = requests.filter(r => r.status === 'Rechazada');
  const disbursedRequests = requests.filter(r => r.status === 'Desembolsada');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Nueva': return 'bg-[#FFF4E5] text-[#F5A623] border border-[#F5A623]/30 font-bold';
      case 'En revisión': return 'bg-blue-50 text-blue-700 border border-blue-200 font-bold';
      case 'Aprobada': return 'bg-green-50 text-green-700 border border-green-200 font-bold';
      case 'Rechazada': return 'bg-red-50 text-red-700 border border-red-200 font-bold';
      case 'Desembolsada': return 'bg-[#EDE7F6] text-[#7C4DFF] border border-[#7C4DFF]/30 font-bold';
      default: return 'bg-gray-100 text-gray-600 border border-gray-300 font-bold';
    }
  };

  const RequestTable = ({ title, data }: { title: string, data: typeof requests }) => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{title}</h3>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
          {data.length}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
              <th className="px-4 py-3.5 font-semibold">Cliente / ID</th>
              <th className="px-4 py-3.5 font-semibold">Monto Solicitado</th>
              <th className="px-4 py-3.5 font-semibold">Fecha Ingreso</th>
              <th className="px-4 py-3.5 font-semibold text-center">Nivel Riesgo</th>
              <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
              <th className="px-4 py-3.5 font-semibold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-500 text-sm">
                  No hay solicitudes en esta categoría.
                </td>
              </tr>
            ) : data.map((req, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5">
                  <p className="font-medium text-gray-900">{req.applicant}</p>
                  <p className="text-xs font-mono text-gray-500">{req.id}</p>
                </td>
                <td className="px-4 py-3.5 text-sm font-mono text-gray-900 whitespace-nowrap">
                  ${req.amount.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{req.date}</td>
                <td className="px-4 py-3.5 text-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                    req.riskScore === 'A' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                    req.riskScore === 'B' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300' :
                    req.riskScore === 'C' ? 'bg-orange-100 text-orange-700 border-2 border-orange-300' :
                    'bg-red-100 text-red-700 border-2 border-red-300'
                  }`}>
                    {req.riskScore}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-center">
                  <span className={`inline-flex whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(req.status)}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button title="Ver detalle" className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    {(req.status === 'Nueva' || req.status === 'En revisión') && (
                      <>
                        <button title="Aprobar" className="p-1.5 text-[#F5A623] hover:bg-[#FFF4E5] rounded-lg transition-colors">
                          <Check className="h-4 w-4" strokeWidth={2.5} />
                        </button>
                        <button title="Rechazar" className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Gestión de Solicitudes</h1>
          <p className="text-sm md:text-base text-gray-600">Revisa, aprueba y desembolsa solicitudes</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por cliente o ID..." 
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shrink-0">
            <Filter className="h-4 w-4" />
            Filtrar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6 mb-8 flex flex-col xl:flex-row xl:items-center justify-between gap-4 md:gap-6">
        <div>
          <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">Niveles de Riesgo</h3>
          <p className="text-[10px] md:text-xs text-gray-500">Guía de calificación crediticia para decisiones</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm bg-green-50 text-green-700 border border-green-200">A</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">Riesgo Bajo</span>
              <span className="text-[10px] text-gray-500">Aprobación ideal</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm bg-yellow-50 text-yellow-700 border border-yellow-200">B</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">Riesgo Medio Bajo</span>
              <span className="text-[10px] text-gray-500">Revisión normal</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm bg-orange-50 text-orange-700 border border-orange-200">C</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">Riesgo Medio Alto</span>
              <span className="text-[10px] text-gray-500">Revisión exhaustiva</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm bg-red-50 text-red-700 border border-red-200">D</div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">Riesgo Alto</span>
              <span className="text-[10px] text-gray-500">Probable rechazo</span>
            </div>
          </div>
        </div>
      </div>

      <RequestTable title="Solicitudes Nuevas" data={newRequests} />
      <RequestTable title="Solicitudes En Revisión" data={reviewRequests} />
      <RequestTable title="Solicitudes Aprobadas" data={approvedRequests} />
      <RequestTable title="Solicitudes Rechazadas" data={rejectedRequests} />
      <RequestTable title="Créditos Desembolsados" data={disbursedRequests} />
      
    </div>
  );
}
