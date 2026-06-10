import { TrendingUp, TrendingDown, DollarSign, Percent, Target, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function BudgetControl() {
  const kpiData = [
    {
      title: 'Ingresos',
      value: '$2,450M',
      budget: '$2,600M',
      variance: '-5.8%',
      trend: 'down',
      icon: DollarSign
    },
    {
      title: 'Utilidad',
      value: '$850M',
      budget: '$910M',
      variance: '-6.6%',
      trend: 'down',
      icon: Target
    },
    {
      title: 'Margen',
      value: '34.7%',
      budget: '35.0%',
      variance: '-0.3pp',
      trend: 'down',
      icon: Percent
    },
    {
      title: 'Cumplimiento Presupuesto',
      value: '94.2%',
      target: '100%',
      variance: '-5.8%',
      trend: 'down',
      icon: TrendingUp
    }
  ];

  const financialData = [
    {
      concept: 'Ingresos',
      actual: 2450,
      bdg: 2600,
      py: 2180,
      varianceBdg: -150,
      variancePY: 270,
      varianceBdgPct: -5.8,
      variancePYPct: 12.4
    },
    {
      concept: 'Costos Variables',
      actual: 980,
      bdg: 1040,
      py: 905,
      varianceBdg: -60,
      variancePY: 75,
      varianceBdgPct: -5.8,
      variancePYPct: 8.3
    },
    {
      concept: 'Costos Fijos',
      actual: 620,
      bdg: 650,
      py: 633,
      varianceBdg: -30,
      variancePY: -13,
      varianceBdgPct: -4.6,
      variancePYPct: -2.1
    },
    {
      concept: 'Margen Bruto',
      actual: 1470,
      bdg: 1560,
      py: 1275,
      varianceBdg: -90,
      variancePY: 195,
      varianceBdgPct: -5.8,
      variancePYPct: 15.3,
      isSubtotal: true
    },
    {
      concept: 'Gastos Operativos',
      actual: 620,
      bdg: 650,
      py: 558,
      varianceBdg: -30,
      variancePY: 62,
      varianceBdgPct: -4.6,
      variancePYPct: 11.1
    },
    {
      concept: 'Utilidad Neta',
      actual: 850,
      bdg: 910,
      py: 717,
      varianceBdg: -60,
      variancePY: 133,
      varianceBdgPct: -6.6,
      variancePYPct: 18.5,
      isTotal: true
    }
  ];

  const chartData = [
    { name: 'Ingresos', Actual: 2450, Budget: 2600 },
    { name: 'Costos Variables', Actual: 980, Budget: 1040 },
    { name: 'Costos Fijos', Actual: 620, Budget: 650 },
    { name: 'Margen Bruto', Actual: 1470, Budget: 1560 },
    { name: 'Gastos Operativos', Actual: 620, Budget: 650 },
    { name: 'Utilidad Neta', Actual: 850, Budget: 910 }
  ];

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString('en-US')}M`;
  };

  const getVarianceColor = (value: number, isIngresos: boolean = false) => {
    if (isIngresos) {
      return value >= 0 ? 'text-green-600' : 'text-red-600';
    }
    return value <= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getVarianceIcon = (value: number) => {
    return value >= 0 ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  return (
    <div className="space-y-4 md:space-y-6 bg-[#F8F9FC] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-[#2D1AA7]">Presupuesto y Control</h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">Dashboard Ejecutivo Financiero</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs md:text-sm text-gray-600">Período Actual</p>
            <p className="text-base md:text-lg font-bold text-[#2D1AA7]">Junio 2026</p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 space-y-4 md:space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#5E35B1] flex items-center justify-center shadow-md`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-0.5 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full ${
                      kpi.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 md:h-4 md:w-4 text-red-600" />
                      )}
                      <span className={`text-xs md:text-sm font-bold ${
                        kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {kpi.variance}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-1.5">{kpi.title}</p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2D1AA7] mb-1">{kpi.value}</p>
                  <p className="text-xs md:text-sm text-gray-500">Budget: {kpi.budget || kpi.target}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Financial Table */}
        <Card className="border-none shadow-sm md:shadow-md">
          <CardHeader className="bg-gradient-to-r from-[#2D1AA7] to-[#4527A0] text-white rounded-t-lg p-4 md:p-6">
            <CardTitle className="text-lg md:text-2xl font-bold">Estado Financiero</CardTitle>
            <p className="text-xs md:text-sm text-white/80 mt-1">Actual vs Presupuesto vs Año Anterior</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#F8F9FC] border-b-2 border-[#2D1AA7]">
                    <th className="text-left py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#2D1AA7]">Concepto</th>
                    <th className="text-right py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">Actual</th>
                    <th className="text-right py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">BDG</th>
                    <th className="text-right py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">PY</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7] border-l-2 border-gray-300" colSpan={2}>
                      Var vs BDG
                    </th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7] border-l-2 border-gray-300" colSpan={2}>
                      Var vs PY
                    </th>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-300">
                    <th className="py-2 px-3 md:px-4"></th>
                    <th className="py-2 px-2 md:px-3"></th>
                    <th className="py-2 px-2 md:px-3"></th>
                    <th className="py-2 px-2 md:px-3"></th>
                    <th className="text-right py-2 px-2 text-xs font-semibold text-gray-700 border-l-2 border-gray-300">$</th>
                    <th className="text-right py-2 px-2 text-xs font-semibold text-gray-700">%</th>
                    <th className="text-right py-2 px-2 text-xs font-semibold text-gray-700 border-l-2 border-gray-300">$</th>
                    <th className="text-right py-2 px-2 text-xs font-semibold text-gray-700">%</th>
                  </tr>
                </thead>
                <tbody>
                  {financialData.map((row, index) => (
                    <tr
                      key={index}
                      className={`
                        hover:bg-[#F8F9FC] transition-colors duration-200
                        ${row.isSubtotal ? 'bg-gray-50 border-t-2 border-gray-300 font-semibold' : ''}
                        ${row.isTotal ? 'bg-gradient-to-r from-[#7C4DFF]/10 to-[#5E35B1]/10 border-t-2 border-[#2D1AA7] font-bold' : ''}
                        ${!row.isSubtotal && !row.isTotal ? 'border-b border-gray-200' : ''}
                      `}
                    >
                      <td className={`py-2.5 md:py-3 px-3 md:px-4 text-xs md:text-sm ${row.isTotal ? 'text-[#2D1AA7]' : 'text-gray-900'}`}>
                        {row.concept}
                      </td>
                      <td className={`text-right py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm ${row.isTotal ? 'text-[#2D1AA7]' : 'text-gray-900'}`}>
                        {formatCurrency(row.actual)}
                      </td>
                      <td className="text-right py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm text-gray-600">
                        {formatCurrency(row.bdg)}
                      </td>
                      <td className="text-right py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm text-gray-600">
                        {formatCurrency(row.py)}
                      </td>

                      {/* Variance vs Budget */}
                      <td className={`text-right py-2.5 md:py-3 px-2 text-xs md:text-sm font-semibold border-l-2 border-gray-300 ${
                        getVarianceColor(row.varianceBdg, row.concept === 'Ingresos' || row.concept === 'Margen Bruto' || row.concept === 'Utilidad Neta')
                      }`}>
                        <div className="flex items-center justify-end gap-0.5">
                          {getVarianceIcon(row.varianceBdg)}
                          <span className="hidden md:inline">{formatCurrency(Math.abs(row.varianceBdg))}</span>
                          <span className="md:hidden">{Math.abs(row.varianceBdg)}</span>
                        </div>
                      </td>
                      <td className={`text-right py-2.5 md:py-3 px-2 text-xs md:text-sm font-bold ${
                        getVarianceColor(row.varianceBdgPct, row.concept === 'Ingresos' || row.concept === 'Margen Bruto' || row.concept === 'Utilidad Neta')
                      }`}>
                        {row.varianceBdgPct > 0 ? '+' : ''}{row.varianceBdgPct.toFixed(1)}%
                      </td>

                      {/* Variance vs PY */}
                      <td className={`text-right py-2.5 md:py-3 px-2 text-xs md:text-sm font-semibold border-l-2 border-gray-300 ${
                        getVarianceColor(row.variancePY, row.concept === 'Ingresos' || row.concept === 'Margen Bruto' || row.concept === 'Utilidad Neta')
                      }`}>
                        <div className="flex items-center justify-end gap-0.5">
                          {getVarianceIcon(row.variancePY)}
                          <span className="hidden md:inline">{formatCurrency(Math.abs(row.variancePY))}</span>
                          <span className="md:hidden">{Math.abs(row.variancePY)}</span>
                        </div>
                      </td>
                      <td className={`text-right py-2.5 md:py-3 px-2 text-xs md:text-sm font-bold ${
                        getVarianceColor(row.variancePYPct, row.concept === 'Ingresos' || row.concept === 'Margen Bruto' || row.concept === 'Utilidad Neta')
                      }`}>
                        {row.variancePYPct > 0 ? '+' : ''}{row.variancePYPct.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Chart - Budget vs Actual */}
        <Card className="border-none shadow-sm md:shadow-md">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-base md:text-xl font-bold text-[#2D1AA7]">Comparativo Presupuesto vs Actual</CardTitle>
            <p className="text-xs md:text-sm text-gray-600">Análisis visual de desempeño</p>
          </CardHeader>
          <CardContent className="p-2 md:p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="name"
                  stroke="#6B7280"
                  style={{ fontSize: '10px', fontWeight: '600' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  stroke="#6B7280"
                  style={{ fontSize: '10px', fontWeight: '600' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '600' }}
                />
                <Bar
                  dataKey="Actual"
                  fill="#7C4DFF"
                  radius={[8, 8, 0, 0]}
                  name="Actual"
                />
                <Bar
                  dataKey="Budget"
                  fill="#F5A623"
                  radius={[8, 8, 0, 0]}
                  name="Presupuesto"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
