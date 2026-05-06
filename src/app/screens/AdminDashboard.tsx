import { Link } from "react-router";
import { Users, CreditCard, DollarSign, AlertTriangle, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function AdminDashboard() {
  const pieData = [
    { name: "Al día", value: 75 },
    { name: "En mora", value: 15 },
    { name: "En cobro", value: 10 },
  ];
  const pieColors = ["#111827", "#6B7280", "#E5E7EB"];

  const barData = [
    { name: "Ene", amount: 400 },
    { name: "Feb", amount: 300 },
    { name: "Mar", amount: 550 },
    { name: "Abr", amount: 450 },
    { name: "May", amount: 700 },
    { name: "Jun", amount: 650 },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard General</h1>
          <p className="text-gray-600">Resumen operativo y financiero de PLATI.</p>
        </div>
        <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 border border-gray-200 rounded-lg">
          Última actualización: Hoy, 09:41 AM
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Usuarios Totales", value: "1,248", icon: Users, trend: "+12%" },
          { title: "Créditos Activos", value: "452", icon: CreditCard, trend: "+5%" },
          { title: "Total Desembolsado", value: "$ 2.4B", icon: DollarSign, trend: "+18%" },
          { title: "Tasa de Mora (>30d)", value: "4.2%", icon: AlertTriangle, trend: "-0.5%", isGood: true },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
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
          <h3 className="text-lg font-bold text-gray-900 mb-6">Desembolsos Mensuales (Millones COP)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }} />
                <Bar dataKey="amount" fill="#111827" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Estado de Cartera</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {pieData.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieColors[i] }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Applications Preview */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Solicitudes Recientes</h3>
          <Link to="/admin/solicitudes" className="text-sm font-medium text-gray-900 hover:underline flex items-center gap-1">
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Cliente</th>
                <th className="px-6 py-4 font-semibold">Monto</th>
                <th className="px-6 py-4 font-semibold">Fecha</th>
                <th className="px-6 py-4 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "María Gómez", amount: "$ 8,000,000", date: "Hace 2 horas", status: "En revisión", color: "bg-gray-200 text-gray-800" },
                { name: "Carlos Ruiz", amount: "$ 3,500,000", date: "Hace 5 horas", status: "Nueva", color: "bg-gray-800 text-white" },
                { name: "Ana Torres", amount: "$ 12,000,000", date: "Ayer", status: "Aprobada", color: "bg-gray-100 text-gray-600 border border-gray-300" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-mono">{row.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${row.color}`}>
                      {row.status}
                    </span>
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
