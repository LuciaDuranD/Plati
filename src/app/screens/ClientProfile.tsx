import { User, Mail, Phone, MapPin, Briefcase, Camera, FileText, Upload, CheckCircle } from "lucide-react";

export function ClientProfile() {
  const user = {
    name: "Juan Carlos Pérez",
    email: "juan.perez@ejemplo.com",
    phone: "+57 312 456 7890",
    idNumber: "1.023.456.789",
    address: "Calle 123 #45-67, Bogotá",
    occupation: "Comerciante Independiente",
    joinDate: "Mayo 2023",
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#311B92]">Mi Perfil</h1>
        <p className="text-gray-600">Gestiona tu información personal y de contacto.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Avatar and basic info */}
        <div className="col-span-1">
          <div className="bg-white rounded-2xl border border-[#EDE7F6] p-6 text-center shadow-lg">
            <div className="relative inline-block mb-4">
              <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C4DFF]/30 via-[#9575FF]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#AB47BC]/20 to-transparent"></div>
                <User className="h-16 w-16 text-[#6A1B9A] relative z-10 drop-shadow-lg" />
              </div>
              <button className="absolute bottom-0 right-0 h-10 w-10 bg-gradient-to-br from-[#F5A623] via-[#FF9800] to-[#F57C00] text-white rounded-full flex items-center justify-center border-4 border-white hover:from-[#E09612] hover:to-[#EF6C00] transition-all shadow-xl shadow-[#F5A623]/50 hover:shadow-2xl hover:shadow-[#F5A623]/60">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            <h2 className="text-xl font-bold text-[#311B92]">{user.name}</h2>
            <p className="text-sm text-gray-500 mb-6">C.C. {user.idNumber}</p>

            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#EDE7F6] via-[#D1C4E9] to-[#EDE7F6] text-[#6A1B9A] text-xs font-bold rounded-full border-2 border-[#D1C4E9] shadow-md">
              Miembro desde {user.joinDate}
            </div>
          </div>
        </div>

        {/* Right column: Detailed info */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-[#EDE7F6] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#311B92]">Información Personal</h3>
              <button className="text-sm font-bold bg-gradient-to-r from-[#F5A623] via-[#FF9800] to-[#F57C00] text-white px-5 py-2.5 rounded-lg hover:from-[#E09612] hover:via-[#F57C00] hover:to-[#EF6C00] transition-all shadow-xl shadow-[#F5A623]/50 hover:shadow-2xl hover:shadow-[#F5A623]/60 border border-[#FF9800]/30">
                Actualizar datos
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] flex items-center justify-center shrink-0 shadow-md border border-[#D1C4E9]/50">
                    <User className="h-5 w-5 text-[#6A1B9A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Nombre Completo</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] flex items-center justify-center shrink-0 shadow-md border border-[#D1C4E9]/50">
                    <Briefcase className="h-5 w-5 text-[#6A1B9A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ocupación</p>
                    <p className="font-medium text-gray-900">{user.occupation}</p>
                  </div>
                </div>
              </div>

              <hr className="border-[#EDE7F6]" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] flex items-center justify-center shrink-0 shadow-md border border-[#D1C4E9]/50">
                    <Mail className="h-5 w-5 text-[#6A1B9A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Correo Electrónico</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] flex items-center justify-center shrink-0 shadow-md border border-[#D1C4E9]/50">
                    <Phone className="h-5 w-5 text-[#6A1B9A]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Teléfono</p>
                    <p className="font-medium text-gray-900">{user.phone}</p>
                  </div>
                </div>
              </div>

              <hr className="border-[#EDE7F6]" />

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#D1C4E9] via-[#EDE7F6] to-[#F8F5FF] flex items-center justify-center shrink-0 shadow-md border border-[#D1C4E9]/50">
                  <MapPin className="h-5 w-5 text-[#6A1B9A]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Dirección de Residencia</p>
                  <p className="font-medium text-gray-900">{user.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-white rounded-2xl border border-[#EDE7F6] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#311B92]">Documentos Guardados</h3>
            </div>

            <div className="space-y-4">
              {/* Cédula */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#EDE7F6] transition-colors bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cédula de Ciudadanía</p>
                    <p className="text-xs text-gray-500">cedula_front_back.pdf • 2.4 MB</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 bg-gray-100 rounded-lg">
                  Verificado
                </div>
              </div>

              {/* Extracto Mes 1 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#EDE7F6] transition-colors bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Extracto Bancario (Mes 1)</p>
                    <p className="text-xs text-gray-500">extracto_mes1.pdf • 1.4 MB</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#F5A623] hover:text-[#E09612] transition-colors px-3 py-1.5 rounded-lg hover:bg-orange-50">
                  <Upload className="h-4 w-4" />
                  Actualizar
                </button>
              </div>

              {/* Extracto Mes 2 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#EDE7F6] transition-colors bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Extracto Bancario (Mes 2)</p>
                    <p className="text-xs text-gray-500">extracto_mes2.pdf • 1.2 MB</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#F5A623] hover:text-[#E09612] transition-colors px-3 py-1.5 rounded-lg hover:bg-orange-50">
                  <Upload className="h-4 w-4" />
                  Actualizar
                </button>
              </div>

              {/* Extracto Mes 3 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#EDE7F6] transition-colors bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Extracto Bancario (Mes 3)</p>
                    <p className="text-xs text-gray-500">extracto_mes3.pdf • 1.5 MB</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#F5A623] hover:text-[#E09612] transition-colors px-3 py-1.5 rounded-lg hover:bg-orange-50">
                  <Upload className="h-4 w-4" />
                  Actualizar
                </button>
              </div>

              {/* RUT */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#EDE7F6] transition-colors bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 flex flex-col md:flex-row md:items-center md:gap-1">
                      RUT
                      <span className="text-gray-500 text-xs font-normal">(Opcional)</span>
                    </p>
                    <p className="text-xs text-gray-500">rut_actualizado.pdf • 1.2 MB</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#F5A623] hover:text-[#E09612] transition-colors px-3 py-1.5 rounded-lg hover:bg-orange-50">
                  <Upload className="h-4 w-4" />
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
