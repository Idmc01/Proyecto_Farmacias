import React, { useState } from 'react'; // Importamos useState

export default function EmergenteFarmacia() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  


  return (        
          <div>
            
            {/* Botón "X" de Cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300"
            >
              &times;
            </button>

            {/* Sección Superior con Color Verde Oscuro */}
            <div className="bg-[#16423C] p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center">
                
              </div>
              <h2 className="text-white text-xl font-semibold mt-4">Farmacia</h2>
             
            </div>

            {/* Sección Inferior con Color Verde Claro */}
            <div className="bg-[#4A7669] p-4">
              <h4 className="text-white text-lg font-semibold mb-2">Contacto</h4>
              <div className="flex justify-between text-white">
                <p className="font-semibold text-lg">Correo</p>
                
              </div>
              <div className="flex justify-between text-white mt-1">
                <p className="font-semibold text-lg">Teléfono</p>
                
              </div>
            </div>

            <div className="bg-[#4A7669] p-4">
              <h4 className="text-white text-lg font-semibold mb-2">Ubicación</h4>
              <p className="text-white">
                
              </p>
            </div>

            <div className="bg-[#4A7669] p-4">
              <h4 className="text-white text-lg font-semibold mb-2">Horario</h4>
              <p className="text-white">
                
              </p>
            </div>

           
          </div>
        
      
    
  );
}