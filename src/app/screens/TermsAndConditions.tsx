import { FileText, CheckSquare, AlertCircle, MessageSquare, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function TermsAndConditions() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F8F9FC] min-h-screen">
      <main className="w-full max-w-[1440px] flex flex-col">

        {/* Breadcrumb */}
        <div className="px-6 pt-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm text-gray-500">
              <Link to="/" className="hover:text-[#7C4DFF]">Legal</Link>
              {' '}/{' '}
              <span className="text-[#311B92] font-semibold">Términos y Condiciones</span>
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#311B92] tracking-tight leading-[1.1] mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce las condiciones generales de uso de la plataforma PLATI S.A.S., así como las reglas aplicables a los procesos digitales, solicitudes y servicios ofrecidos.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto space-y-6">

            {/* Section 1 - Uso de la Plataforma */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Uso de la plataforma
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El acceso y uso de la página web de PLATI S.A.S. implica la aceptación de los presentes términos y condiciones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                El usuario se compromete a utilizar la plataforma de manera responsable, suministrando información veraz, actualizada y completa en cada uno de los formularios y canales digitales disponibles.
              </p>
            </div>

            {/* Section 2 - Solicitudes y Estudio de Crédito */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Solicitudes y estudio de crédito
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las solicitudes realizadas a través de la plataforma serán objeto de validación, análisis y estudio conforme a las políticas internas de PLATI S.A.S.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El cumplimiento de requisitos generales no garantiza la aprobación automática del crédito.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Toda solicitud podrá estar sujeta a validación documental, análisis interno y verificación de capacidad de pago.
              </p>

              <div className="bg-gradient-to-br from-[#7C4DFF]/10 to-[#311B92]/10 border-l-4 border-[#7C4DFF] rounded-r-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-[#7C4DFF] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">
                    La aprobación de cualquier solicitud dependerá del estudio interno y validación correspondiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 - Simulador Financiero */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Simulador financiero
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                El simulador disponible en la plataforma tiene una finalidad únicamente informativa y permite visualizar valores aproximados relacionados con una posible solicitud de financiación.
              </p>

              <div className="bg-[#FFF9E6] border-2 border-[#F5A623]/30 rounded-xl p-6">
                <p className="text-gray-700 font-medium">
                  La simulación no constituye aprobación definitiva de crédito ni genera obligación contractual para PLATI S.A.S.
                </p>
              </div>
            </div>

            {/* Section 4 - Responsabilidad del Usuario */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Responsabilidad del usuario
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El usuario será responsable de la veracidad y actualización de la información suministrada a través de formularios, solicitudes y canales digitales de la plataforma.
              </p>
              <p className="text-gray-700 leading-relaxed">
                PLATI S.A.S. podrá solicitar información adicional o realizar validaciones cuando lo considere necesario.
              </p>
            </div>

            {/* Section 5 - Protección de Datos Personales */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Protección de datos personales
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PLATI S.A.S. reconoce la importancia de la protección de datos personales y desarrolla sus procesos conforme a la legislación colombiana aplicable, incluyendo:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#7C4DFF] font-bold">•</span>
                  <span>Ley 1581 de 2012.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#7C4DFF] font-bold">•</span>
                  <span>Decreto 1377 de 2013.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#7C4DFF] font-bold">•</span>
                  <span>Normas relacionadas con Habeas Data y protección de información personal.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Toda autorización de tratamiento de datos deberá realizarse de manera previa, expresa e informada.
              </p>

              <div className="bg-[#F8F9FC] border-2 border-[#7C4DFF]/20 rounded-xl p-6">
                <label className="flex items-start gap-4 cursor-pointer">
                  <CheckSquare className="h-6 w-6 text-[#7C4DFF] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    He leído y acepto la{' '}
                    <Link to="/politica-de-privacidad" className="text-[#7C4DFF] font-bold underline hover:text-[#F5A623]">
                      Política de Privacidad y Tratamiento de Datos
                    </Link>.
                  </span>
                </label>
              </div>
            </div>

            {/* Section 6 - Limitación de Responsabilidad */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Limitación de responsabilidad
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PLATI S.A.S. no garantiza disponibilidad permanente e ininterrumpida de la plataforma y no será responsable por eventos técnicos, tecnológicos o externos que afecten temporalmente el funcionamiento del sitio web.
              </p>
            </div>

            {/* Section 7 - Propiedad Intelectual */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Propiedad intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Los contenidos, diseños, marcas, logotipos, imágenes, textos y demás elementos visuales de la plataforma son propiedad de PLATI S.A.S. o cuentan con autorización para su uso, por lo que no podrán ser reproducidos sin autorización previa.
              </p>
            </div>

            {/* Section 8 - Actualizaciones */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-4">
                Actualizaciones de los términos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PLATI S.A.S. podrá modificar o actualizar los presentes términos y condiciones cuando resulte necesario para efectos legales, tecnológicos, operativos o comerciales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Las actualizaciones serán publicadas oportunamente en la plataforma.
              </p>
            </div>

            {/* Section 9 - Canales de Atención */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#EDE7F6]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#311B92] mb-6">
                Canales de atención
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 bg-[#F8F9FC] rounded-xl border border-[#EDE7F6]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-full flex items-center justify-center mb-3">
                    <MessageSquare className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#311B92] mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-600">Atención inmediata</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-[#F8F9FC] rounded-xl border border-[#EDE7F6]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F5A623] to-[#E67E22] rounded-full flex items-center justify-center mb-3">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#311B92] mb-1">Correo electrónico</h3>
                  <p className="text-sm text-gray-600">Soporte profesional</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-[#F8F9FC] rounded-xl border border-[#EDE7F6]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-full flex items-center justify-center mb-3">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#311B92] mb-1">Formulario web</h3>
                  <p className="text-sm text-gray-600">24/7 disponible</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#7C4DFF]" />
                  <span>Bogotá D.C.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#F5A623]" />
                  <span>Bucaramanga</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#7C4DFF] to-[#311B92] rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Transparencia y claridad en cada proceso.
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              En PLATI buscamos ofrecer una experiencia financiera responsable, moderna y segura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sobre-nosotros"
                className="px-10 py-4 bg-[#F5A623] text-white rounded-xl font-bold hover:bg-[#E67E22] transition-all shadow-lg"
              >
                Contactar soporte
              </Link>
              <Link
                to="/"
                className="px-10 py-4 bg-white text-[#311B92] rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}