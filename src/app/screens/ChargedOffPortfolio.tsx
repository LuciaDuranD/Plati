import { Link } from "react-router";
import { AlertTriangle, Download, TrendingDown, Users, DollarSign, Calendar } from "lucide-react";

export function ChargedOffPortfolio() {
  // Datos de ejemplo de cartera castigada
  const chargedOffLoans = [
    {
      userId: "1020304052",
      userName: "Carlos Ruiz",
      business: "Taller Mecánico",
      loanId: "CRE-045-2023",
      originalAmount: 3500000,
      outstandingBalance: 2850000,
      capitalOwed: 2100000,
      interestOwed: 525000,
      lateInterest: 225000,
      totalOwed: 2850000,
      disbursementDate: "15 Jun 2023",
      lastPaymentDate: "10 Ago 2023",
      daysOverdue: 180,
      riskLevel: "D",
      chargeOffDate: "10 Dic 2023",
      recoveryAttempts: 8,
      recoveryStatus: "En gestión judicial",
    },
    {
      userId: "1020304070",
      userName: "Diana Vargas",
      business: "Boutique Fashion",
      loanId: "CRE-067-2023",
      originalAmount: 5000000,
      outstandingBalance: 4200000,
      capitalOwed: 3150000,
      interestOwed: 735000,
      lateInterest: 315000,
      totalOwed: 4200000,
      disbursementDate: "20 Jul 2023",
      lastPaymentDate: "05 Sep 2023",
      daysOverdue: 165,
      riskLevel: "D",
      chargeOffDate: "25 Dic 2023",
      recoveryAttempts: 6,
      recoveryStatus: "En negociación",
    },
    {
      userId: "900234567",
      userName: "Empresa ABC SAS",
      business: "Comercializadora ABC",
      loanId: "CRE-089-2023",
      originalAmount: 4800000,
      outstandingBalance: 3960000,
      capitalOwed: 3000000,
      interestOwed: 660000,
      lateInterest: 300000,
      totalOwed: 3960000,
      disbursementDate: "05 Ago 2023",
      lastPaymentDate: "20 Sep 2023",
      daysOverdue: 150,
      riskLevel: "D",
      chargeOffDate: "05 Ene 2024",
      recoveryAttempts: 5,
      recoveryStatus: "Cobro pre-jurídico",
    },
    {
      userId: "1020304088",
      userName: "Roberto Mejía",
      business: "Restaurante El Sabor",
      loanId: "CRE-103-2023",
      originalAmount: 2500000,
      outstandingBalance: 2175000,
      capitalOwed: 1625000,
      interestOwed: 387500,
      lateInterest: 162500,
      totalOwed: 2175000,
      disbursementDate: "10 Sep 2023",
      lastPaymentDate: "01 Nov 2023",
      daysOverdue: 140,
      riskLevel: "D",
      chargeOffDate: "20 Ene 2024",
      recoveryAttempts: 4,
      recoveryStatus: "En gestión",
    },
  ];

  const totalChargedOff = chargedOffLoans.reduce((sum, loan) => sum + loan.totalOwed, 0);
  const totalCapital = chargedOffLoans.reduce((sum, loan) => sum + loan.capitalOwed, 0);
  const totalInterest = chargedOffLoans.reduce((sum, loan) => sum + loan.interestOwed, 0);
  const totalLateInterest = chargedOffLoans.reduce((sum, loan) => sum + loan.lateInterest, 0);
  const averageDaysOverdue = Math.round(chargedOffLoans.reduce((sum, loan) => sum + loan.daysOverdue, 0) / chargedOffLoans.length);

  const getRecoveryStatusColor = (status: string) => {
    switch (status) {
      case 'En gestión judicial':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'En negociación':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Cobro pre-jurídico':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'En gestión':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Cartera Castigada</h1>
          <p className="text-sm md:text-base text-gray-600">Gestión de créditos en cobro especial</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar reporte</span>
            <span className="sm:hidden">Exportar</span>
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex items-start gap-3 md:gap-4">
          <div className="h-10 w-10 md:h-12 md:w-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-bold text-red-900 mb-2">Cartera de Alto Riesgo</h3>
            <p className="text-xs md:text-sm text-red-800 leading-relaxed">
              Esta sección contiene créditos con más de <span className="font-bold">120 días de mora</span> que han sido clasificados como cartera castigada.
              Requieren gestión de cobro especializada y pueden estar en proceso judicial o de negociación.
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-red-700" />
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">
              CRÍTICO
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium">Total Cartera Castigada</p>
          <p className="text-3xl font-bold text-red-700 mt-1">${(totalChargedOff / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-gray-500 mt-2">${totalChargedOff.toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="h-5 w-5 text-orange-700" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Capital Adeudado</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">${(totalCapital / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-gray-500 mt-2">{((totalCapital / totalChargedOff) * 100).toFixed(1)}% del total</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-yellow-700" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Clientes Afectados</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{chargedOffLoans.length}</p>
          <p className="text-xs text-gray-500 mt-2">Usuarios en cobro especial</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Calendar className="h-5 w-5 text-gray-700" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Promedio Días Mora</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{averageDaysOverdue}</p>
          <p className="text-xs text-gray-500 mt-2">días promedio</p>
        </div>
      </div>

      {/* Summary by concept */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Composición de la Cartera Castigada</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Capital Original</p>
            <p className="text-2xl font-bold text-gray-900">${totalCapital.toLocaleString('es-CO')}</p>
            <p className="text-xs text-gray-600 mt-1">{((totalCapital / totalChargedOff) * 100).toFixed(1)}% del total adeudado</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Intereses Corrientes</p>
            <p className="text-2xl font-bold text-gray-900">${totalInterest.toLocaleString('es-CO')}</p>
            <p className="text-xs text-gray-600 mt-1">{((totalInterest / totalChargedOff) * 100).toFixed(1)}% del total adeudado</p>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <p className="text-xs uppercase tracking-wider text-red-600 font-semibold mb-2">Intereses de Mora</p>
            <p className="text-2xl font-bold text-red-700">${totalLateInterest.toLocaleString('es-CO')}</p>
            <p className="text-xs text-red-600 mt-1">{((totalLateInterest / totalChargedOff) * 100).toFixed(1)}% del total adeudado</p>
          </div>
        </div>
      </div>

      {/* Charged Off Loans Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-bold text-gray-900">Detalle de Créditos Castigados</h3>
          <p className="text-xs md:text-sm text-gray-600">Listado completo de obligaciones en cobro especial</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Cliente / Negocio</th>
                <th className="px-4 py-3.5 font-semibold">ID Crédito</th>
                <th className="px-4 py-3.5 font-semibold text-right">Monto Original</th>
                <th className="px-4 py-3.5 font-semibold text-right">Capital Adeudado</th>
                <th className="px-4 py-3.5 font-semibold text-right">Intereses</th>
                <th className="px-4 py-3.5 font-semibold text-right">Mora</th>
                <th className="px-4 py-3.5 font-semibold text-right">Total Adeudado</th>
                <th className="px-4 py-3.5 font-semibold text-center">Días Mora</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado Cobro</th>
                <th className="px-4 py-3.5 font-semibold text-center">Intentos</th>
                <th className="px-4 py-3.5 font-semibold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {chargedOffLoans.map((loan, i) => (
                <tr key={i} className="hover:bg-red-50/30 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-red-100 rounded-full flex items-center justify-center shrink-0 border-2 border-red-300">
                        <span className="text-red-700 font-bold text-sm">{loan.userName.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{loan.userName}</p>
                        <p className="text-xs text-gray-500 truncate">{loan.business}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-gray-600 whitespace-nowrap">{loan.loanId}</td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-600 whitespace-nowrap">
                    ${loan.originalAmount.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 font-medium whitespace-nowrap">
                    ${loan.capitalOwed.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-600 whitespace-nowrap">
                    ${loan.interestOwed.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-red-600 font-bold whitespace-nowrap">
                    ${loan.lateInterest.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-sm font-mono text-right text-gray-900 font-bold whitespace-nowrap">
                    ${loan.totalOwed.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center justify-center min-w-[50px] px-2 py-1 bg-red-100 text-red-700 border-2 border-red-300 rounded-full text-xs font-bold">
                      {loan.daysOverdue}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border-2 whitespace-nowrap ${getRecoveryStatusColor(loan.recoveryStatus)}`}>
                      {loan.recoveryStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm font-bold text-gray-900">
                    {loan.recoveryAttempts}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <Link
                      to={`/admin/usuarios/${loan.userId}`}
                      className="inline-block text-xs font-medium text-gray-700 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      Ver detalle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold border-t-2 border-gray-300">
                <td colSpan={2} className="px-4 py-4 text-sm text-gray-900">TOTALES</td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${chargedOffLoans.reduce((sum, loan) => sum + loan.originalAmount, 0).toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${totalCapital.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${totalInterest.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-red-700 whitespace-nowrap">
                  ${totalLateInterest.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-gray-900 whitespace-nowrap">
                  ${totalChargedOff.toLocaleString('es-CO')}
                </td>
                <td colSpan={4}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Recovery Actions Guide */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">Estados de Gestión de Cobro</h3>
            <p className="text-xs md:text-sm text-gray-600">Clasificación según el proceso de recuperación</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border-2 border-blue-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300">
                <span className="text-blue-700 font-bold text-xs">1</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">En gestión</p>
                <p className="text-xs text-gray-500">Contacto inicial</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-orange-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300">
                <span className="text-orange-700 font-bold text-xs">2</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Cobro pre-jurídico</p>
                <p className="text-xs text-gray-500">Gestión extrajudicial</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-300">
                <span className="text-yellow-700 font-bold text-xs">3</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">En negociación</p>
                <p className="text-xs text-gray-500">Acuerdos de pago</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border-2 border-red-300 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-300">
                <span className="text-red-700 font-bold text-xs">4</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Gestión judicial</p>
                <p className="text-xs text-gray-500">Proceso legal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
