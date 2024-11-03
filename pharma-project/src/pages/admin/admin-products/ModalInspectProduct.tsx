import ButtonWithImage from "../../../components/ui/ButtonWithImage";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    medicineName: string;
    hasPointsProgram: boolean;
    price: number;
    pointsPerPurchase: number;
    pointsForRedemption: number;
    description: string;
    onRegisterPointsProgram: () => void;
};

export default function Modal({
    show,
    onClose,
    medicineName,
    hasPointsProgram,
    price,
    pointsPerPurchase,
    pointsForRedemption,
    description,
    onRegisterPointsProgram
}: ModalProps) {

    if (!show) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div onClick={onClose} className="fixed inset-0 z-10"></div>
            <div className="relative z-20 rounded-lg shadow-lg w-full max-w-3xl">
                
                {/* Encabezado con nombre del medicamento */}
                <div className="bg-green-800 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                    <h2 className="text-xl font-bold">{medicineName}</h2>
                    <ButtonWithImage image_name="close-icon.png" action={onClose} />
                </div>

                {/* Cuerpo del modal con fondo diferente y margen a la izquierda */}
                <div className="bg-green-300 p-6 rounded-b-lg flex gap-5" style={{ paddingLeft: '20px' }}>
                    {/* Detalles del medicamento */}
                    <div className="w-2/3">
                        <div className="grid grid-cols-2 gap-4">
                            <div><strong>Precio:</strong> ${price.toFixed(2)}</div>
                            <div><strong>Descripción:</strong> {description}</div>
                        </div>

                        {/* Programa de puntos */}
                        <div className="mt-6">
                            {hasPointsProgram ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-yellow-400">⭐</span>
                                    <p className="text">Este medicamento pertenece al programa de puntos</p>
                                </div>
                            ) : (
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded"
                                    onClick={onRegisterPointsProgram}
                                >
                                    Registrar al programa de puntos
                                </button>
                            )}

                            {/* Detalles del programa de puntos */}
                            {hasPointsProgram && (
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div><strong>Puntos a obtener por compra:</strong> {pointsPerPurchase}</div>
                                    <div><strong>Puntos para regalo:</strong> {pointsForRedemption}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
