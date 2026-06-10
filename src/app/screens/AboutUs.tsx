import { Target, Heart, Shield, Users, TrendingUp, Award, Zap, CheckCircle, Clock, FileCheck, UserCheck, MessageSquare, Mail, Phone, CheckSquare } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen">
      <main className="w-full max-w-[1440px] flex flex-col">

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#311B92] tracking-tight leading-[1.1]">
                Financiación transparente para impulsar tu crecimiento.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                En PLATI S.A.S. trabajamos para brindar soluciones financieras ágiles, claras y responsables para comerciantes, trabajadores independientes y microempresarios colombianos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/simular"
                  className="px-8 py-4 bg-[#7C4DFF] text-white rounded-xl font-bold text-center hover:bg-[#F5A623] transition-all shadow-lg"
                >
                  Solicitar crédito
                </Link>
                <button
                  className="px-8 py-4 bg-white border-2 border-[#7C4DFF] text-[#7C4DFF] rounded-xl font-bold text-center hover:bg-[#EDE7F6] transition-all"
                >
                  Conocer más
                </button>
              </div>
            </div>
            <div className="w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687422808191-93810cd07ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBlbnRyZXByZW5ldXJzJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc3OTQwMzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Emprendedor colombiano en su negocio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ¿Quiénes somos? */}
        <section className="px-6 py-16 bg-[#F8F9FC]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-8 text-center">
              ¿Quiénes somos?
            </h2>
            <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-[#EDE7F6]">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  PLATI S.A.S. es una empresa orientada a brindar soluciones financieras ágiles, legales y transparentes para pequeños comerciantes, trabajadores independientes y microempresarios.
                </p>
                <p>
                  Nuestro propósito es facilitar el acceso a alternativas de financiación responsables mediante procesos digitales claros, acompañamiento personalizado y protección integral de la información de nuestros usuarios.
                </p>
                <p>
                  Trabajamos bajo principios de legalidad, responsabilidad financiera, transparencia y respeto por los datos personales de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Propósito */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-6">
                  Nuestro propósito
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Queremos que más personas puedan acceder a soluciones financieras claras, responsables y digitales, sin procesos innecesariamente complejos y con información transparente desde el inicio.
                </p>
              </div>
              <div className="w-full h-[300px] rounded-2xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFuc3BhcmVuY3klMjB0cnVzdCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3OTQwMzIzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apretón de manos confianza financiera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Principios que nos representan */}
        <section className="px-6 py-16 bg-[#F8F9FC]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-12 text-center">
              Principios que nos representan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761370571806-886404629697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxDb2xvbWJpYW4lMjBlbnRyZXByZW5ldXJzJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc3OTQwMzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Legalidad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <FileCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Legalidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Desarrollamos nuestra actividad bajo principios serios, responsables y transparentes.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0cmFuc3BhcmVuY3klMjB0cnVzdCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3OTQwMzIzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Transparencia"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Transparencia</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Explicamos de forma clara nuestras condiciones generales y procesos.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDb2xvbWJpYW4lMjBlbnRyZXByZW5ldXJzJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyfGVufDF8fHx8MTc3OTQwMzIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Responsabilidad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Responsabilidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Promovemos alternativas de financiación acordes con la capacidad de pago de cada usuario.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9uJTIwc2hpZWxkJTIwZGlnaXRhbHxlbnwxfHx8fDE3Nzk0MDMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Seguridad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Seguridad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Protegemos la información personal y financiera de nuestros usuarios.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0JTIwYXR0ZW50aW9uJTIwaGVscHxlbnwxfHx8fDE3Nzk0MDMyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Acompañamiento"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Acompañamiento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Brindamos atención cercana y orientación durante cada etapa del proceso.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-[#EDE7F6]">
                <div className="h-32 w-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649359569078-c445b3c6a116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwcHJvY2VzcyUyMHRlY2hub2xvZ3klMjBtb2Rlcm4lMjBmaW50ZWNofGVufDF8fHx8MTc3OTQwMzI1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Agilidad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl flex items-center justify-center mb-6 shadow-lg -mt-16 relative z-10">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Agilidad</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Facilitamos procesos digitales simples, claros y eficientes.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ¿A quiénes acompañamos? */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-6 text-center">
              ¿A quiénes acompañamos?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              PLATI está pensado para personas que desarrollan una actividad económica real y buscan soluciones financieras modernas, responsables y transparentes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl p-8 text-center shadow-lg text-white hover:shadow-2xl transition-all">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Comerciantes</h3>
              </div>

              <div className="bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-2xl p-8 text-center shadow-lg text-white hover:shadow-2xl transition-all">
                <UserCheck className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Trabajadores independientes</h3>
              </div>

              <div className="bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl p-8 text-center shadow-lg text-white hover:shadow-2xl transition-all">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Microempresarios</h3>
              </div>

              <div className="bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-2xl p-8 text-center shadow-lg text-white hover:shadow-2xl transition-all">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold">Personas con capacidad de pago</h3>
              </div>

            </div>
          </div>
        </section>

        {/* ¿Cómo funciona? */}
        <section className="px-6 py-16 bg-[#F8F9FC]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-12 text-center">
              Así funciona nuestro proceso
            </h2>

            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7C4DFF] to-[#F5A623]"></div>

              {/* Step 1 */}
              <div className="flex gap-6 items-start relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#311B92] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                  1
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
                  <h3 className="text-xl font-bold text-[#311B92] mb-2">Solicitud</h3>
                  <p className="text-gray-600">El usuario diligencia el formulario digital.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#311B92] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                  2
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
                  <h3 className="text-xl font-bold text-[#311B92] mb-2">Estudio</h3>
                  <p className="text-gray-600">Analizamos la información suministrada.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E67E22] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                  3
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
                  <h3 className="text-xl font-bold text-[#311B92] mb-2">Validación</h3>
                  <p className="text-gray-600">Verificamos documentación y capacidad de pago.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E67E22] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                  4
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
                  <h3 className="text-xl font-bold text-[#311B92] mb-2">Respuesta</h3>
                  <p className="text-gray-600">El usuario recibe una respuesta conforme a nuestras políticas internas.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6 items-start relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E67E22] flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 flex-shrink-0">
                  5
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
                  <h3 className="text-xl font-bold text-[#311B92] mb-2">Posible desembolso</h3>
                  <p className="text-gray-600">Si la solicitud es aprobada, se informa el proceso correspondiente.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#FFF9E6] border-2 border-[#F5A623]/30 rounded-xl">
              <p className="text-sm text-gray-700 text-center">
                <strong>Nota importante:</strong> El cumplimiento de requisitos no garantiza la aprobación automática del crédito.
              </p>
            </div>
          </div>
        </section>

        {/* Confianza y Transparencia */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-6 text-center">
              Confianza, claridad y respaldo
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              En PLATI creemos que una experiencia financiera responsable debe ofrecer información clara, procesos transparentes y protección integral de los datos personales de cada usuario.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <Shield className="h-10 w-10 mx-auto mb-3 text-[#7C4DFF]" />
                <p className="text-sm font-semibold text-gray-700">Protección de datos</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <FileCheck className="h-10 w-10 mx-auto mb-3 text-[#7C4DFF]" />
                <p className="text-sm font-semibold text-gray-700">Información clara</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <UserCheck className="h-10 w-10 mx-auto mb-3 text-[#F5A623]" />
                <p className="text-sm font-semibold text-gray-700">Atención personalizada</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 mx-auto mb-3 text-[#F5A623]" />
                <p className="text-sm font-semibold text-gray-700">Procesos digitales</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <CheckCircle className="h-10 w-10 mx-auto mb-3 text-[#7C4DFF]" />
                <p className="text-sm font-semibold text-gray-700">Transparencia</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-[#EDE7F6] text-center hover:shadow-lg transition-shadow">
                <Shield className="h-10 w-10 mx-auto mb-3 text-[#F5A623]" />
                <p className="text-sm font-semibold text-gray-700">Seguridad</p>
              </div>
            </div>
          </div>
        </section>

        {/* Protección de Datos */}
        <section className="px-6 py-16 bg-[#F8F9FC]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-6">
                  Protegemos tu información
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Reconocemos la importancia de la privacidad y protección de datos personales. Por eso, toda solicitud realizada desde nuestra plataforma cuenta con mecanismos de autorización, aceptación digital y trazabilidad básica de la información.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-[#7C4DFF]/20 shadow-md">
                  <div className="flex items-start gap-4">
                    <CheckSquare className="h-6 w-6 text-[#7C4DFF] flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">
                      Autorizo de manera previa, expresa e informada a PLATI S.A.S. para el tratamiento de mis datos personales conforme a su Política de Privacidad y Habeas Data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] rounded-2xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9uJTIwc2hpZWxkJTIwZGlnaXRhbHxlbnwxfHx8fDE3Nzk0MDMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Seguridad y protección de datos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Canales de Atención */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#311B92] mb-12 text-center">
              Canales de atención
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6] text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-[#311B92] mb-2">Formulario web</h3>
                <p className="text-sm text-gray-600">Disponible 24/7</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6] text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-[#311B92] mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600">Respuesta rápida</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6] text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-[#311B92] mb-2">Correo electrónico</h3>
                <p className="text-sm text-gray-600">Atención personalizada</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6] text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-[#311B92] mb-2">Horarios de atención</h3>
                <p className="text-sm text-gray-600">Lun - Vie 8AM - 6PM</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EDE7F6]">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#311B92] mb-3">Ubicaciones</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7C4DFF]" />
                      <span>Bogotá D.C.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#7C4DFF]" />
                      <span>Bucaramanga</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-[#F8F9FC] rounded-xl p-6">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Cada solicitud enviada desde nuestra plataforma genera un registro básico de trazabilidad y aceptación legal correspondiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 bg-gradient-to-br from-[#7C4DFF] via-[#311B92] to-[#7C4DFF] text-white">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Haz crecer tu negocio con respaldo financiero responsable.
            </h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
              Conoce una forma más clara, moderna y transparente de acceder a soluciones financieras.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Link
                to="/simular"
                className="px-12 py-5 bg-[#F5A623] text-white rounded-xl font-bold text-lg text-center hover:bg-[#E67E22] transition-all shadow-2xl hover:shadow-[#F5A623]/50 hover:scale-105 transform"
              >
                Solicitar crédito ahora
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white text-[#311B92] rounded-xl font-bold text-lg text-center hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <MessageSquare className="h-6 w-6" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}