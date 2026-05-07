import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export function LoanStatusTracker() {
  const currentStep = 2; // 1: Recibida, 2: En revisión, 3: Aprobada, 4: Desembolsada

  const steps = [
    { title: "Solicitud Recibida", date: "12 Oct 2023, 10:30 AM", desc: "Hemos recibido tu información y documentos correctamente." },
    { title: "En Revisión", date: "Actualmente", desc: "Nuestro equipo está analizando tu perfil crediticio y capacidad de pago." },
    { title: "Aprobación", date: "Pendiente", desc: "Notificación de las condiciones finales aprobadas para tu negocio." },
    { title: "Desembolso", date: "Pendiente", desc: "Transferencia de los fondos a tu cuenta bancaria registrada." },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Estado de tu Solicitud</h1>
        <p className="text-gray-600 flex items-center gap-2">
          <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">REF-847291</span>
          Solicitud de Capital de Trabajo
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-8 border border-gray-100">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
            <Clock className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Tiempo estimado de respuesta</h3>
            <p className="text-sm text-gray-600">Por lo general, nuestro equipo toma entre 24 y 48 horas hábiles para dar una respuesta definitiva.</p>
          </div>
        </div>

        <div className="relative pl-8 space-y-10">
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-[#EDE7F6]">
            <div 
              className="w-full bg-[#7C4DFF]" 
              style={{ height: `${(currentStep - 1) * 33.33}%` }}
            ></div>
          </div>

          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            const isPending = currentStep < stepNum;

            return (
              <div key={i} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute -left-12 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center ${
                  isCompleted ? 'bg-[#311B92]' : 
                  isCurrent ? 'bg-[#7C4DFF] ring-2 ring-[#7C4DFF] ring-offset-2' : 'bg-[#EDE7F6]'
                }`}>
                  {isCompleted && <CheckCircle className="h-4 w-4 text-white" />}
                  {isCurrent && <div className="h-2 w-2 rounded-full bg-white"></div>}
                </div>

                <div className={`pt-1 ${isPending ? 'opacity-50' : ''}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`text-lg font-bold ${isCurrent ? 'text-gray-900' : 'text-gray-700'}`}>
                      {step.title}
                    </h4>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {step.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                  
                  {isCurrent && i === 1 && (
                    <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg flex gap-3 text-sm text-gray-700">
                      <AlertCircle className="h-5 w-5 text-gray-500 shrink-0" />
                      <p>
                        Todo está en orden por ahora. Te notificaremos al correo <b>juan@ejemplo.com</b> si necesitamos algún documento adicional.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="text-center">
        <button className="text-sm font-medium text-gray-500 hover:text-gray-900 underline">
          Cancelar solicitud
        </button>
      </div>
    </div>
  );
}
