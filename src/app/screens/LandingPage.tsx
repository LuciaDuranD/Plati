import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, Clock, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import heroImg from "../../imports/Ultra-realistic_editorial_lifestyle_photograph_for_202605061826__1_.jpeg";

const testimonials = [
  { id: 1, name: "María G.", quote: "El proceso fue súper rápido y seguro. 10/10.", img: "https://images.unsplash.com/photo-1581322929597-aa39ca1ccff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwaGlzcGFuaWMlMjB3b21hbiUyMGZhY2V8ZW58MXx8fHwxNzc4MjAxMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 2, name: "Carlos M.", quote: "Mi negocio por fin está despegando gracias a ellos.", img: "https://images.unsplash.com/photo-1697082390597-00ee9ba2ff12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvbG9tYmlhbiUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODIwMTAzNnww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 3, name: "Andrea V.", quote: "La mejor tasa y sin complicaciones innecesarias.", img: "https://images.unsplash.com/photo-1714976326798-47fe74aa5add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlcmZ1bCUyMGxhdGluJTIwYnVzaW5lc3MlMjBvd25lcnxlbnwxfHx8fDE3NzgyMDEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 4, name: "Jorge L.", quote: "En 5 minutos tuve mi crédito aprobado. Increíble.", img: "https://images.unsplash.com/photo-1564783538911-cd6bb5d6bed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGxhdGluJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc4MjAxMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 5, name: "Elena R.", quote: "Excelente atención y transparencia en todo momento.", img: "https://images.unsplash.com/photo-1722963295885-dcef77dccde7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG9sZGVyJTIwaGlzcGFuaWMlMjB3b21hbnxlbnwxfHx8fDE3NzgyMDEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 6, name: "Luis F.", quote: "Pude comprar el inventario que me faltaba.", img: "https://images.unsplash.com/photo-1722489873772-28815bb7e4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlcmZ1bCUyMGhpc3BhbmljJTIwbWFuJTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NzgyMDEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 7, name: "Paola S.", quote: "Muy recomendados, confiables y ágiles.", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbGF0aW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODIwMTAzNnww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: 8, name: "Daniel C.", quote: "Justo lo que necesitaba mi local para crecer.", img: "https://images.unsplash.com/photo-1661264866493-430ba28f30e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwaGlzcGFuaWMlMjBzaG9wJTIwb3duZXJ8ZW58MXx8fHwxNzc4MjAxMDQwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

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
              <Link to="/simular" className="px-8 py-4 bg-[#7C4DFF] text-white rounded-xl font-medium text-center hover:bg-[#F5A623] hover:shadow-[#F5A623]/40 transition-all shadow-lg shadow-[#7C4DFF]/20">
                Simular crédito
              </Link>
              <Link to="/registro" className="px-8 py-4 bg-[#EDE7F6] text-[#311B92] rounded-xl font-medium text-center hover:bg-[#F5A623] hover:text-white transition-all">
                Crear cuenta
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap gap-6 items-center text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#F5A623]" />
                <span>Aprobación rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#F5A623]" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#F5A623]" />
                <span>Sin filas</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image / Illustration */}
          <div className="flex-1 w-full relative flex justify-center md:justify-end">
            <div className="aspect-square max-h-[500px] w-full max-w-[500px] rounded-[2rem] shadow-xl relative overflow-hidden border-4 border-white">
              <img src={heroImg} alt="Cliente PLATI" className="w-full h-full object-cover" />
              {/* Floating Card - Mobile (inside image) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#EDE7F6] flex items-center gap-3 md:hidden">
                <div className="h-10 w-10 bg-[#FFF4E5] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="h-5 w-5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 leading-tight">Créditos aprobados hasta por</p>
                  <p className="font-bold text-[#311B92] text-base">$5.000.000 COP</p>
                </div>
              </div>
            </div>
            {/* Floating Card - Desktop (outside image) */}
            <div className="absolute -bottom-6 md:left-4 lg:left-12 bg-white p-5 rounded-2xl shadow-xl border border-[#EDE7F6] hidden md:flex items-center gap-4 z-20">
              <div className="h-12 w-12 bg-[#FFF4E5] rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Créditos aprobados hasta por</p>
                <p className="font-bold text-[#311B92] text-lg">$5.000.000 COP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="pt-10 pb-4 overflow-hidden bg-white w-full">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Cada vez más emprendedores eligen <span translate="no">PLATI</span> para crecer con tranquilidad.
          </p>
          
          <div className="relative w-full overflow-hidden flex items-center">
            {/* The infinite scrolling container */}
            <div 
              className="flex gap-8 w-max"
              style={{ animation: 'scroll 40s linear infinite' }}
            >
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="w-80 sm:w-[420px] flex-shrink-0 flex items-center gap-6 p-6 rounded-3xl bg-[#F8F5FF] border border-[#EDE7F6] shadow-sm">
                  <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover shadow-md flex-shrink-0" />
                  <div className="flex-col">
                    <p className="text-[#311B92] font-bold text-base sm:text-lg">{t.name}</p>
                    <p className="text-gray-600 text-sm sm:text-base italic mt-1.5 leading-relaxed">"{t.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="pt-10 pb-12 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#311B92] mb-4">¿Por qué elegir <span translate="no">PLATI</span>?</h2>
            <p className="text-lg text-gray-600">Diseñado específicamente para las necesidades de los microempresarios colombianos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Proceso 100% Digital", desc: "Olvídate de las sucursales. Completa tu solicitud desde tu celular en 5 minutos." },
              { icon: TrendingUp, title: "Tasas Competitivas", desc: "Evaluamos tu negocio de forma integral para ofrecerte las mejores condiciones." },
              { icon: Users, title: "Atención Personalizada", desc: "Un equipo de expertos dispuesto a ayudarte en cada paso de tu crecimiento." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-[#EDE7F6] hover:border-[#F5A623] hover:shadow-xl hover:shadow-[#F5A623]/10 transition-all duration-300 group">
                <div className="h-14 w-14 bg-[#EDE7F6] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F5A623] transition-colors">
                  <benefit.icon className="h-7 w-7 text-[#7C4DFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#311B92] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Simulator Section */}
        <section id="simulador" className="pt-6 pb-24 px-6">
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
                      <div className="h-6 w-6 rounded-full bg-[#F5A623] flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 text-[#311B92] shadow-xl">
                <div className="mb-6 md:mb-8 text-center">
                  <p className="text-xs md:text-sm font-bold text-[#7C4DFF] uppercase tracking-wider mb-2">Simulador Rápido</p>
                  <h3 className="text-xl md:text-2xl font-black">Calcula tu cuota</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3">¿Cuánto necesitas?</label>
                    <div className="h-12 md:h-14 bg-[#EDE7F6]/50 rounded-xl border border-[#EDE7F6] flex items-center justify-center font-mono text-lg md:text-2xl font-bold text-[#311B92]">
                      $ {amount.toLocaleString('es-CO')} COP
                    </div>
                    <div className="mt-5 md:mt-6 relative">
                      <input
                        type="range"
                        min="500000"
                        max="5000000"
                        step="100000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
                        style={{
                          background: `linear-gradient(to right, #F5A623 ${((amount - 500000) / 4500000) * 100}%, #EDE7F6 ${((amount - 500000) / 4500000) * 100}%)`
                        }}
                      />
                      <div className="flex justify-between mt-2 md:mt-3 text-[10px] md:text-xs font-bold text-gray-400">
                        <span>$500.000</span>
                        <span>$5.000.000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-gray-700 mb-2 md:mb-3">¿A qué plazo?</label>
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {[3, 6, 12].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTerm(t)}
                          className={`h-10 md:h-12 rounded-xl border-2 flex items-center justify-center text-sm md:text-base font-bold transition-all ${
                            term === t 
                              ? 'border-[#7C4DFF] bg-[#7C4DFF]/10 text-[#7C4DFF]' 
                              : 'border-[#EDE7F6] text-gray-500 hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#FFF4E5]'
                          }`}
                        >
                          {t} meses
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-5 bg-[#F8F5FF] rounded-2xl border border-[#EDE7F6]">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs md:text-sm font-medium text-gray-600">Cuota mensual estimada</span>
                      <span className="text-xl md:text-2xl font-black text-[#7C4DFF]">
                        ${Math.round(monthlyPayment).toLocaleString('es-CO')}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-1">*Incluye intereses (2.5% m.v.) y seguro</p>
                  </div>
                  
                  <Link to={`/simular?amount=${amount}&term=${term}`} className="flex items-center justify-center w-full py-3 md:py-4 bg-[#F5A623] text-white rounded-xl text-sm md:text-base font-bold hover:bg-[#E09612] transition-colors shadow-lg shadow-[#F5A623]/20">
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
