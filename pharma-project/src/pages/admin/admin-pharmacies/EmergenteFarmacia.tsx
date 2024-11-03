import React from 'react';

type PharmacyInfoProps = {
    name: string;
    email: string;
    phone_number: string;
    address: string;
    schedule: string;
    closeModal: () => void;
};

export default function EmergenteFarmacia({ name, email, phone_number, address, schedule, closeModal }: PharmacyInfoProps) {
    return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative rounded-lg shadow-lg w-96 max-w-full">
                          {/* Botón "X" de Cerrar */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-500"
                >
                    &times;
                </button>

                {/* Sección Superior con Color Verde Oscuro */}
                <div className="bg-[#16423C] p-6 text-center rounded-t-lg">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center">
                        {/* Puedes agregar un ícono o imagen aquí */}
                    </div>
                    <h2 className="text-white text-xl font-semibold mt-4">{name}</h2>
                </div>

                {/* Sección de Contacto */}
                <div className="bg-[#4A7669] p-4">
                    <h4 className="text-white text-lg font-semibold mb-2">Contacto</h4>
                    <div className="flex justify-between text-white">
                        <p className="font-semibold text-lg">Correo:</p>
                        <p>{email}</p>
                    </div>
                    <div className="flex justify-between text-white mt-1">
                        <p className="font-semibold text-lg">Teléfono:</p>
                        <p>{phone_number}</p>
                    </div>
                </div>

                {/* Sección de Ubicación */}
                <div className="bg-[#4A7669] p-4">
                    <h4 className="text-white text-lg font-semibold mb-2">Ubicación</h4>
                    <p className="text-white">{address}</p>
                </div>

                {/* Sección de Horario */}
                <div className="bg-[#4A7669] p-4 rounded-b-lg">
                    <h4 className="text-white text-lg font-semibold mb-2">Horario</h4>
                    <p className="text-white">{schedule}</p>
                </div>
            </div>
        </div>
    );
}
