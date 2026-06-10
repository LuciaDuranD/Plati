import { Shield, Lock, FileCheck, Database, UserCheck, Scale, Cookie, Mail, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';

export function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F8F9FC] min-h-screen">
      <main className="w-full max-w-[1440px] flex flex-col">

        {/* Breadcrumb */}
        <div className="px-6 pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#7C4DFF] transition-colors">Legal</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#7C4DFF] font-medium">Política de Privacidad</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7C4DFF] to-[#5E35B1] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce cómo PLATI S.A.S. protege y trata la información personal de sus usuarios conforme a la legislación colombiana aplicable.
            </p>
          </div>
        </section>

        {/* Section 1 - Compromiso con la Privacidad */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#7C4DFF]/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#7C4DFF]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Compromiso con la privacidad</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                PLATI S.A.S. reconoce la importancia de la protección de datos personales y desarrolla sus actividades bajo principios de legalidad, seguridad, confidencialidad, transparencia y responsabilidad.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Marco Legal Aplicable */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#7C4DFF]/10 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-[#7C4DFF]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A]">Marco legal aplicable</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El tratamiento de datos personales realizado por PLATI S.A.S. se desarrolla conforme a la legislación colombiana vigente, incluyendo:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                  <span>Ley 1581 de 2012.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                  <span>Decreto 1377 de 2013.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-gray-700">
                  <CheckCircle2 className="h-6 w-6 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                  <span>Normas relacionadas con Habeas Data y protección de datos personales.</span>
                </li>
              </ul>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                  <FileCheck className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Habeas Data</p>
                </div>
                <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                  <Shield className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Protección de datos</p>
                </div>
                <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                  <Lock className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Seguridad digital</p>
                </div>
                <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                  <UserCheck className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700">Información personal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <Accordion type="single" collapsible className="w-full space-y-4">

                {/* Section 3 - Información que Recopilamos */}
                <AccordionItem value="item-1" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Database className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Información que recopilamos</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      PLATI S.A.S. podrá recopilar información suministrada voluntariamente por los usuarios a través de formularios, solicitudes digitales, canales de contacto o procesos relacionados con servicios y productos.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-[#F8F9FC] rounded-2xl p-5">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-[#7C4DFF] font-bold">•</span>
                            <span>Nombre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#7C4DFF] font-bold">•</span>
                            <span>Documento de identidad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#7C4DFF] font-bold">•</span>
                            <span>Información de contacto</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#7C4DFF] font-bold">•</span>
                            <span>Información financiera</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#7C4DFF] font-bold">•</span>
                            <span>Datos relacionados con solicitudes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 4 - Finalidad del Tratamiento */}
                <AccordionItem value="item-2" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <FileCheck className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Finalidad del tratamiento</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      La información recopilada podrá utilizarse para:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Atender solicitudes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Realizar validaciones</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Contactar al usuario</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Gestionar procesos relacionados con productos y servicios</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Cumplir obligaciones legales</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Mejorar la experiencia digital de la plataforma</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 5 - Autorización del Titular */}
                <AccordionItem value="item-3" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <UserCheck className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Autorización del titular</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      El tratamiento de datos personales se realizará previa autorización libre, expresa e informada del titular.
                    </p>
                    <div className="bg-[#F8F9FC] rounded-2xl p-6 border-l-4 border-[#7C4DFF]">
                      <div className="flex items-start gap-4">
                        <Checkbox id="authorization" className="mt-1" />
                        <label htmlFor="authorization" className="text-gray-700 leading-relaxed cursor-pointer">
                          Autorizo de manera previa, expresa e informada a PLATI S.A.S. para el tratamiento de mis datos personales conforme a su Política de Privacidad y Habeas Data.
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 6 - Derechos del Titular */}
                <AccordionItem value="item-4" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Scale className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Derechos del titular de la información</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      El usuario podrá:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Conocer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Actualizar</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Rectificar</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Solicitar corrección</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Solicitar eliminación</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Revocar autorización</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#7C4DFF] mt-0.5 flex-shrink-0" />
                        <span>Presentar consultas relacionadas con sus datos personales</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 7 - Seguridad de la Información */}
                <AccordionItem value="item-5" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Lock className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Seguridad y protección</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      PLATI S.A.S. implementa medidas razonables de seguridad tecnológica y administrativa para proteger la información personal frente a accesos no autorizados, pérdida, alteración o uso indebido.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                        <Shield className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-700">Shield</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                        <Lock className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-700">Lock</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                        <Database className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-700">Secure server</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4 text-center">
                        <FileCheck className="h-8 w-8 text-[#7C4DFF] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-700">Encrypted data</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 8 - Cookies y Trazabilidad */}
                <AccordionItem value="item-6" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Cookie className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Cookies y trazabilidad</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      La plataforma podrá utilizar cookies y tecnologías básicas de trazabilidad con fines estadísticos, de seguridad y mejora de experiencia del usuario.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 9 - Consultas y Contacto */}
                <AccordionItem value="item-7" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Consultas y atención</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Los usuarios podrán comunicarse con PLATI S.A.S. para consultas relacionadas con privacidad, tratamiento de datos personales y ejercicio de derechos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F8F9FC] rounded-2xl p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">WhatsApp</p>
                        <p className="text-sm text-gray-600">Disponible para consultas</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Correo electrónico</p>
                        <p className="text-sm text-gray-600">Respuesta en 24-48 horas</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Formulario web</p>
                        <p className="text-sm text-gray-600">Atención personalizada</p>
                      </div>
                      <div className="bg-[#F8F9FC] rounded-2xl p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Oficinas</p>
                        <p className="text-sm text-gray-600">Bogotá D.C. y Bucaramanga</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 10 - Actualizaciones */}
                <AccordionItem value="item-8" className="border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-xl font-bold text-[#1A1A1A] hover:text-[#7C4DFF] hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="h-6 w-6 text-[#7C4DFF]" />
                      <span>Actualizaciones de la política</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      PLATI S.A.S. podrá actualizar la presente Política de Privacidad cuando resulte necesario para cumplir cambios normativos, tecnológicos u operativos.
                    </p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#7C4DFF] to-[#5E35B1] rounded-3xl p-10 md:p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tu información merece protección y transparencia.
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Trabajamos para brindarte una experiencia digital segura, clara y responsable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-block px-8 py-4 bg-white text-[#7C4DFF] rounded-2xl font-bold hover:bg-[#F5A623] hover:text-white transition-all shadow-lg"
                >
                  Contactar soporte
                </Link>
                <Link
                  to="/"
                  className="inline-block px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/30"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}