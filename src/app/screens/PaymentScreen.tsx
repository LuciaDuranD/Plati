import { useState } from "react";
import { Link } from "react-router";
import { Lock, Download, Check, ShieldCheck, FileKey2, Building } from "lucide-react";

import logoEfecty from "../../imports/Logo_EFECTY.jpg";
import logoBreb from "../../imports/Logo_BRE-B.jpg";
import logoDaviplata from "../../imports/Logo_DAVIPLATA.jpg";
import logoNequi from "../../imports/Logo_NEQUI.jpg";
import logoPse from "../../imports/logo_PSE.png";
import logoBaloto from "../../imports/Logo_baloto.png";

export function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState("pse");

  const paymentMethods = [
    { id: "pse", name: "PSE Bancario", tag: "Activo", logo: logoPse },
    { id: "nequi", name: "Nequi Digital", tag: "Activo", logo: logoNequi },
    { id: "daviplata", name: "Daviplata Digital", tag: "Activo", logo: logoDaviplata },
    { id: "bre-b", name: "Bre-b Transferencia", tag: "Activo", logo: logoBreb },
    { id: "efecty", name: "Efecty Efectivo", tag: "Activo", logo: logoEfecty },
    { id: "baloto", name: "Baloto Efectivo", tag: "Activo", logo: logoBaloto },
  ];

  const recentHistory = [
    { id: "4", date: "15 abr", amount: "$206.000" },
    { id: "3", date: "15 mar", amount: "$206.000" },
    { id: "2", date: "15 feb", amount: "$206.000" },
    { id: "1", date: "15 ene", amount: "$206.000" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full font-sans text-[#1A0060]">
      {/* Left Column - flex 1.4 */}
      <div className="flex-[1.4] space-y-8">
        
        {/* CARD 1 - Pago de cuota */}
        <div className="bg-white rounded-[20px] p-7 border border-[#D1C4E9] shadow-[0_2px_12px_rgba(124,77,255,0.08)]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg text-[#1A0060]">Cuota 5 de 12</h2>
            <span className="bg-[#FFFBEB] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full">PENDIENTE</span>
          </div>

          <div className="text-center mb-8">
            <p className="text-[#6E5FAA] text-sm font-medium mb-2">Valor a pagar</p>
            <h1 className="text-[52px] leading-tight font-extrabold text-[#7C4DFF] tracking-tight">$206.000</h1>
          </div>

          <div className="h-[1px] bg-[#D1C4E9] mb-6"></div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Fecha límite</p>
              <p className="font-bold text-[#1A0060] text-sm">15 jun 2025</p>
            </div>
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Cuotas pagas</p>
              <p className="font-bold text-[#1A0060] text-sm">4 / 12</p>
            </div>
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Saldo restante</p>
              <p className="font-bold text-[#1A0060] text-sm">$1.560.000</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#6E5FAA] text-xs font-bold">Progreso de pago</span>
              <span className="text-[#6E5FAA] text-xs font-medium">4 de 12 cuotas pagadas</span>
            </div>
            <div className="h-2 w-full bg-[#EDE7F6] rounded-full overflow-hidden">
              <div className="h-full bg-[#7C4DFF] w-[33%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CARD 2 - Método de pago */}
        <div className="bg-white rounded-[20px] p-7 border border-[#D1C4E9] shadow-[0_2px_12px_rgba(124,77,255,0.08)]">
          <div className="mb-6">
            <h2 className="font-bold text-xl text-[#1A0060]">Método de pago</h2>
            <p className="text-[#6E5FAA] text-sm mt-1">Elige tu forma favorita</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {paymentMethods.map((method) => {
              const isSelected = selectedMethod === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`relative p-4 rounded-xl text-left transition-all border ${
                    isSelected 
                      ? 'bg-[#F5F3FF] border-[#7C4DFF] border-2 shadow-[0_4px_12px_rgba(124,77,255,0.12)]' 
                      : 'bg-white border-[#D1C4E9] border hover:bg-[#FFF4E5] hover:border-[#F5A623]'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 h-5 w-5 bg-[#7C4DFF] rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                  <div className="h-10 w-16 bg-white border border-[#D1C4E9] rounded-lg mb-3 flex items-center justify-center shadow-sm overflow-hidden py-1 px-1.5">
                    {method.logo ? (
                      <img src={method.logo} alt={`Logo ${method.name}`} className="w-full h-full object-contain" />
                    ) : method.id === 'pse' ? (
                       <div className="font-black text-[#7C4DFF] text-[10px]">PSE</div>
                    ) : method.id === 'baloto' ? (
                       <div className="font-black text-[#1A0060] bg-[#FFD600] text-[10px] w-full h-full flex items-center justify-center rounded-sm italic tracking-tight">BALOTO</div>
                    ) : (
                      <span className="font-black text-[#311B92] text-sm uppercase">{method.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="font-bold text-[#1A0060] text-sm leading-tight mb-1">{method.name.split(' ')[0]}</div>
                  <div className="text-[#6E5FAA] text-xs font-medium mb-2">{method.name.split(' ')[1]}</div>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"></div>
                    <span className="text-[10px] text-[#6E5FAA] uppercase tracking-wider font-bold">{method.tag}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-[#FFF4E5] rounded-[10px] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#F5A623]" />
              <span className="text-sm font-bold text-[#1A0060]">Tu pago se procesa de forma 100% segura</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-[#F5A623]" />
                <span className="text-[10px] font-bold text-[#1A0060]">SSL Seguro</span>
              </div>
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <FileKey2 className="h-3 w-3 text-[#F5A623]" />
                <span className="text-[10px] font-bold text-[#1A0060]">Cifrado 256-bit</span>
              </div>
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <Building className="h-3 w-3 text-[#F5A623]" />
                <span className="text-[10px] font-bold text-[#1A0060]">SuperFinanciera</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full h-14 bg-[#F5A623] hover:bg-[#E09612] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(245,166,35,0.3)]">
              <Lock className="h-5 w-5 text-white/80" />
              Pagar $206.000 ahora →
            </button>
            <button className="w-full h-12 bg-white border-[1.5px] border-[#D1C4E9] hover:bg-[#F5F3FF] text-[#7C4DFF] rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors">
              <Download className="h-4 w-4" />
              Descargar comprobante
            </button>
          </div>
        </div>

      </div>

      {/* Right Column - flex 0.8 */}
      <div className="flex-[0.8] space-y-8">
        
        {/* CARD 3 - Resumen */}
        <div className="bg-white rounded-[20px] p-7 border border-[#D1C4E9] shadow-[0_2px_12px_rgba(124,77,255,0.08)]">
          <h3 className="font-bold text-lg text-[#1A0060] mb-6">Resumen de tu crédito</h3>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Total crédito</p>
              <p className="font-bold text-[#1A0060] text-base">$2.000.000</p>
            </div>
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Saldo restante</p>
              <p className="font-bold text-[#1A0060] text-base mb-1">$1.560.000</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[#EDE7F6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#7C4DFF] w-[78%]"></div>
                </div>
                <span className="text-[10px] font-bold text-[#6E5FAA]">78%</span>
              </div>
            </div>
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Cuotas pagadas</p>
              <p className="font-bold text-[#1A0060] text-base">4 / 12</p>
            </div>
            <div>
              <p className="text-[#6E5FAA] text-xs font-medium mb-1">Próxima cuota</p>
              <p className="font-bold text-[#1A0060] text-base">15 jul <span className="text-sm font-medium text-[#6E5FAA] ml-1">$206k</span></p>
            </div>
          </div>
        </div>

        {/* CARD 4 - Historial */}
        <div className="bg-white rounded-[20px] p-7 border border-[#D1C4E9] shadow-[0_2px_12px_rgba(124,77,255,0.08)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-[#1A0060]">Últimos pagos</h3>
            <Link to="/cliente/historial" className="text-sm font-bold text-[#7C4DFF] hover:text-[#311B92] transition-colors">
              Ver todo →
            </Link>
          </div>

          <div className="w-full">
            {recentHistory.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex items-center justify-between py-3 px-2 ${index !== recentHistory.length - 1 ? 'border-b border-[#F5F3FF]' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-[#6E5FAA]">#{item.id}</span>
                  <span className="text-sm font-bold text-[#1A0060] w-14">{item.date}</span>
                  <span className="text-sm font-bold text-[#1A0060]">{item.amount}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                  <span className="text-[10px] font-bold text-[#16A34A] uppercase tracking-wide">Pagado</span>
                  <Check className="h-3 w-3 text-[#16A34A]" strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}