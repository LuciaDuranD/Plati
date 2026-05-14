import { CheckCircle, Smartphone, Clock, DollarSign, Calendar, TrendingUp, Users, Award, CreditCard, Shield, Zap, FileText, Building2, User, Briefcase } from "lucide-react";
import { Link } from "react-router";

export function BenefitsDetail() {
  const microcreditBenefits = [
    {
      icon: Clock,
      title: "Aprobación rápida",
      description: "Respuesta en 24 a 72 horas hábiles"
    },
    {
      icon: DollarSign,
      title: "Montos flexibles",
      description: "Desde pequeñas sumas para arrancar hasta montos mayores para crecer"
    },
    {
      icon: Calendar,
      title: "Plazos cómodos",
      description: "Cuotas mensuales según tu flujo de caja"
    },
    {
      icon: FileText,
      title: "Pocos requisitos",
      description: "Sin necesidad de grandes garantías ni experiencia crediticia previa"
    },
    {
      icon: Building2,
      title: "Visita en tu negocio",
      description: "Un asesor va donde tú estés"
    },
    {
      icon: TrendingUp,
      title: "Crece con nosotros",
      description: "A mejor historial, mejores condiciones en tu próximo crédito"
    },
    {
      icon: Users,
      title: "Acompañamiento personalizado",
      description: "Asesoría financiera incluida para tu negocio"
    },
    {
      icon: Award,
      title: "Inclusión financiera",
      description: "Acceso para personas sin historial crediticio formal"
    }
  ];

  const consumerCreditBenefits = [
    {
      icon: Zap,
      title: "Desembolso ágil",
      description: "Dinero en tu cuenta en menos de 24 horas tras la aprobación"
    },
    {
      icon: CreditCard,
      title: "Cuotas fijas",
      description: "Sabes exactamente cuánto pagas cada mes, sin sorpresas"
    },
    {
      icon: DollarSign,
      title: "Libre destinación",
      description: "Úsalo en lo que más necesites: salud, educación, viajes, hogar y más"
    },
    {
      icon: TrendingUp,
      title: "Tasas competitivas",
      description: "Condiciones justas acordes al mercado colombiano"
    },
    {
      icon: Calendar,
      title: "Plazos amplios",
      description: "Desde 6 hasta 60 meses para que elijas la cuota que más te convenga"
    },
    {
      icon: Shield,
      title: "Seguridad y confianza",
      description: "Proceso 100% transparente y respaldado"
    },
    {
      icon: Smartphone,
      title: "Gestión digital",
      description: "Consulta tu crédito, estado de cuenta y pagos en línea"
    },
    {
      icon: Award,
      title: "Beneficios por buen pagador",
      description: "Acceso a mayores montos y mejores tasas en futuras solicitudes"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#F8F9FC] min-h-screen">
      <main className="w-full max-w-[1440px] flex flex-col">
        {/* Hero Header */}
        <section className="px-6 py-16 md:py-20 text-center bg-gradient-to-br from-[#311B92] via-[#7C4DFF] to-[#311B92] relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5A623]/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5A623]/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Beneficios diseñados para ti
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Conoce todas las ventajas de elegir PLATI como tu aliado financiero
            </p>
            <Link
              to="/simular"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#311B92] rounded-2xl font-bold text-lg hover:bg-[#F5A623] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Solicitar crédito ahora
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Microcrédito Section */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-[#F5A623]/10 rounded-full mb-4">
                <span className="text-[#F5A623] font-bold text-sm uppercase tracking-wider">Microcrédito</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#311B92] mb-4">
                Impulsamos tu negocio y tus sueños
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Créditos diseñados específicamente para microempresarios y emprendedores colombianos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microcreditBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F5A623]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#F5A623]/15 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5A623]/10 to-[#F5A623]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#F5A623]/20">
                      <benefit.icon className="w-6 h-6 text-[#F5A623]" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#311B92] mb-2 group-hover:text-[#F5A623] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crédito de Consumo Section */}
        <section className="px-6 py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-[#F5A623]/10 rounded-full mb-4">
                <span className="text-[#F5A623] font-bold text-sm uppercase tracking-wider">Crédito de Consumo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#311B92] mb-4">
                Para lo que necesitas hoy, con la tranquilidad de siempre
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Soluciones financieras flexibles para cumplir tus metas personales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consumerCreditBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F5A623]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#F5A623]/15 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5A623]/10 to-[#F5A623]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#F5A623]/20">
                      <benefit.icon className="w-6 h-6 text-[#F5A623]" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#311B92] mb-2 group-hover:text-[#F5A623] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="px-6 py-16 md:py-20 bg-[#F8F9FC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#311B92] mb-4">
                Requisitos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tenemos 2 tipos de crédito con requisitos adaptados a tu perfil
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Microcrédito Requirements */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-[#F5A623]/30 shadow-lg hover:shadow-xl hover:shadow-[#F5A623]/10 transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#FF9800] flex items-center justify-center shadow-lg shadow-[#F5A623]/20">
                    <Briefcase className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#311B92]">Microcrédito</h3>
                    <p className="text-sm text-gray-600">Para microempresarios y emprendedores</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#F5A623]" />
                      Documentos
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Cédula de ciudadanía (original y copia)",
                        "RUT actualizado (si aplica)",
                        "Cámara de Comercio o registro del negocio (si aplica)",
                        "Extractos bancarios de los últimos 3 meses",
                        "Factura de servicios públicos (como comprobante de domicilio)"
                      ].map((doc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#F5A623]" />
                      Condiciones del solicitante
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Mayor de 18 años",
                        "Actividad económica demostrable (mínimo 6 meses de antigüedad)",
                        "No estar reportado en centrales de riesgo o tener acuerdo de pago",
                        "Residir en la ciudad o municipio de cobertura"
                      ].map((cond, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#F5A623]" />
                      Información del negocio
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Descripción de la actividad económica",
                        "Ingresos mensuales aproximados",
                        "Destino del crédito (capital de trabajo, maquinaria, inventario, etc.)"
                      ].map((info, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Crédito de Consumo Requirements */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-[#F5A623]/30 shadow-lg hover:shadow-xl hover:shadow-[#F5A623]/10 transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#FF9800] flex items-center justify-center shadow-lg shadow-[#F5A623]/20">
                    <CreditCard className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#311B92]">Crédito de Consumo</h3>
                    <p className="text-sm text-gray-600">Para empleados y pensionados</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#F5A623]" />
                      Documentos
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Cédula de ciudadanía (original y copia)",
                        "Últimos 2 desprendibles de nómina o certificado de ingresos",
                        "Extractos bancarios de los últimos 3 meses",
                        "Certificado laboral (con cargo, salario y antigüedad)",
                        "Factura de servicios públicos (como comprobante de domicilio)"
                      ].map((doc, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#F5A623]" />
                      Condiciones del solicitante
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Mayor de 18 años",
                        "Contrato laboral vigente (fijo, indefinido o pensionado)",
                        "Antigüedad laboral mínima de 6 meses",
                        "Ingresos iguales o superiores a 1 SMMLV",
                        "No estar reportado negativamente en centrales de riesgo"
                      ].map((cond, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#311B92] mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#F5A623]" />
                      Información adicional
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Destino del crédito (viaje, electrodomésticos, salud, educación, etc.)",
                        "Referencias personales y/o comerciales"
                      ].map((info, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#311B92] via-[#7C4DFF] to-[#311B92]"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F5A623]/40 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-[100px]"></div>

            <div className="relative z-10 px-8 py-16 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                ¿Listo para dar el siguiente paso?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Simula tu crédito en minutos y descubre cuánto puedes obtener
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/simular"
                  className="px-10 py-5 bg-[#F5A623] text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#F5A623] transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Simular crédito
                </Link>
                <Link
                  to="/registro"
                  className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#311B92] transition-all duration-300"
                >
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
