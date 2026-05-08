import { useNavigate } from "react-router";
import { Lock, ShieldCheck, FileKey2, Building, ArrowRight } from "lucide-react";

import logoEfecty from "../../imports/Logo_EFECTY.jpg";
import logoBreb from "../../imports/Logo_BRE-B.jpg";
import logoDaviplata from "../../imports/Logo_DAVIPLATA.jpg";
import logoNequi from "../../imports/Logo_NEQUI.jpg";
import logoPse from "../../imports/logo_PSE.png";

export function PublicPaymentMethods() {
  const navigate = useNavigate();

  const paymentMethods = [
    { 
      id: "pse", 
      name: "PSE", 
      tag: "Bancario", 
      desc: "Débito directo desde cualquier cuenta bancaria en Colombia.",
      logo: logoPse
    },
    { 
      id: "nequi", 
      name: "Nequi", 
      tag: "Digital", 
      desc: "Paga en segundos directamente desde tu app Nequi sin costo adicional.",
      logo: logoNequi
    },
    { 
      id: "daviplata", 
      name: "Daviplata", 
      tag: "Digital", 
      desc: "Usa el saldo de tu Daviplata para mantener tu crédito siempre al día.",
      logo: logoDaviplata
    },
    { 
      id: "bre-b", 
      name: "Bre-b", 
      tag: "Transferencia", 
      desc: "El nuevo sistema interoperable para realizar pagos al instante.",
      logo: logoBreb
    },
    { 
      id: "efecty", 
      name: "Efecty", 
      tag: "Efectivo", 
      desc: "Acércate a cualquier punto Efecty del país presentando tu referencia de pago.",
      logo: logoEfecty
    },
    { 
      id: "baloto", 
      name: "Baloto", 
      tag: "Efectivo", 
      desc: "Paga en efectivo en miles de puntos de la red Vía Baloto en toda Colombia.",
      logo: undefined
    },
  ];

  const handleSelectMethod = () => {
    // Redirigir a la pantalla de ingreso para que el usuario inicie sesión
    navigate("/ingresar");
  };

  return (
    <div className="w-full flex flex-col items-center pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="w-full bg-[#F5F3FF] py-10 px-6 border-b border-[#D1C4E9] flex justify-center">
        <div className="max-w-[700px] text-center">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#D1C4E9] mb-4 shadow-sm">
            <Lock className="h-3.5 w-3.5 text-[#F5A623]" />
            <span className="text-xs font-bold text-[#1A0060]">Pagos 100% Seguros</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#311B92] mb-3 tracking-tight leading-tight">
            Múltiples opciones para <br className="hidden md:block"/> estar al día
          </h1>
          <p className="text-base text-[#6E5FAA] leading-relaxed">
            Ofrecemos diversas alternativas para que pagues la cuota de tu crédito de forma rápida y confiable. Selecciona tu método favorito para ingresar a tu cuenta y proceder.
          </p>
        </div>
      </div>

      {/* Methods Grid Section */}
      <div className="w-full max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={handleSelectMethod}
              className="group bg-white rounded-[24px] p-8 text-left border border-[#D1C4E9] hover:border-[#F5A623] hover:shadow-[0_8px_30px_rgba(245,166,35,0.12)] transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-14 w-24 bg-white border border-[#D1C4E9] group-hover:border-[#F5A623] rounded-xl flex items-center justify-center transition-colors overflow-hidden py-1.5 px-2.5">
                  {method.logo ? (
                    <img src={method.logo} alt={`Logo ${method.name}`} className="w-full h-full object-contain" />
                  ) : method.id === 'pse' ? (
                     <div className="font-black text-[#7C4DFF] text-xl tracking-tighter">PSE</div>
                  ) : (
                    <span className="font-black text-[#311B92] text-2xl uppercase">{method.name.charAt(0)}</span>
                  )}
                </div>
                <div className="bg-[#EDE7F6] text-[#7C4DFF] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {method.tag}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1A0060] mb-3">{method.name}</h3>
              <p className="text-[#6E5FAA] text-sm leading-relaxed mb-8 flex-1">
                {method.desc}
              </p>

              <div className="flex items-center text-[#7C4DFF] font-black text-base mt-auto group-hover:translate-x-2 group-hover:text-[#F5A623] transition-all">
                INGRESA PARA PAGAR <ArrowRight className="h-5 w-5 ml-2" strokeWidth={2.5} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trust & Security Banner */}
      <div className="w-full max-w-[1200px] px-6">
        <div className="bg-[#311B92] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#7C4DFF] opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#F5A623] opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Respaldo Institucional</h3>
            <p className="text-white/70 max-w-md">
              Todas las transacciones de PLATI están vigiladas y procesadas mediante pasarelas de pago certificadas para proteger tu dinero.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#F5A623]" />
              <span className="text-sm font-bold text-white">SSL Seguro</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl flex items-center gap-3">
              <FileKey2 className="h-5 w-5 text-[#F5A623]" />
              <span className="text-sm font-bold text-white">Cifrado 256-bit</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl flex items-center gap-3">
              <Building className="h-5 w-5 text-[#F5A623]" />
              <span className="text-sm font-bold text-white">Vigilado</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}