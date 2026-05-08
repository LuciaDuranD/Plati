import { Search, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type UserStatus = "Todos" | "Activo" | "En mora" | "Inactivo" | "Bloqueado";

export function UserManagement() {
  const [activeTab, setActiveTab] = useState<UserStatus>("Todos");

  const allUsers = [
    { id: "1020304050", name: "Juan Pérez", business: "Ferretería El Centro", email: "juan@ejemplo.com", status: "Activo", activeLoans: 1, totalBorrowed: 5000000, activationDate: "2024-01-15", riskLevel: "B", paymentDate: "15 May 2026", monthlyPayment: 420000, interest: 0, daysOverdue: 0 },
    { id: "1020304051", name: "María Gómez", business: "Restaurante Sabor", email: "maria@ejemplo.com", status: "Activo", activeLoans: 0, totalBorrowed: 5000000, activationDate: "2024-02-20", riskLevel: "A", paymentDate: "-", monthlyPayment: 0, interest: 0, daysOverdue: 0 },
    { id: "1020304052", name: "Carlos Ruiz", business: "Taller Mecánico", email: "carlos@ejemplo.com", status: "En mora", activeLoans: 1, totalBorrowed: 3500000, activationDate: "2023-11-10", riskLevel: "D", paymentDate: "01 May 2026", monthlyPayment: 315000, interest: 18750, daysOverdue: 7 },
    { id: "1020304053", name: "Ana Torres", business: "Panadería La 10", email: "ana@ejemplo.com", status: "Inactivo", activeLoans: 0, totalBorrowed: 0, activationDate: "2023-08-05", riskLevel: "C", paymentDate: "-", monthlyPayment: 0, interest: 0, daysOverdue: 0 },
    { id: "900123456", name: "Luis Fernando", business: "Empresa XYZ SAS", email: "luis@xyz.com", status: "Bloqueado", activeLoans: 0, totalBorrowed: 4500000, activationDate: "2023-05-22", riskLevel: "D", paymentDate: "-", monthlyPayment: 0, interest: 0, daysOverdue: 0 },
    { id: "1020304054", name: "Pedro Sánchez", business: "Cafetería El Sol", email: "pedro@ejemplo.com", status: "Activo", activeLoans: 2, totalBorrowed: 4200000, activationDate: "2024-03-01", riskLevel: "A", paymentDate: "20 May 2026", monthlyPayment: 380000, interest: 0, daysOverdue: 0 },
    { id: "1020304055", name: "Laura Martínez", business: "Boutique Estilo", email: "laura@ejemplo.com", status: "En mora", activeLoans: 1, totalBorrowed: 2800000, activationDate: "2023-12-18", riskLevel: "C", paymentDate: "28 Abr 2026", monthlyPayment: 252000, interest: 25200, daysOverdue: 10 },
    { id: "1020304056", name: "Roberto Castro", business: "Librería Central", email: "roberto@ejemplo.com", status: "Inactivo", activeLoans: 0, totalBorrowed: 1500000, activationDate: "2023-07-30", riskLevel: "B", paymentDate: "-", monthlyPayment: 0, interest: 0, daysOverdue: 0 },
    { id: "900123457", name: "Sofía Ramírez", business: "Tech Solutions SAS", email: "sofia@tech.com", status: "Bloqueado", activeLoans: 0, totalBorrowed: 5000000, activationDate: "2023-09-14", riskLevel: "D", paymentDate: "-", monthlyPayment: 0, interest: 0, daysOverdue: 0 },
  ];

  const filteredUsers = activeTab === "Todos"
    ? allUsers
    : allUsers.filter(user => user.status === activeTab);

  const tabs = [
    { label: "DIRECTORIO DE USUARIOS", value: "Todos" as UserStatus, count: allUsers.length },
    { label: "ACTIVOS", value: "Activo" as UserStatus, count: allUsers.filter(u => u.status === "Activo").length },
    { label: "EN MORA", value: "En mora" as UserStatus, count: allUsers.filter(u => u.status === "En mora").length },
    { label: "INACTIVOS", value: "Inactivo" as UserStatus, count: allUsers.filter(u => u.status === "Inactivo").length },
    { label: "BLOQUEADOS", value: "Bloqueado" as UserStatus, count: allUsers.filter(u => u.status === "Bloqueado").length },
  ];

  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
        <p className="text-sm md:text-base text-gray-600">Administra clientes y perfiles por estado</p>
      </div>

      {/* Risk Level Guide */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-base md:text-lg">A-D</span>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">Niveles de Riesgo</h3>
            <p className="text-xs md:text-sm text-gray-600">Guía de calificación crediticia para decisiones</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border-2 border-green-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-300">
                <span className="text-green-700 font-bold text-lg">A</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Riesgo Bajo</p>
                <p className="text-xs text-gray-500">Aprobación ideal</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-300">
                <span className="text-yellow-700 font-bold text-lg">B</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Riesgo Medio Bajo</p>
                <p className="text-xs text-gray-500">Revisión normal</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-orange-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300">
                <span className="text-orange-700 font-bold text-lg">C</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Riesgo Medio Alto</p>
                <p className="text-xs text-gray-500">Revisión exhaustiva</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-red-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-300">
                <span className="text-red-700 font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Riesgo Alto</p>
                <p className="text-xs text-gray-500">Probable rechazo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-1 min-w-[160px] px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all relative ${
                activeTab === tab.value
                  ? 'text-[#7C4DFF] bg-[#EDE7F6]/50 border-b-2 border-[#7C4DFF]'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>{tab.label}</span>
                <span className={`inline-flex items-center justify-center min-w-[20px] px-1.5 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.value
                    ? 'bg-[#7C4DFF] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, cédula o NIT..."
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
              />
            </div>
          </div>
          <Link to="/admin/usuarios/nuevo" className="flex items-center gap-2 px-4 py-2 bg-[#F5A623] text-white rounded-lg text-sm font-bold hover:bg-[#E09612] transition-colors shadow-sm shadow-[#F5A623]/20">
            <UserIcon className="h-4 w-4" strokeWidth={2.5} />
            Nuevo Usuario
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Usuario / Negocio</th>
                <th className="px-4 py-3.5 font-semibold">Identificación</th>
                <th className="px-4 py-3.5 font-semibold text-center">Fecha Activación</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
                <th className="px-4 py-3.5 font-semibold text-center">Nivel Riesgo</th>
                <th className="px-4 py-3.5 font-semibold text-center">Créditos Activos</th>
                <th className="px-4 py-3.5 font-semibold text-center">Fecha de Pago</th>
                <th className="px-4 py-3.5 font-semibold text-right">Cuota Mensual</th>
                <th className="px-4 py-3.5 font-semibold text-right">Intereses</th>
                <th className="px-4 py-3.5 font-semibold text-center">Días de Mora</th>
                <th className="px-4 py-3.5 font-semibold text-right">Total Histórico</th>
                <th className="px-4 py-3.5 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-gray-600 font-bold text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.business}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-gray-600 whitespace-nowrap">{user.id}</td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-600 whitespace-nowrap">
                    {new Date(user.activationDate).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${
                      user.status === 'Activo' ? 'bg-[#FFF4E5] text-[#F5A623] border-[#F5A623]/30 font-bold' :
                      user.status === 'En mora' ? 'bg-gray-800 text-white border-gray-900' :
                      user.status === 'Inactivo' ? 'bg-gray-50 text-gray-400 border-gray-200' :
                      'bg-red-50 text-red-700 border-red-200 font-bold'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                      user.riskLevel === 'A' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                      user.riskLevel === 'B' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300' :
                      user.riskLevel === 'C' ? 'bg-orange-100 text-orange-700 border-2 border-orange-300' :
                      'bg-red-100 text-red-700 border-2 border-red-300'
                    }`}>
                      {user.riskLevel}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm font-medium text-gray-900">
                    {user.activeLoans}
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-600 whitespace-nowrap">
                    {user.paymentDate}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                    {user.monthlyPayment > 0 ? `$${user.monthlyPayment.toLocaleString('es-CO')}` : '-'}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right whitespace-nowrap">
                    {user.interest > 0 ? (
                      <span className="text-red-600 font-bold">${user.interest.toLocaleString('es-CO')}</span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm whitespace-nowrap">
                    {user.daysOverdue > 0 ? (
                      <span className="inline-flex items-center justify-center min-w-[28px] px-2 py-1 bg-red-100 text-red-700 border border-red-300 rounded-full font-bold">
                        {user.daysOverdue}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                    ${user.totalBorrowed.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <Link
                      to={`/admin/usuarios/${user.id}`}
                      className="inline-block text-xs font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      Ver perfil
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500 flex justify-between items-center">
          <span>
            Mostrando {filteredUsers.length > 0 ? '1' : '0'} a {filteredUsers.length} de {filteredUsers.length} usuario{filteredUsers.length !== 1 ? 's' : ''}
            {activeTab !== "Todos" && <span className="font-medium text-gray-700"> ({activeTab})</span>}
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Anterior</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50" disabled>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
