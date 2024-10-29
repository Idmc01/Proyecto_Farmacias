import { useState } from "react";
import Title from "../../../components/ui/Title";

type ModalRegisterProgramProps = {
    show: boolean;
    onClose: () => void;
    medicineName: string;
    presentation: string;
    onConfirm: (pointsForGift: number, pointsPerPurchase: number) => void;
};

export default function ModalRegisterProgram({
    show,
    onClose,
    medicineName,
    presentation,
    onConfirm,
}: ModalRegisterProgramProps) {
    const [pointsForGift, setPointsForGift] = useState(0); // Estado para los puntos necesarios para regalo
    const [pointsPerPurchase, setPointsPerPurchase] = useState(0); // Estado para los puntos otorgados por compra

    if (!show) return null;

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
                            value={pointsForGift}
                            onChange={(e) => setPointsForGift(Number(e.target.value))}
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
                        className="bg-green-1 text-white py-2 px-4 rounded"
                        onClick={() => onConfirm(pointsForGift, pointsPerPurchase)}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}
