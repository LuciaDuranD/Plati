import { TrendingUp, TrendingDown, Target, Percent, Users, DollarSign, Activity, CheckCircle2, AlertTriangle, XCircle, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function Indicators() {
  const kpiData = [
    {
      title: 'Rentabilidad (ROE)',
      value: '18.9%',
      change: '+2.7pp',
      trend: 'up',
      target: '18%',
      status: 'success',
      icon: Target
    },
    {
      title: 'Índice de Mora',
      value: '3.2%',
      change: '-0.8pp',
      trend: 'down',
      target: '<4%',
      status: 'success',
      icon: AlertTriangle
    },
    {
      title: 'Recuperación de Cartera',
      value: '87.5%',
      change: '+5.2pp',
      trend: 'up',
      target: '85%',
      status: 'success',
      icon: DollarSign
    },
    {
      title: 'Crecimiento de Clientes',
      value: '+24.3%',
      change: '+4.3pp',
      trend: 'up',
      target: '20%',
      status: 'success',
      icon: Users
    },
    {
      title: 'Cumplimiento Presupuestal',
      value: '94.2%',
      change: '-5.8pp',
      trend: 'down',
      target: '100%',
      status: 'warning',
      icon: Percent
    }
  ];

  const indicatorsData = [
    {
      indicador: 'Margen Operacional',
      formula: 'Utilidad Operacional / Ingresos',
      estandar: '> 30%',
      bdg: '35.0%',
      py: '32.4%',
      resultadoActual: '34.7%',
      tendencia: 'up',
      semaforo: 'green',
      estado: 'En Meta'
    },
    {
      indicador: 'Índice de Mora',
      formula: 'Cartera Vencida / Cartera Total',
      estandar: '< 4%',
      bdg: '3.5%',
      py: '4.0%',
      resultadoActual: '3.2%',
      tendencia: 'down',
      semaforo: 'green',
      estado: 'En Meta'
    },
    {
      indicador: 'ROE (Rentabilidad)',
      formula: 'Utilidad Neta / Patrimonio',
      estandar: '> 15%',
      bdg: '18.0%',
      py: '16.2%',
      resultadoActual: '18.9%',
      tendencia: 'up',
      semaforo: 'green',
      estado: 'Sobre Meta'
    },
    {
      indicador: 'Recuperación de Cartera',
      formula: 'Cartera Recuperada / Cartera Vencida',
      estandar: '> 80%',
      bdg: '85.0%',
      py: '82.3%',
      resultadoActual: '87.5%',
      tendencia: 'up',
      semaforo: 'green',
      estado: 'Sobre Meta'
    },
    {
      indicador: 'Eficiencia Operativa',
      formula: 'Gastos Operativos / Ingresos',
      estandar: '< 25%',
      bdg: '23.0%',
      py: '26.1%',
      resultadoActual: '24.8%',
      tendencia: 'down',
      semaforo: 'yellow',
      estado: 'Cerca'
    },
    {
      indicador: 'CAC (Costo Adquisición)',
      formula: 'Gasto Marketing / Clientes Nuevos',
      estandar: '< $150k',
      bdg: '$140k',
      py: '$165k',
      resultadoActual: '$148k',
      tendencia: 'down',
      semaforo: 'yellow',
      estado: 'Cerca'
    },
    {
      indicador: 'Ticket Promedio',
      formula: 'Ingresos Totales / Número de Créditos',
      estandar: '> $2.5M',
      bdg: '$2.8M',
      py: '$2.4M',
      resultadoActual: '$2.7M',
      tendencia: 'up',
      semaforo: 'green',
      estado: 'En Meta'
    },
    {
      indicador: 'Tasa de Aprobación',
      formula: 'Créditos Aprobados / Solicitudes',
      estandar: '> 60%',
      bdg: '65.0%',
      py: '58.3%',
      resultadoActual: '62.8%',
      tendencia: 'up',
      semaforo: 'green',
      estado: 'En Meta'
    }
  ];

  const historicalTrendData = [
    { mes: 'Ene', margen: 31.2, mora: 4.5, recuperacion: 80.5, roe: 16.8 },
    { mes: 'Feb', margen: 32.1, mora: 4.2, recuperacion: 82.3, roe: 17.2 },
    { mes: 'Mar', margen: 32.8, mora: 3.9, recuperacion: 84.1, roe: 17.8 },
    { mes: 'Abr', margen: 33.5, mora: 3.6, recuperacion: 85.4, roe: 18.1 },
    { mes: 'May', margen: 34.1, mora: 3.4, recuperacion: 86.2, roe: 18.5 },
    { mes: 'Jun', margen: 34.7, mora: 3.2, recuperacion: 87.5, roe: 18.9 }
  ];

  const budgetComparisonData = [
    { indicador: 'Margen Op.', Actual: 34.7, BDG: 35, Estándar: 30 },
    { indicador: 'Mora', Actual: 3.2, BDG: 3.5, Estándar: 4 },
    { indicador: 'Recuperación', Actual: 87.5, BDG: 85, Estándar: 80 },
    { indicador: 'ROE', Actual: 18.9, BDG: 18, Estándar: 15 }
  ];

  const performanceData = [
    { month: 'Ene', cumplimiento: 88 },
    { month: 'Feb', cumplimiento: 90 },
    { month: 'Mar', cumplimiento: 91 },
    { month: 'Abr', cumplimiento: 92 },
    { month: 'May', cumplimiento: 93 },
    { month: 'Jun', cumplimiento: 94.2 }
  ];

  const getSemaforoIcon = (color: string) => {
    switch (color) {
      case 'green':
        return <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 shadow-md animate-pulse"></div>;
      case 'yellow':
        return <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500 shadow-md animate-pulse"></div>;
      case 'red':
        return <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 shadow-md animate-pulse"></div>;
      default:
        return null;
    }
  };

  const getTendenciaIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-3 w-3 md:h-4 md:w-4 text-green-600" />;
      case 'down':
        return <ArrowDown className="h-3 w-3 md:h-4 md:w-4 text-red-600" />;
      default:
        return <Minus className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />;
    }
  };

  const getEstadoBadge = (estado: string, semaforo: string) => {
    const colors = {
      green: 'bg-green-100 text-green-700 border-green-300',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      red: 'bg-red-100 text-red-700 border-red-300'
    };

    return (
      <span className={`inline-flex items-center gap-1 md:gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-bold border ${colors[semaforo as keyof typeof colors]}`}>
        {getSemaforoIcon(semaforo)}
        <span className="hidden md:inline">{estado}</span>
        <span className="md:hidden">{estado.substring(0, 3)}</span>
      </span>
    );
  };

  return (
    <div className="space-y-4 md:space-y-6 bg-[#F8F9FC] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-[#2D1AA7]">Indicadores</h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">Dashboard Ejecutivo de KPIs</p>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              <span className="text-xs md:text-sm font-semibold text-gray-700">En Meta</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
              <span className="text-xs md:text-sm font-semibold text-gray-700">Seguimiento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
              <span className="text-xs md:text-sm font-semibold text-gray-700">Fuera</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 space-y-4 md:space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${
                      kpi.status === 'success' ? 'from-green-500 to-green-600' :
                      kpi.status === 'warning' ? 'from-yellow-500 to-yellow-600' :
                      'from-red-500 to-red-600'
                    } flex items-center justify-center shadow-md`}>
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
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-1.5">{kpi.title}</p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2D1AA7] mb-1">{kpi.value}</p>
                  <p className="text-xs md:text-sm text-gray-500">Meta: {kpi.target}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Indicators Table */}
        <Card className="border-none shadow-sm md:shadow-md">
          <CardHeader className="bg-gradient-to-r from-[#2D1AA7] to-[#4527A0] text-white rounded-t-lg p-4 md:p-6">
            <CardTitle className="text-lg md:text-2xl font-bold">Detalle de Indicadores de Gestión</CardTitle>
            <p className="text-xs md:text-sm text-white/80 mt-1">Análisis comparativo vs Presupuesto y Año Anterior</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-[#F8F9FC] border-b-2 border-[#2D1AA7]">
                    <th className="text-left py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#2D1AA7]">Indicador</th>
                    <th className="text-left py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-bold text-[#2D1AA7]">Fórmula</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">Estándar</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">BDG</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">PY</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">Actual</th>
                    <th className="text-center py-2 md:py-3 px-2 text-xs md:text-sm font-bold text-[#2D1AA7]">Sem.</th>
                    <th className="text-center py-2 md:py-3 px-2 text-xs md:text-sm font-bold text-[#2D1AA7]">Tend.</th>
                    <th className="text-center py-2 md:py-3 px-2 md:px-3 text-xs md:text-sm font-bold text-[#2D1AA7]">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {indicatorsData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#F8F9FC] transition-colors duration-200 border-b border-gray-200"
                    >
                      <td className="py-2.5 md:py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-gray-900">{row.indicador}</td>
                      <td className="py-2.5 md:py-3 px-3 md:px-4 text-xs text-gray-600">{row.formula}</td>
                      <td className="text-center py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm text-gray-600">{row.estandar}</td>
                      <td className="text-center py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm text-gray-600">{row.bdg}</td>
                      <td className="text-center py-2.5 md:py-3 px-2 md:px-3 text-xs md:text-sm text-gray-600">{row.py}</td>
                      <td className="text-center py-2.5 md:py-3 px-2 md:px-3 text-sm md:text-base font-bold text-[#7C4DFF]">
                        {row.resultadoActual}
                      </td>
                      <td className="text-center py-2.5 md:py-3 px-2">
                        <div className="flex justify-center">
                          {getSemaforoIcon(row.semaforo)}
                        </div>
                      </td>
                      <td className="text-center py-2.5 md:py-3 px-2">
                        <div className="flex justify-center">
                          {getTendenciaIcon(row.tendencia)}
                        </div>
                      </td>
                      <td className="text-center py-2.5 md:py-3 px-2 md:px-3">
                        {getEstadoBadge(row.estado, row.semaforo)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Historical Trend */}
          <Card className="border-none shadow-sm md:shadow-md">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-[#2D1AA7]">Tendencia Histórica de Indicadores</CardTitle>
              <p className="text-xs md:text-sm text-gray-600">Evolución últimos 6 meses</p>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={historicalTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="mes"
                    stroke="#6B7280"
                    style={{ fontSize: '10px', fontWeight: '600' }}
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
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '600' }} />
                  <Line type="monotone" dataKey="margen" name="Margen Op. %" stroke="#7C4DFF" strokeWidth={3} dot={{ r: 5, fill: '#7C4DFF' }} />
                  <Line type="monotone" dataKey="mora" name="Mora %" stroke="#F5A623" strokeWidth={3} dot={{ r: 5, fill: '#F5A623' }} />
                  <Line type="monotone" dataKey="recuperacion" name="Recuperación %" stroke="#10B981" strokeWidth={3} dot={{ r: 5, fill: '#10B981' }} />
                  <Line type="monotone" dataKey="roe" name="ROE %" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5, fill: '#3B82F6' }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Budget Comparison */}
          <Card className="border-none shadow-sm md:shadow-md">
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-base md:text-xl font-bold text-[#2D1AA7]">Comparativo: Actual vs BDG vs Estándar</CardTitle>
              <p className="text-xs md:text-sm text-gray-600">Análisis de cumplimiento</p>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={budgetComparisonData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="indicador"
                    stroke="#6B7280"
                    style={{ fontSize: '10px', fontWeight: '600' }}
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
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '600' }} />
                  <Bar dataKey="Actual" fill="#7C4DFF" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="BDG" fill="#F5A623" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="Estándar" fill="#10B981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Trend */}
        <Card className="border-none shadow-sm md:shadow-md">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-base md:text-xl font-bold text-[#2D1AA7]">Evolución del Cumplimiento Presupuestal</CardTitle>
            <p className="text-xs md:text-sm text-gray-600">Tendencia de cumplimiento últimos 6 meses</p>
          </CardHeader>
          <CardContent className="p-2 md:p-6">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorCumplimiento" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C4DFF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#7C4DFF" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="month"
                  stroke="#6B7280"
                  style={{ fontSize: '10px', fontWeight: '600' }}
                />
                <YAxis
                  stroke="#6B7280"
                  domain={[85, 100]}
                  style={{ fontSize: '10px', fontWeight: '600' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Cumplimiento']}
                />
                <Area
                  type="monotone"
                  dataKey="cumplimiento"
                  stroke="#7C4DFF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorCumplimiento)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="border-none shadow-sm bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200">
            <CardContent className="p-4 md:p-6 text-center">
              <CheckCircle2 className="h-10 w-10 md:h-14 md:w-14 text-green-600 mx-auto mb-2 md:mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1">6</p>
              <p className="text-xs md:text-sm text-green-600 font-bold uppercase tracking-wide">Indicadores en Meta</p>
              <p className="text-xs text-green-600 mt-1 md:mt-2">75% del total</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-200">
            <CardContent className="p-4 md:p-6 text-center">
              <AlertTriangle className="h-10 w-10 md:h-14 md:w-14 text-yellow-600 mx-auto mb-2 md:mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-yellow-700 mb-1">2</p>
              <p className="text-xs md:text-sm text-yellow-600 font-bold uppercase tracking-wide">En Seguimiento</p>
              <p className="text-xs text-yellow-600 mt-1 md:mt-2">25% del total</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200">
            <CardContent className="p-4 md:p-6 text-center">
              <XCircle className="h-10 w-10 md:h-14 md:w-14 text-red-600 mx-auto mb-2 md:mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-red-700 mb-1">0</p>
              <p className="text-xs md:text-sm text-red-600 font-bold uppercase tracking-wide">Fuera de Meta</p>
              <p className="text-xs text-red-600 mt-1 md:mt-2">0% del total</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
