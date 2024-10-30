import { useState } from "react";
import ButtonWithImage from "../../../components/ui/ButtonWithImage"
import Modal from "../../../components/ui/Modal";
import MedicamentosEmergente from "./MedicamentosEmergente";

type RequestRowProps = {
    pharmacy_id: number,
    pharmacy_name: string,
    pharmacyContact_number: number,

}

// Componente que muestra una fila de solicitud
export default function RequestRow(props: RequestRowProps) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-custom-1 gap-4 bg-green-1 p-4 w-auto items-center text-green-3 rounded">

                <div className="col-span-2 overflow-hidden">{props.pharmacy_name}</div>

                <div className="col-span-2 overflow-hidden">{props.pharmacyContact_number}</div>

                <div className="col-span-3 overflow-hidden"></div> {/* Espacio vacío para relleno */}
                <div className="col-span-1 overflow-hidden">
                    <ButtonWithImage image_name='inspect-icon-green-3.png' action={() => setShowModal(true)}/>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}> 
            <MedicamentosEmergente />
            </Modal>

        </div>

    )
}