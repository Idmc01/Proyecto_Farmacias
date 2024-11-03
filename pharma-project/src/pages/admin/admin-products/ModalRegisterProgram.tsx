import { useState } from "react";
import Title from "../../../components/ui/Title";

type ModalRegisterProgramProps = {
    show: boolean;
    onClose: () => void;
    productId: string;
    medicineName: string;
    presentation: string;
    onUpdate: (updatedProduct: any) => void;
};

export default function ModalRegisterProgram({
    show,
    onClose,
    productId,
    medicineName,
    presentation,
    onUpdate,
}: ModalRegisterProgramProps) {
    const [pointsForRedemption, setPointsForRedemption] = useState<number>(0); // Estado para los puntos necesarios para regalo
    const [pointsPerPurchase, setPointsPerPurchase] = useState<number>(0); // Estado para los puntos otorgados por compra
    const [loading, setLoading] = useState(false);

    if (!show) return null;

    const handleConfirm = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://pr-disenno-backend-production.up.railway.app/products/${productId}/program`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    points_for_redemption: pointsForRedemption,
                    points_per_purchase: pointsPerPurchase
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error en la respuesta de la API:', errorText);
                throw new Error('Error al actualizar el producto');
            }
    
            const updatedProduct = await response.json();
            console.log('Producto actualizado:', updatedProduct); // Verifica si el producto contiene los datos correctos
            onUpdate(updatedProduct); // Actualizar el producto en el componente principal
            onClose(); // Cerrar el modal
        } catch (error) {
            console.error('Error al registrar al programa de puntos:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div onClick={onClose} className="fixed inset-0 z-10"></div>
            <div className="relative z-20 bg-green-3 rounded-lg shadow-lg p-6 w-full max-w-xl">
                <Title title={`Registrar ${medicineName} al programa de puntos`} green="1" />
                <p>
                    ¿Estás seguro de que deseas registrar el medicamento{" "}
                    <strong>{medicineName}</strong> ({presentation}) al programa de puntos?
                </p>

                {/* Formulario para los puntos */}
                <div className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="pointsForGift" className="block text-green-1 font-bold">
                            Puntos necesarios para regalo:
                        </label>
                        <input
                            type="number"
                            id="pointsForGift"
                            value={pointsForRedemption}
                            onChange={(e) => setPointsForRedemption(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese puntos necesarios para el regalo"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pointsPerPurchase" className="block text-green-1 font-bold">
                            Puntos otorgados por compra:
                        </label>
                        <input
                            type="number"
                            id="pointsPerPurchase"
                            value={pointsPerPurchase}
                            onChange={(e) => setPointsPerPurchase(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese puntos otorgados por compra"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirm} className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}
                    >
                       {loading ? 'Registrando...' : 'Confirmar'}
                    </button>
                </div>
            </div>
        </div>
    );
}
