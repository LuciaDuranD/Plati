import { Link } from "react-router";
import { ArrowLeft, Save, User, Upload, FileText, Image, X } from "lucide-react";
import { useState } from "react";

export function AdminNewUser() {
  const [uploadedDocs, setUploadedDocs] = useState<{ [key: string]: File | null }>({
    cedula_frontal: null,
    cedula_reverso: null,
    selfie: null,
    rut: null,
    extracto_bancario: null,
    camara_comercio: null,
  });

  const handleFileUpload = (docType: string, file: File | null) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: file }));
  };

  const removeFile = (docType: string) => {
    setUploadedDocs(prev => ({ ...prev, [docType]: null }));
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          to="/admin/usuarios"
          className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shrink-0"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Nuevo Usuario</h1>
          <p className="text-sm md:text-base text-gray-600">Registra un nuevo cliente en la plataforma</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-br from-[#7C4DFF] to-[#311B92] p-6">
            <div className="flex items-center gap-3 text-white">
              <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold">Información del Cliente</h2>
                <p className="text-xs md:text-sm text-white/80">Complete los datos básicos del nuevo usuario</p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre completo */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>

              {/* Tipo de documento */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tipo de documento <span className="text-red-500">*</span>
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all bg-white">
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="CE">Cédula de Extranjería</option>
                  <option value="NIT">NIT</option>
                  <option value="PAS">Pasaporte</option>
                </select>
              </div>

              {/* Número de documento */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Número de documento <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="Ej. 1020304050"
                  required
                />
              </div>

              {/* Celular */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Celular <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="Ej. 300 123 4567"
                  required
                />
              </div>

              {/* Correo electrónico */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              {/* Nombre del negocio */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre del negocio
                </label>
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="Ej. Ferretería El Centro"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
              </div>

              {/* Confirmar contraseña */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Confirmar contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Estado inicial */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Estado inicial
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all bg-white">
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              {/* Nivel de riesgo */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nivel de riesgo inicial
                </label>
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all bg-white">
                  <option value="A">A - Riesgo Bajo</option>
                  <option value="B">B - Riesgo Medio Bajo</option>
                  <option value="C">C - Riesgo Medio Alto</option>
                  <option value="D">D - Riesgo Alto</option>
                </select>
              </div>
            </div>

            {/* Documents Upload Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-[#EDE7F6] rounded-lg flex items-center justify-center shrink-0">
                  <Upload className="h-5 w-5 text-[#7C4DFF]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">Documentos y Verificación</h3>
                  <p className="text-xs md:text-sm text-gray-600">Cargue los documentos requeridos del cliente</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cédula Frontal */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Cédula - Frontal <span className="text-red-500">*</span>
                  </label>
                  {!uploadedDocs.cedula_frontal ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Image className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PNG, JPG (max. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('cedula_frontal', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.cedula_frontal.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('cedula_frontal')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Cédula Reverso */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Cédula - Reverso <span className="text-red-500">*</span>
                  </label>
                  {!uploadedDocs.cedula_reverso ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Image className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PNG, JPG (max. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('cedula_reverso', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.cedula_reverso.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('cedula_reverso')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Selfie con Cédula */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Selfie con Cédula <span className="text-red-500">*</span>
                  </label>
                  {!uploadedDocs.selfie ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Image className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PNG, JPG (max. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('selfie', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Image className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.selfie.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('selfie')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>

                {/* RUT */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    RUT (Si aplica)
                  </label>
                  {!uploadedDocs.rut ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FileText className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PDF (max. 10MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload('rut', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.rut.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('rut')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Extracto Bancario */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Extracto Bancario (últimos 3 meses)
                  </label>
                  {!uploadedDocs.extracto_bancario ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FileText className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PDF (max. 10MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload('extracto_bancario', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.extracto_bancario.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('extracto_bancario')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Cámara de Comercio */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Cámara de Comercio (Si aplica)
                  </label>
                  {!uploadedDocs.camara_comercio ? (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7C4DFF] hover:bg-[#EDE7F6]/30 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FileText className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500 font-medium">Haz clic para cargar</p>
                        <p className="text-xs text-gray-400">PDF (max. 10MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={(e) => handleFileUpload('camara_comercio', e.target.files?.[0] || null)}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-3 border border-green-300 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-700 truncate">{uploadedDocs.camara_comercio.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile('camara_comercio')}
                        className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-green-200 transition-colors"
                      >
                        <X className="h-4 w-4 text-green-700" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Nota informativa */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-bold">Nota:</span> El usuario recibirá un correo electrónico con sus credenciales de acceso y podrá cambiar su contraseña en el primer inicio de sesión.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
              <Link
                to="/admin/usuarios"
                className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-white rounded-lg text-sm font-bold hover:bg-[#E09612] transition-colors shadow-sm shadow-[#F5A623]/20"
              >
                <Save className="h-4 w-4" strokeWidth={2.5} />
                Crear Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
