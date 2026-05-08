import { Link } from "react-router";
import { Users, CreditCard, DollarSign, AlertTriangle, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from "recharts";
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

export function AdminDashboard() {
  const pieData = [
    { id: "al-dia", name: "Al día", value: 30 },
    { id: "proximos", name: "Próximos a pagar", value: 10 },
    { id: "en-mora", name: "En mora", value: 5 },
  ];
  const pieColors = ["#7C4DFF", "#F5A623", "#EF4444"]; // Cambiado el último color a rojo

  const barData = [
    { name: "Ene", amount: 45 },
    { name: "Feb", amount: 35 },
    { name: "Mar", amount: 52 },
    { name: "Abr", amount: 47 },
    { name: "May", amount: 63 },
    { name: "Jun", amount: 58 },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard General</h1>
          <p className="text-gray-600">Resumen operativo y financiero</p>
        </div>
        <div className="text-xs md:text-sm font-medium text-gray-500 bg-white px-4 py-2 border border-gray-200 rounded-lg">
          Última actualización: Hoy, 09:41 AM
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: "usuarios", title: "Usuarios Totales", value: "150", icon: Users, trend: "+12%" },
          { id: "creditos", title: "Créditos Activos", value: "45", icon: CreditCard, trend: "+5%" },
          { id: "desembolsado", title: "Total Desembolsado", value: "$ 300M", icon: DollarSign, trend: "+18%" },
          { id: "mora", title: "Tasa de Mora (>30d)", value: "4.2%", icon: AlertTriangle, trend: "-0.5%", isGood: true },
        ].map((kpi) => (
          <div key={kpi.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <kpi.icon className="h-5 w-5 text-gray-700" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                kpi.isGood || kpi.trend.startsWith('+') ? 'bg-gray-200 text-gray-900' : 'bg-gray-800 text-white'
              }`}>
                {kpi.trend}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{kpi.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Desembolsos Mensuales</h3>
              <p className="text-xs text-gray-500 mt-1">Montos en millones de pesos colombianos</p>
            </div>
            <Link
              to="/admin/reportes-financieros"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#7C4DFF] hover:bg-[#311B92] rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Ver reporte
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
          <div className="w-full">
            <SafeChartContainer height={300}>
              <BarChart data={barData} id="bar-dashboard" margin={{ top: 20, right: 20, bottom: 5, left: 5 }}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C4DFF" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#311B92" stopOpacity={1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid key="cartesian-grid" strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  key="x-axis"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 13, fontWeight: 500 }}
                />
                <YAxis
                  key="y-axis"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  label={{ value: 'Millones COP', angle: -90, position: 'insideLeft', style: { fill: '#6B7280', fontSize: 12, fontWeight: 600 } }}
                />
                <Tooltip
                  key="tooltip"
                  cursor={{ fill: '#EDE7F6' }}
                  contentStyle={{
                    borderRadius: '12px',
                    border: '2px solid #7C4DFF',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 4px 6px rgba(124, 77, 255, 0.1)',
                    padding: '12px'
                  }}
                  labelStyle={{ fontWeight: 'bold', color: '#311B92', marginBottom: '4px' }}
                  formatter={(value: number) => [`$${value.toFixed(0)}M`, 'Desembolsado']}
                />
                <Bar
                  key="bar-series"
                  dataKey="amount"
                  fill="url(#colorAmount)"
                  radius={[8, 8, 0, 0]}
                  isAnimationActive={false}
                  maxBarSize={60}
                >
                  <LabelList
                    dataKey="amount"
                    position="top"
                    style={{ fill: '#7C4DFF', fontSize: 13, fontWeight: 'bold' }}
                    formatter={(value: number) => `$${value}M`}
                  />
                </Bar>
              </BarChart>
            </SafeChartContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6 w-full text-left">Estado de Cartera</h3>
          <div className="w-full">
            <SafeChartContainer height={200}>
              <PieChart id="pie-dashboard">
                <Pie
                  key="pie-series"
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  nameKey="name"
                  isAnimationActive={false}
                  strokeWidth={2}
                  stroke="#FFFFFF"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${entry.id || index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  key="tooltip-pie"
                  contentStyle={{
                    borderRadius: '12px',
                    border: '2px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '12px'
                  }}
                  formatter={(value: number, name: string) => [`${value} usuarios`, name]}
                  labelStyle={{ fontWeight: 'bold', color: '#111827' }}
                />
              </PieChart>
            </SafeChartContainer>
          </div>
          <div className="mt-4 space-y-3 w-full px-2">
            {pieData.map((item, i) => (
              <div key={item.id} className="flex justify-between items-center text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 border-2 border-white shadow-sm" style={{ backgroundColor: pieColors[i] }}></div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{item.name}</span>
                </div>
                <span className="font-bold text-gray-900 whitespace-nowrap ml-2">{item.value} usuarios</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Applications Preview */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Solicitudes Recientes</h3>
          <Link to="/admin/solicitudes" className="text-sm font-medium text-[#F5A623] hover:underline flex items-center gap-1">
            Ver todas <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-4 py-3.5 font-semibold">Cliente</th>
                <th className="px-4 py-3.5 font-semibold">Monto</th>
                <th className="px-4 py-3.5 font-semibold text-center">Nivel Riesgo</th>
                <th className="px-4 py-3.5 font-semibold">Fecha Solicitud</th>
                <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: "1", name: "María Gómez", amount: "$ 5,000,000", riskScore: "B", date: "Hace 2 horas", status: "En revisión", color: "bg-[#EBF5FF] text-[#0066CC] font-bold" },
                { id: "2", name: "Carlos Ruiz", amount: "$ 3,500,000", riskScore: "C", date: "Hace 5 horas", status: "Nueva", color: "bg-[#FFF4E5] text-[#F5A623] border border-[#F5A623]/30 font-bold" },
                { id: "3", name: "Ana Torres", amount: "$ 4,500,000", riskScore: "A", date: "Ayer", status: "Aprobada", color: "bg-gray-100 text-gray-600 border border-gray-300" },
              ].map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 text-sm font-medium text-gray-900">{row.name}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-600 font-mono whitespace-nowrap">{row.amount}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                      row.riskScore === 'A' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                      row.riskScore === 'B' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300' :
                      row.riskScore === 'C' ? 'bg-orange-100 text-orange-700 border-2 border-orange-300' :
                      'bg-red-100 text-red-700 border-2 border-red-300'
                    }`}>
                      {row.riskScore}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-medium ${row.color}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Status Tables */}
      <div className="grid grid-cols-1 gap-8">
        {[
          {
            title: "Usuarios Al Día",
            data: [
              { id: "1", name: "José Martínez", amount: "$ 2,000,000", installment: "$ 180,000", paymentDate: "15 May 2026", status: "Al día", color: "bg-[#EDE7F6] text-[#7C4DFF] border border-[#7C4DFF]/30 font-medium" },
              { id: "2", name: "Laura Sánchez", amount: "$ 4,000,000", installment: "$ 350,000", paymentDate: "18 May 2026", status: "Al día", color: "bg-[#EDE7F6] text-[#7C4DFF] border border-[#7C4DFF]/30 font-medium" },
            ]
          },
          {
            title: "Usuarios Próximos A Pagar",
            data: [
              { id: "3", name: "Diana Reyes", amount: "$ 1,500,000", installment: "$ 145,000", paymentDate: "Mañana", status: "Próximo a pagar", color: "bg-[#FFF4E5] text-[#F5A623] border border-[#F5A623]/30 font-bold" },
              { id: "4", name: "Roberto Gómez", amount: "$ 5,000,000", installment: "$ 420,000", paymentDate: "10 May 2026", status: "Próximo a pagar", color: "bg-[#FFF4E5] text-[#F5A623] border border-[#F5A623]/30 font-bold" },
            ]
          },
          {
            title: "Usuarios En Mora",
            hasInterestColumn: true,
            data: [
              { id: "5", name: "Andrés Silva", amount: "$ 3,000,000", installment: "$ 270,000", interest: "$ 15,500", paymentDate: "01 May 2026", status: "7 días en mora", color: "bg-red-50 text-red-700 border border-red-200 font-bold" },
              { id: "6", name: "Patricia Vega", amount: "$ 5,000,000", installment: "$ 420,000", interest: "$ 48,200", paymentDate: "25 Abr 2026", status: "13 días en mora", color: "bg-red-50 text-red-700 border border-red-200 font-bold" },
            ]
          }
        ].map((table) => (
          <div key={table.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">{table.title}</h3>
              <Link to="/admin/usuarios" className="text-sm font-medium text-[#F5A623] hover:underline flex items-center gap-1">
                Ver todos <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                    <th className="px-4 py-3.5 font-semibold">Cliente</th>
                    <th className="px-4 py-3.5 font-semibold">Monto Crédito</th>
                    <th className="px-4 py-3.5 font-semibold">Cuota Mensual</th>
                    {table.hasInterestColumn && (
                      <th className="px-4 py-3.5 font-semibold text-red-600">Intereses Mora</th>
                    )}
                    <th className="px-4 py-3.5 font-semibold">Fecha Pago</th>
                    <th className="px-4 py-3.5 font-semibold text-center">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {table.data.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3.5 text-sm font-medium text-gray-900">{row.name}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600 font-mono whitespace-nowrap">{row.amount}</td>
                      <td className="px-4 py-3.5 text-sm text-gray-600 font-mono whitespace-nowrap">{row.installment}</td>
                      {table.hasInterestColumn && (
                        <td className="px-4 py-3.5 text-sm text-red-600 font-mono font-medium whitespace-nowrap">{row.interest}</td>
                      )}
                      <td className="px-4 py-3.5 text-sm text-gray-600 whitespace-nowrap">{row.paymentDate}</td>
                      <td className="px-4 py-3.5 text-center">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs whitespace-nowrap ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
