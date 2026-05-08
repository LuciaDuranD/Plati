import { Filter, Search, User as UserIcon, MoreVertical } from "lucide-react";

export function UserManagement() {
  const users = [
    { id: "1020304050", name: "Juan Pérez", business: "Ferretería El Centro", email: "juan@ejemplo.com", status: "Activo", activeLoans: 1, totalBorrowed: 5000000 },
    { id: "1020304051", name: "María Gómez", business: "Restaurante Sabor", email: "maria@ejemplo.com", status: "Activo", activeLoans: 0, totalBorrowed: 8000000 },
    { id: "1020304052", name: "Carlos Ruiz", business: "Taller Mecánico", email: "carlos@ejemplo.com", status: "En mora", activeLoans: 1, totalBorrowed: 3500000 },
    { id: "1020304053", name: "Ana Torres", business: "Panadería La 10", email: "ana@ejemplo.com", status: "Inactivo", activeLoans: 0, totalBorrowed: 0 },
    { id: "900123456", name: "Luis Fernando", business: "Empresa XYZ SAS", email: "luis@xyz.com", status: "Bloqueado", activeLoans: 0, totalBorrowed: 15000000 },
  ];

  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Directorio de Usuarios</h1>
        <p className="text-gray-600">Administra la base de clientes y sus perfiles.</p>
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
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Estado
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#F5A623] text-white rounded-lg text-sm font-bold hover:bg-[#E09612] transition-colors shadow-sm shadow-[#F5A623]/20">
            <UserIcon className="h-4 w-4" strokeWidth={2.5} />
            Nuevo Usuario
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Usuario / Negocio</th>
                <th className="px-6 py-4 font-semibold">Identificación</th>
                <th className="px-6 py-4 font-semibold text-center">Estado</th>
                <th className="px-6 py-4 font-semibold text-center">Créditos Activos</th>
                <th className="px-6 py-4 font-semibold text-right">Total Histórico</th>
                <th className="px-6 py-4 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-gray-600 font-bold text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.business}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      user.status === 'Activo' ? 'bg-[#FFF4E5] text-[#F5A623] border-[#F5A623]/30 font-bold' :
                      user.status === 'En mora' ? 'bg-gray-800 text-white border-gray-900' :
                      user.status === 'Inactivo' ? 'bg-gray-50 text-gray-400 border-gray-200' :
                      'bg-white text-gray-500 border-gray-300 line-through'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                    {user.activeLoans}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-right text-gray-900">
                    $ {user.totalBorrowed.toLocaleString('es-CO')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors">
                      Ver perfil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500 flex justify-between items-center">
          <span>Mostrando 1 a 5 de 1,248 usuarios</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
