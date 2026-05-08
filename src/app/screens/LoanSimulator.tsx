import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { Calculator, Info, ArrowRight } from "lucide-react";

export function LoanSimulator() {
  const [searchParams] = useSearchParams();
  const initialAmount = Number(searchParams.get("amount")) || 2000000;
  const initialTerm = Number(searchParams.get("term")) || 6;

  const [amount, setAmount] = useState(initialAmount);
  const [term, setTerm] = useState(initialTerm);

  // Scroll to top when the simulator screen is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  
  // Fake calculation logic for wireframe
  const interestRate = 0.025; // 2.5% monthly
  const monthlyInterest = amount * interestRate;
  const principalPayment = amount / term;
  const monthlyPayment = principalPayment + monthlyInterest;
  const totalInterest = monthlyInterest * term;
  const totalPayment = amount + totalInterest;

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-[#311B92] mb-4">Simulador de Crédito</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ajusta el monto y el plazo para encontrar la cuota que mejor se adapte a tu negocio.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-[#EDE7F6] overflow-hidden flex flex-col md:flex-row">
        {/* Controls Section */}
        <div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#EDE7F6]">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 bg-[#EDE7F6] rounded-2xl flex items-center justify-center">
              <Calculator className="h-6 w-6 text-[#7C4DFF]" />
            </div>
            <h2 className="text-2xl font-bold text-[#311B92]">Configura tu préstamo</h2>
          </div>

          <div className="space-y-8">
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-bold text-gray-700">¿Cuánto necesitas?</label>
                <span className="font-mono font-black text-[#7C4DFF] text-xl">
                  $ {amount.toLocaleString('es-CO')}
                </span>
              </div>
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
              <div className="flex justify-between mt-3 text-xs font-bold text-gray-400">
                <span>$500.000</span>
                <span>$5.000.000</span>
              </div>
            </div>

            {/* Term Selector */}
            <div>
              <label className="font-bold text-gray-700 block mb-4">¿A qué plazo?</label>
              <div className="grid grid-cols-3 gap-4">
                {[3, 6, 12].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`py-3 rounded-xl border-2 text-center font-bold transition-all ${
                      term === t 
                        ? 'border-[#7C4DFF] bg-[#7C4DFF]/10 text-[#7C4DFF]' 
                        : 'border-[#EDE7F6] bg-white text-gray-500 hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#FFF4E5]'
                    }`}
                  >
                    {t} meses
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-[#F8F5FF] p-4 rounded-xl flex items-start gap-3 border border-[#EDE7F6]">
              <Info className="h-5 w-5 text-[#7C4DFF] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                La tasa de interés final dependerá del análisis de tu perfil crediticio. Esta simulación es referencial (2.5% m.v.).
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="w-full md:w-[400px] bg-[#F8F5FF] p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#7C4DFF] uppercase tracking-wider mb-6">Resumen de tu crédito</h3>
            
            <div className="bg-white p-6 rounded-2xl border border-[#EDE7F6] mb-8 text-center shadow-sm">
              <p className="text-gray-500 text-sm font-medium mb-2">Cuota mensual estimada</p>
              <p className="text-4xl font-black text-[#311B92] font-mono">
                $ {Math.round(monthlyPayment).toLocaleString('es-CO')}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-[#EDE7F6] pb-3">
                <span className="text-gray-600">Monto solicitado</span>
                <span className="font-bold text-[#311B92]">$ {amount.toLocaleString('es-CO')}</span>
              </div>
              <div className="flex justify-between border-b border-[#EDE7F6] pb-3">
                <span className="text-gray-600">Intereses totales estimados</span>
                <span className="font-bold text-[#311B92]">$ {Math.round(totalInterest).toLocaleString('es-CO')}</span>
              </div>
              <div className="flex justify-between border-b border-[#EDE7F6] pb-3">
                <span className="text-gray-600">Costo total a pagar</span>
                <span className="font-bold text-[#7C4DFF]">$ {Math.round(totalPayment).toLocaleString('es-CO')}</span>
              </div>
            </div>
          </div>

          <Link 
            to="/registro" 
            className="mt-8 w-full py-4 bg-[#F5A623] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#E09612] transition-colors shadow-lg shadow-[#F5A623]/20"
          >
            Continuar solicitud <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
