import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, Clock, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import logoImg from "../../imports/Create_a_minimal_202604221958.jpeg";

export function LandingPage() {
  const [amount, setAmount] = useState(2000000);
  const [term, setTerm] = useState(6);
  
  const interestRate = 0.025; // 2.5% monthly
  const monthlyInterest = amount * interestRate;
  const principalPayment = amount / term;
  const monthlyPayment = principalPayment + monthlyInterest;

  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen">
      <main className="w-full max-w-[1440px] flex flex-col">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#311B92] tracking-tight leading-[1.1]">
              Dinero rápido, seguro y confiable para tu negocio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Impulsa el crecimiento de tu empresa con microcréditos 100% digitales hasta $5.000.000 COP. Sin papeleos interminables, sin filas, y con aprobación en tiempo récord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#simulador" className="px-8 py-4 bg-[#7C4DFF] text-white rounded-xl font-medium text-center hover:bg-[#651FFF] transition-colors shadow-lg shadow-[#7C4DFF]/20">
                Simular crédito
              </a>
              <Link to="/registro" className="px-8 py-4 bg-[#EDE7F6] text-[#311B92] rounded-xl font-medium text-center hover:bg-[#D1C4E9] transition-colors">
                Crear cuenta
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap gap-6 items-center text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#7C4DFF]" />
                <span>Aprobación rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#7C4DFF]" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#7C4DFF]" />
                <span>Sin filas</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image / Illustration */}
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-h-[500px] w-full bg-[#EDE7F6] rounded-[2rem] flex items-center justify-center border border-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C4DFF]/20 to-transparent mix-blend-multiply" />
              <img src={logoImg} alt="PLATI App" className="w-48 h-48 rounded-3xl shadow-2xl z-10 border-4 border-white" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#EDE7F6] hidden md:flex items-center gap-4 z-20">
              <div className="h-12 w-12 bg-[#EDE7F6] rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#7C4DFF]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Crédito aprobado</p>
                <p className="font-bold text-[#311B92] text-lg">$5.000.000 COP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-10 px-6">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Confiado por más de 10,000 negocios en Colombia
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-24 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#311B92] mb-4">¿Por qué elegir PLATI?</h2>
            <p className="text-lg text-gray-600">Diseñado específicamente para las necesidades de los microempresarios colombianos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Proceso 100% Digital", desc: "Olvídate de las sucursales. Completa tu solicitud desde tu celular en 5 minutos." },
              { icon: TrendingUp, title: "Tasas Competitivas", desc: "Evaluamos tu negocio de forma integral para ofrecerte las mejores condiciones." },
              { icon: Users, title: "Atención Personalizada", desc: "Un equipo de expertos dispuesto a ayudarte en cada paso de tu crecimiento." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-[#EDE7F6] hover:border-[#7C4DFF] hover:shadow-xl hover:shadow-[#7C4DFF]/10 transition-all duration-300 group">
                <div className="h-14 w-14 bg-[#EDE7F6] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#7C4DFF] transition-colors">
                  <benefit.icon className="h-7 w-7 text-[#7C4DFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#311B92] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Simulator Section */}
        <section id="simulador" className="py-24 px-6">
          <div className="bg-[#311B92] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C4DFF] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
              <div className="flex-1 space-y-8 text-white">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6">Simula tu crédito ahora</h2>
                  <p className="text-[#EDE7F6] text-lg leading-relaxed max-w-xl">
                    Descubre cuánto pagarías mensualmente sin compromisos. Transparencia total desde el primer momento, con plazos adaptados a tu negocio.
                  </p>
                </div>
                
                <ul className="space-y-5">
                  {['Desembolso en 24 horas', 'Plazos flexibles hasta 12 meses', 'Sin cargos ni letras pequeñas'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#EDE7F6] font-medium">
                      <div className="h-6 w-6 rounded-full bg-[#7C4DFF] flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full max-w-md bg-white rounded-3xl p-8 text-[#311B92] shadow-xl">
                <div className="mb-8 text-center">
                  <p className="text-sm font-bold text-[#7C4DFF] uppercase tracking-wider mb-2">Simulador Rápido</p>
                  <h3 className="text-2xl font-black">Calcula tu cuota</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">¿Cuánto necesitas?</label>
                    <div className="h-14 bg-[#EDE7F6]/50 rounded-xl border border-[#EDE7F6] flex items-center justify-center font-mono text-2xl font-bold text-[#311B92]">
                      $ {amount.toLocaleString('es-CO')} COP
                    </div>
                    <div className="mt-6 relative">
                      <input
                        type="range"
                        min="500000"
                        max="5000000"
                        step="100000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-2 bg-[#EDE7F6] rounded-lg appearance-none cursor-pointer accent-[#7C4DFF]"
                      />
                      <div className="flex justify-between mt-3 text-xs font-bold text-gray-400">
                        <span>$500.000</span>
                        <span>$5.000.000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">¿A qué plazo?</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[3, 6, 12].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTerm(t)}
                          className={`h-12 rounded-xl border-2 flex items-center justify-center font-bold transition-all ${
                            term === t 
                              ? 'border-[#7C4DFF] bg-[#7C4DFF]/10 text-[#7C4DFF]' 
                              : 'border-[#EDE7F6] text-gray-500 hover:border-[#7C4DFF]/50 hover:text-[#311B92]'
                          }`}
                        >
                          {t} meses
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-5 bg-[#F8F5FF] rounded-2xl border border-[#EDE7F6]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-600">Cuota mensual estimada</span>
                      <span className="text-2xl font-black text-[#7C4DFF]">
                        ${Math.round(monthlyPayment).toLocaleString('es-CO')}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-1">*Incluye intereses (2.5% m.v.) y seguro de deudores</p>
                  </div>
                  
                  <Link to="/registro" className="flex items-center justify-center w-full py-4 bg-[#311B92] text-white rounded-xl font-bold hover:bg-[#251370] transition-colors shadow-lg shadow-[#311B92]/20">
                    Solicitar este crédito ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
