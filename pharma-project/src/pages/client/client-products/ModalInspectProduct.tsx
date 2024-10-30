type ModalProps = {
    show: boolean;
    onClose: () => void;
    medicineName: string;  // El nombre del medicamento
    pointsBalance: number;  // Saldo de puntos
    pointsForRedemption: number;  // Puntos para canjear
    presentation: string;  // Presentación del medicamento
    hasPointsProgram: boolean;  // Si tiene programa de puntos
    price: number;  // Precio del medicamento
    description: string;  // Descripción del medicamento
  };
  
  export default function Modal({ 
    show, 
    onClose, 
    medicineName, 
    pointsBalance, 
    pointsForRedemption, 
    presentation, 
    hasPointsProgram, 
    price, 
    description 
  }: ModalProps) {
  
    if (!show) return null; // No renderizar el modal si no está visible
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-green-800 rounded-lg p-6 relative max-w-sm w-full shadow-lg text-white">
          {/* Botón de cierre */}
          <button
            className="absolute top-2 right-2 text-white font-bold text-xl"
            onClick={onClose}
          >
            ✕
          </button>
  
          {/* Header */}
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">{medicineName}</h2>
            </div>
            <div className="text-right">
              <p>Saldo: {pointsBalance}</p>
              <p>Para canje: {pointsForRedemption}</p>
            </div>
          </div>
  
          {/* Detalles del Medicamento */}
          <div className="bg-green-300 text-black p-4 rounded-lg">
            <p><strong>Presentación:</strong> {presentation}</p>
            <p><strong>Programa de puntos:</strong> {hasPointsProgram ? "Sí" : "No"}</p>
            <p><strong>Precio:</strong> {price} colones</p>
            
            {/* Descripción */}
            <div className="mt-4">
              <p><strong>Descripción:</strong></p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  