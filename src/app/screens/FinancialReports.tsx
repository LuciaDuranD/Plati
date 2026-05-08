import { Link } from "react-router";
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect, useRef, cloneElement } from "react";

function SafeChartContainer({ children, height = 256 }: { children: React.ReactElement, height: number }) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height }}>
      {size.width > 50 && size.height > 50
        ? cloneElement(children, { width: size.width, height: size.height })
        : null}
    </div>
  );
}

export function FinancialReports() {
  const monthlyData = [
    {
      month: "Enero",
      disbursements: 45000000,
      income: 6750000,
      expenses: 1350000,
      netProfit: 5400000,
    },
    {
      month: "Febrero",
      disbursements: 35000000,
      income: 5250000,
      expenses: 1050000,
      netProfit: 4200000,
    },
    {
      month: "Marzo",
      disbursements: 52000000,
      income: 7800000,
      expenses: 1560000,
      netProfit: 6240000,
    },
    {
      month: "Abril",
      disbursements: 47000000,
      income: 7050000,
      expenses: 1410000,
      netProfit: 5640000,
    },
    {
      month: "Mayo",
      disbursements: 63000000,
      income: 9450000,
      expenses: 1890000,
      netProfit: 7560000,
    },
    {
      month: "Junio",
      disbursements: 58000000,
      income: 8700000,
      expenses: 1740000,
      netProfit: 6960000,
    },
  ];

  const totalDisbursements = monthlyData.reduce((sum, item) => sum + item.disbursements, 0);
  const totalIncome = monthlyData.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = monthlyData.reduce((sum, item) => sum + item.expenses, 0);
  const totalNetProfit = monthlyData.reduce((sum, item) => sum + item.netProfit, 0);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          to="/admin"
          className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shrink-0"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Reportes Financieros</h1>
          <p className="text-sm md:text-base text-gray-600">Desembolsos, ingresos y utilidades mensuales</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-[#EDE7F6] rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-[#7C4DFF]" />
            </div>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-sm text-gray-500 font-medium">Total Desembolsado</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">${(totalDisbursements / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-gray-500 mt-2">${totalDisbursements.toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-700" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Ingresos Totales</p>
          <p className="text-3xl font-bold text-green-700 mt-1">${(totalIncome / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-gray-500 mt-2">${totalIncome.toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="h-5 w-5 text-red-700" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Gastos Operativos</p>
          <p className="text-3xl font-bold text-red-700 mt-1">${(totalExpenses / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-gray-500 mt-2">${totalExpenses.toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="h-10 w-10 bg-[#FFF4E5] rounded-lg flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-[#F5A623]" />
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Utilidad Neta</p>
          <p className="text-3xl font-bold text-[#F5A623] mt-1">${(totalNetProfit / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-gray-500 mt-2">${totalNetProfit.toLocaleString('es-CO')}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disbursements Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Desembolsos Mensuales</h3>
            <button className="text-xs md:text-sm font-medium text-gray-600 hover:text-gray-900">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <div className="w-full">
            <SafeChartContainer height={300}>
              <BarChart data={monthlyData} id="disbursements-chart">
                <CartesianGrid key="cartesian-grid" strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis key="x-axis" dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis
                  key="y-axis"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  key="tooltip"
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
                  formatter={(value: number) => [`$${value.toLocaleString('es-CO')}`, 'Desembolsos']}
                />
                <Bar key="bar-series" dataKey="disbursements" fill="#7C4DFF" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </SafeChartContainer>
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Ingresos vs Gastos</h3>
            <button className="text-xs md:text-sm font-medium text-gray-600 hover:text-gray-900">
              <Download className="h-4 w-4" />
            </button>
          </div>
          <div className="w-full">
            <SafeChartContainer height={300}>
              <LineChart data={monthlyData} id="income-expenses-chart">
                <CartesianGrid key="cartesian-grid" strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis key="x-axis" dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis
                  key="y-axis"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  key="tooltip"
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
                  formatter={(value: number) => `$${value.toLocaleString('es-CO')}`}
                />
                <Legend key="legend" />
                <Line key="income-line" type="monotone" dataKey="income" stroke="#10B981" strokeWidth={3} name="Ingresos" isAnimationActive={false} />
                <Line key="expenses-line" type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={3} name="Gastos" isAnimationActive={false} />
              </LineChart>
            </SafeChartContainer>
          </div>
        </div>
      </div>

      {/* Detailed Monthly Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">Detalle Mensual</h3>
            <p className="text-xs md:text-sm text-gray-600">Resumen financiero detallado por mes</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
            Exportar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Mes</th>
                <th className="px-4 py-3.5 font-semibold text-right">Desembolsos</th>
                <th className="px-4 py-3.5 font-semibold text-right">Ingresos</th>
                <th className="px-4 py-3.5 font-semibold text-right">Gastos</th>
                <th className="px-4 py-3.5 font-semibold text-right">Utilidad Neta</th>
                <th className="px-4 py-3.5 font-semibold text-right">Margen %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {monthlyData.map((row, i) => {
                const margin = ((row.netProfit / row.income) * 100).toFixed(1);
                return (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 text-sm font-medium text-gray-900">{row.month}</td>
                    <td className="px-4 py-3.5 text-sm font-mono text-right text-[#7C4DFF] font-bold whitespace-nowrap">
                      ${row.disbursements.toLocaleString('es-CO')}
                    </td>
                    <td className="px-4 py-3.5 text-sm font-mono text-right text-green-700 font-bold whitespace-nowrap">
                      ${row.income.toLocaleString('es-CO')}
                    </td>
                    <td className="px-4 py-3.5 text-sm font-mono text-right text-red-600 whitespace-nowrap">
                      ${row.expenses.toLocaleString('es-CO')}
                    </td>
                    <td className="px-4 py-3.5 text-sm font-mono text-right text-[#F5A623] font-bold whitespace-nowrap">
                      ${row.netProfit.toLocaleString('es-CO')}
                    </td>
                    <td className="px-4 py-3.5 text-sm font-bold text-right text-gray-900">
                      {margin}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold border-t-2 border-gray-300">
                <td className="px-4 py-4 text-sm text-gray-900">TOTALES</td>
                <td className="px-4 py-4 text-sm font-mono text-right text-[#7C4DFF] whitespace-nowrap">
                  ${totalDisbursements.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-green-700 whitespace-nowrap">
                  ${totalIncome.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-red-600 whitespace-nowrap">
                  ${totalExpenses.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm font-mono text-right text-[#F5A623] whitespace-nowrap">
                  ${totalNetProfit.toLocaleString('es-CO')}
                </td>
                <td className="px-4 py-4 text-sm text-right text-gray-900">
                  {((totalNetProfit / totalIncome) * 100).toFixed(1)}%
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl shadow-lg p-6 text-white">
          <p className="text-sm text-white/80 mb-2">Promedio Mensual Desembolsado</p>
          <p className="text-3xl font-bold mb-1">${(totalDisbursements / monthlyData.length / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-white/60">${(totalDisbursements / monthlyData.length).toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-lg p-6 text-white">
          <p className="text-sm text-white/80 mb-2">Promedio Mensual Ingresos</p>
          <p className="text-3xl font-bold mb-1">${(totalIncome / monthlyData.length / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-white/60">${(totalIncome / monthlyData.length).toLocaleString('es-CO')}</p>
        </div>

        <div className="bg-gradient-to-br from-[#F5A623] to-[#E09612] rounded-2xl shadow-lg p-6 text-white">
          <p className="text-sm text-white/80 mb-2">Promedio Mensual Utilidad</p>
          <p className="text-3xl font-bold mb-1">${(totalNetProfit / monthlyData.length / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-white/60">${(totalNetProfit / monthlyData.length).toLocaleString('es-CO')}</p>
        </div>
      </div>
    </div>
  );
}
