import { Target, Heart, Shield, Users, TrendingUp, Award } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-white border-b-2 border-[#e0e0e0] px-12 py-4 flex items-center justify-between z-10">
        <div className="text-2xl font-bold text-[#2a2a2a]">PLATI</div>
        <div className="flex gap-8 text-[#404040]">
          <a href="#" className="hover:text-[#2a2a2a]">Inicio</a>
          <a href="#" className="hover:text-[#2a2a2a]">Beneficios</a>
          <a href="#" className="hover:text-[#2a2a2a]">Simular</a>
          <a href="#" className="hover:text-[#2a2a2a]">Medios de Pagos</a>
        </div>
        <button className="bg-[#2a2a2a] text-white px-6 py-2 font-semibold hover:bg-[#404040]">
          Solicitar Crédito
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-12 py-20 bg-[#f0f0f0] border-b-2 border-[#d0d0d0]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2a2a2a] mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-[#606060] max-w-3xl mx-auto">
            Impulsamos el crecimiento de pequeñas empresas en Colombia con créditos rápidos, seguros y accesibles
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
          <div className="border-2 border-[#d0d0d0] p-10 bg-[#fafafa]">
            <div className="w-16 h-16 bg-[#d0d0d0] rounded-full flex items-center justify-center mb-6">
              <Target size={32} className="text-[#606060]" />
            </div>
            <h2 className="text-2xl font-bold text-[#2a2a2a] mb-4">Nuestra Misión</h2>
            <p className="text-[#606060] leading-relaxed">
              Democratizar el acceso al crédito para pequeños empresarios colombianos, brindando soluciones financieras rápidas, transparentes y tecnológicas que impulsen el crecimiento económico del país.
            </p>
          </div>

          <div className="border-2 border-[#d0d0d0] p-10 bg-[#fafafa]">
            <div className="w-16 h-16 bg-[#d0d0d0] rounded-full flex items-center justify-center mb-6">
              <TrendingUp size={32} className="text-[#606060]" />
            </div>
            <h2 className="text-2xl font-bold text-[#2a2a2a] mb-4">Nuestra Visión</h2>
            <p className="text-[#606060] leading-relaxed">
              Ser la plataforma líder de microcréditos en Colombia para 2028, reconocidos por nuestra excelencia en servicio, innovación tecnológica y compromiso con el desarrollo empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-12 py-16 bg-[#f5f5f5] border-y-2 border-[#d0d0d0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-8 text-center">
            Nuestra Historia
          </h2>
          <div className="bg-white border-2 border-[#d0d0d0] p-10">
            <div className="space-y-6 text-[#404040]">
              <p className="leading-relaxed">
                PLATI nació en 2022 con una visión clara: transformar la manera en que los pequeños empresarios colombianos acceden al crédito. Fundada por un equipo de expertos en finanzas y tecnología, nuestra plataforma surge de la necesidad de eliminar las barreras tradicionales que dificultan el acceso al capital.
              </p>
              <p className="leading-relaxed">
                Desde nuestros inicios, hemos desembolsado más de $2.5 mil millones de pesos a más de 5,000 pequeñas empresas en todo el país. Nuestro compromiso va más allá de otorgar créditos: buscamos construir relaciones duraderas con nuestros clientes, apoyándolos en cada etapa de su crecimiento empresarial.
              </p>
              <p className="leading-relaxed">
                Hoy, PLATI se consolida como una alternativa confiable, ágil y transparente en el ecosistema fintech colombiano, respaldada por tecnología de punta y un equipo humano comprometido con el progreso económico del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#e0e0e0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={36} className="text-[#606060]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a2a2a] mb-3">Transparencia</h3>
              <p className="text-[#606060]">
                Comunicación clara y honesta en todas nuestras operaciones. Sin letra pequeña ni sorpresas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#e0e0e0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={36} className="text-[#606060]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a2a2a] mb-3">Compromiso Social</h3>
              <p className="text-[#606060]">
                Creemos en el poder transformador del crédito para mejorar vidas y comunidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#e0e0e0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={36} className="text-[#606060]" />
              </div>
              <h3 className="text-xl font-bold text-[#2a2a2a] mb-3">Innovación</h3>
              <p className="text-[#606060]">
                Tecnología de vanguardia para hacer el proceso más rápido, seguro y accesible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-12 py-16 bg-[#f5f5f5] border-y-2 border-[#d0d0d0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-12 text-center">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white border-2 border-[#d0d0d0] p-8 text-center">
              <div className="text-4xl font-bold text-[#2a2a2a] mb-2">5,000+</div>
              <div className="text-sm text-[#606060]">Empresas financiadas</div>
            </div>
            <div className="bg-white border-2 border-[#d0d0d0] p-8 text-center">
              <div className="text-4xl font-bold text-[#2a2a2a] mb-2">$2.5B</div>
              <div className="text-sm text-[#606060]">Pesos desembolsados</div>
            </div>
            <div className="bg-white border-2 border-[#d0d0d0] p-8 text-center">
              <div className="text-4xl font-bold text-[#2a2a2a] mb-2">97%</div>
              <div className="text-sm text-[#606060]">Tasa de satisfacción</div>
            </div>
            <div className="bg-white border-2 border-[#d0d0d0] p-8 text-center">
              <div className="text-4xl font-bold text-[#2a2a2a] mb-2">24h</div>
              <div className="text-sm text-[#606060]">Tiempo promedio de desembolso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-12 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-[#d0d0d0] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-[#2a2a2a] mb-1">Nombre Apellido</h3>
              <p className="text-sm text-[#606060] mb-2">CEO & Fundador</p>
              <p className="text-xs text-[#808080]">15 años en fintech</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-[#d0d0d0] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-[#2a2a2a] mb-1">Nombre Apellido</h3>
              <p className="text-sm text-[#606060] mb-2">CTO</p>
              <p className="text-xs text-[#808080]">Experta en IA y análisis</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-[#d0d0d0] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-[#2a2a2a] mb-1">Nombre Apellido</h3>
              <p className="text-sm text-[#606060] mb-2">CFO</p>
              <p className="text-xs text-[#808080]">20 años en banca</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-[#d0d0d0] rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-[#2a2a2a] mb-1">Nombre Apellido</h3>
              <p className="text-sm text-[#606060] mb-2">Head of Operations</p>
              <p className="text-xs text-[#808080]">Especialista en riesgo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="px-12 py-16 bg-[#f5f5f5] border-y-2 border-[#d0d0d0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-12 text-center">
            Certificaciones y Cumplimiento
          </h2>
          <div className="bg-white border-2 border-[#d0d0d0] p-10">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#e0e0e0] mx-auto mb-4"></div>
                <p className="text-sm font-semibold text-[#2a2a2a]">Superintendencia Financiera</p>
                <p className="text-xs text-[#606060] mt-1">Registro RNBD #123456</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-[#e0e0e0] mx-auto mb-4"></div>
                <p className="text-sm font-semibold text-[#2a2a2a]">ISO 27001</p>
                <p className="text-xs text-[#606060] mt-1">Seguridad de la información</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-[#e0e0e0] mx-auto mb-4"></div>
                <p className="text-sm font-semibold text-[#2a2a2a]">PCI DSS</p>
                <p className="text-xs text-[#606060] mt-1">Protección de datos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2a2a2a] mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-[#606060] mb-8 text-lg">
            Únete a miles de empresarios que confían en PLATI
          </p>
          <button className="bg-[#2a2a2a] text-white px-12 py-4 font-bold text-lg hover:bg-[#404040]">
            Solicitar mi crédito
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-8 bg-[#2a2a2a] text-white border-t-2 border-[#404040]">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">PLATI</h4>
            <p className="text-sm text-[#b0b0b0]">
              Microcréditos para pequeñas empresas
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Producto</h4>
            <ul className="text-sm text-[#b0b0b0] space-y-2">
              <li>Simular crédito</li>
              <li>Requisitos</li>
              <li>Tasas y plazos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Empresa</h4>
            <ul className="text-sm text-[#b0b0b0] space-y-2">
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul className="text-sm text-[#b0b0b0] space-y-2">
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>RNBD #123456</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#404040] text-center text-sm text-[#808080]">
          © 2026 PLATI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}