import { Link, useParams } from "react-router";
import { ArrowLeft, User, FileText, Download, AlertCircle, CheckCircle, Clock, XCircle } from "lucide-react";

export function AdminUserProfile() {
  const { userId } = useParams();

  // Datos de ejemplo del usuario
  const userData = {
    id: "1020304050",
    name: "Juan Pérez",
    business: "Ferretería El Centro",
    email: "juan@ejemplo.com",
    phone: "300 123 4567",
    status: "Activo",
    riskLevel: "B",
    activationDate: "2024-01-15",
    documentType: "Cédula de Ciudadanía",
  };

  // Datos del préstamo activo
  const activeLoan = {
    loanId: "CRE-001-2024",
    amount: 5000000,
    requestDate: "2024-02-01",
    approvalDate: "2024-02-03",
    disbursementDate: "2024-02-05",
    term: 12,
    interestRate: 2.5,
    insurance: 50000,
    administrationFee: 75000,
    monthlyPayment: 461042,
    remainingBalance: 3750000,
    paidInstallments: 3,
    totalInstallments: 12,
  };

  // Tabla de amortización
  const amortizationTable = [
    { installment: 1, date: "05 Mar 2024", capital: 357459, interest: 52500, insurance: 4167, admin: 6250, total: 420376, balance: 4642541, status: "Pagado", paymentDate: "05 Mar 2024" },
    { installment: 2, date: "05 Abr 2024", capital: 366396, interest: 43563, insurance: 4167, admin: 6250, total: 420376, balance: 4276145, status: "Pagado", paymentDate: "05 Abr 2024" },
    { installment: 3, date: "05 May 2024", capital: 375556, interest: 34420, insurance: 4167, admin: 6250, total: 420393, balance: 3900589, status: "Pagado", paymentDate: "07 May 2024" },
    { installment: 4, date: "05 Jun 2024", capital: 384944, interest: 25032, insurance: 4167, admin: 6250, total: 420393, balance: 3515645, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 5, date: "05 Jul 2024", capital: 394568, interest: 15408, insurance: 4167, admin: 6250, total: 420393, balance: 3121077, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 6, date: "05 Ago 2024", capital: 404433, interest: 5543, insurance: 4167, admin: 6250, total: 420393, balance: 2716644, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 7, date: "05 Sep 2024", capital: 414545, interest: 0, insurance: 4167, admin: 6250, total: 424962, balance: 2302099, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 8, date: "05 Oct 2024", capital: 424911, interest: 0, insurance: 4167, admin: 6250, total: 435328, balance: 1877188, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 9, date: "05 Nov 2024", capital: 435537, interest: 0, insurance: 4167, admin: 6250, total: 445954, balance: 1441651, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 10, date: "05 Dic 2024", capital: 446431, interest: 0, insurance: 4167, admin: 6250, total: 456848, balance: 995220, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 11, date: "05 Ene 2025", capital: 457601, interest: 0, insurance: 4167, admin: 6250, total: 468018, balance: 537619, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
    { installment: 12, date: "05 Feb 2025", capital: 469054, interest: 0, insurance: 4167, admin: 6250, total: 479471, balance: 0, status: "Pendiente", paymentDate: "-", daysOverdue: 0 },
  ];

  // Historial de pagos
  const paymentHistory = [
    { date: "05 Mar 2024", amount: 420376, method: "PSE", reference: "TRX-001234", status: "Completado" },
    { date: "05 Abr 2024", amount: 420376, method: "Transferencia", reference: "TRX-001456", status: "Completado" },
    { date: "07 May 2024", amount: 445576, method: "Efectivo", reference: "TRX-001789", status: "Completado", note: "Incluye interés de mora (2 días): $25,200" },
  ];

  // Documentos del usuario
  const userDocuments = [
    { name: "Cédula - Frontal", type: "Imagen", uploadDate: "15 Ene 2024", status: "Verificado" },
    { name: "Cédula - Reverso", type: "Imagen", uploadDate: "15 Ene 2024", status: "Verificado" },
    { name: "Selfie con Cédula", type: "Imagen", uploadDate: "15 Ene 2024", status: "Verificado" },
    { name: "RUT", type: "PDF", uploadDate: "15 Ene 2024", status: "Verificado" },
    { name: "Extracto Bancario", type: "PDF", uploadDate: "15 Ene 2024", status: "Verificado" },
    { name: "Cámara de Comercio", type: "PDF", uploadDate: "15 Ene 2024", status: "Verificado" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pagado':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Pendiente':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      case 'Atrasado':
        return 'bg-red-50 text-red-700 border border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/usuarios"
            className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shrink-0"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Perfil de Usuario</h1>
            <p className="text-sm md:text-base text-gray-600">Información completa y gestión del cliente</p>
          </div>
        </div>
        <div className="flex gap-3 ml-14">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Editar perfil
          </button>
          <button className="px-4 py-2 bg-[#F5A623] text-white rounded-lg text-xs md:text-sm font-bold hover:bg-[#E09612] transition-colors shadow-sm shadow-[#F5A623]/20">
            Nuevo Crédito
          </button>
        </div>
      </div>

      {/* User Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Info */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{userData.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-sm text-gray-500">{userData.business}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Estado</p>
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold border ${
                userData.status === 'Activo' ? 'bg-[#FFF4E5] text-[#F5A623] border-[#F5A623]/30' : 'bg-gray-50 text-gray-400 border-gray-200'
              }`}>
                {userData.status}
              </span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Nivel de Riesgo</p>
              <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${
                userData.riskLevel === 'A' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                userData.riskLevel === 'B' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300' :
                userData.riskLevel === 'C' ? 'bg-orange-100 text-orange-700 border-2 border-orange-300' :
                'bg-red-100 text-red-700 border-2 border-red-300'
              }`}>
                {userData.riskLevel}
              </span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Identificación</p>
              <p className="text-sm font-mono text-gray-900">{userData.id}</p>
              <p className="text-xs text-gray-500">{userData.documentType}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Contacto</p>
              <p className="text-sm text-gray-900">{userData.email}</p>
              <p className="text-sm text-gray-900">{userData.phone}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Fecha de Activación</p>
              <p className="text-sm text-gray-900">
                {new Date(userData.activationDate).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Loan Summary */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-white/80 mb-1">Crédito Activo</p>
              <p className="text-xs font-mono text-white/60">{activeLoan.loanId}</p>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
              {activeLoan.paidInstallments} de {activeLoan.totalInstallments} cuotas
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-xs text-white/70 mb-1">Monto Prestado</p>
              <p className="text-lg font-bold">${activeLoan.amount.toLocaleString('es-CO')}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Saldo Pendiente</p>
              <p className="text-lg font-bold">${activeLoan.remainingBalance.toLocaleString('es-CO')}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Cuota Mensual</p>
              <p className="text-lg font-bold">${activeLoan.monthlyPayment.toLocaleString('es-CO')}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Tasa de Interés</p>
              <p className="text-lg font-bold">{activeLoan.interestRate}% mes</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-white/70 mb-1">Fecha Solicitud</p>
              <p className="text-sm font-medium">{activeLoan.requestDate}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Fecha Aprobación</p>
              <p className="text-sm font-medium">{activeLoan.approvalDate}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Fecha Desembolso</p>
              <p className="text-sm font-medium">{activeLoan.disbursementDate}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-white/70 mb-1">Seguro Total</p>
              <p className="text-sm font-medium">${activeLoan.insurance.toLocaleString('es-CO')}</p>
            </div>
            <div>
              <p className="text-xs text-white/70 mb-1">Cuota Administración</p>
              <p className="text-sm font-medium">${activeLoan.administrationFee.toLocaleString('es-CO')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amortization Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">Tabla de Amortización</h3>
            <p className="text-xs md:text-sm text-gray-600">Detalle de capital, intereses, seguros y gastos</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            Descargar PDF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold text-center">Cuota</th>
                <th className="px-4 py-3.5 font-semibold">Fecha Vencimiento</th>
                <th className="px-4 py-3.5 font-semibold text-right">Capital</th>
                <th className="px-4 py-3.5 font-semibold text-right">Interés</th>
                <th className="px-4 py-3.5 font-semibold text-right">Seguro</th>
                <th className="px-4 py-3.5 font-semibold text-right">Admin</th>
                <th className="px-4 py-3.5 font-semibold text-right">Total Cuota</th>
                <th className="px-4 py-3.5 font-semibold text-right">Saldo</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
                <th className="px-4 py-3.5 font-semibold text-center">Fecha Pago</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {amortizationTable.map((row) => (
                <tr key={row.installment} className={`hover:bg-gray-50 transition-colors ${row.status === 'Pagado' ? 'bg-green-50/30' : ''}`}>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-bold text-gray-700">
                      {row.installment}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                    ${row.capital.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-600 whitespace-nowrap">
                    ${row.interest.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-600 whitespace-nowrap">
                    ${row.insurance.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-600 whitespace-nowrap">
                    ${row.admin.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right font-bold text-gray-900 whitespace-nowrap">
                    ${row.total.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-500 whitespace-nowrap">
                    ${row.balance.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusBadge(row.status)}`}>
                      {row.status === 'Pagado' && <CheckCircle className="h-3 w-3" />}
                      {row.status === 'Pendiente' && <Clock className="h-3 w-3" />}
                      {row.status === 'Atrasado' && <XCircle className="h-3 w-3" />}
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-600 whitespace-nowrap">
                    {row.paymentDate}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold border-t-2 border-gray-300">
                <td colSpan={2} className="px-4 py-4 text-sm text-gray-900">TOTALES</td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${amortizationTable.reduce((sum, row) => sum + row.capital, 0).toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${amortizationTable.reduce((sum, row) => sum + row.interest, 0).toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${amortizationTable.reduce((sum, row) => sum + row.insurance, 0).toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${amortizationTable.reduce((sum, row) => sum + row.admin, 0).toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${amortizationTable.reduce((sum, row) => sum + row.total, 0).toLocaleString('es-CO')}
                </td>
                <td colSpan={3}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-bold text-gray-900">Historial de Pagos</h3>
          <p className="text-xs md:text-sm text-gray-600">Registro completo de transacciones realizadas</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Fecha</th>
                <th className="px-4 py-3.5 font-semibold text-right">Monto Pagado</th>
                <th className="px-4 py-3.5 font-semibold">Método de Pago</th>
                <th className="px-4 py-3.5 font-semibold">Referencia</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
                <th className="px-4 py-3.5 font-semibold">Observaciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paymentHistory.map((payment, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 text-sm text-gray-900 whitespace-nowrap">{payment.date}</td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 font-bold whitespace-nowrap">
                    ${payment.amount.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-600">{payment.method}</td>
                  <td className="px-4 py-3.5 text-sm font-mono text-gray-500">{payment.reference}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium">
                      <CheckCircle className="h-3 w-3" />
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-600">
                    {payment.note && (
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-red-600">{payment.note}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-bold text-gray-900">Documentación del Usuario</h3>
          <p className="text-xs md:text-sm text-gray-600">Archivos y verificaciones de identidad</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Documento</th>
                <th className="px-4 py-3.5 font-semibold">Tipo</th>
                <th className="px-4 py-3.5 font-semibold">Fecha de Carga</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
                <th className="px-4 py-3.5 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {userDocuments.map((doc, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-600">{doc.type}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{doc.uploadDate}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium">
                      <CheckCircle className="h-3 w-3" />
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button className="flex items-center gap-1 mx-auto px-3 py-1.5 text-xs font-medium text-[#7C4DFF] hover:bg-[#EDE7F6] rounded-lg transition-colors">
                      <Download className="h-3 w-3" />
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
