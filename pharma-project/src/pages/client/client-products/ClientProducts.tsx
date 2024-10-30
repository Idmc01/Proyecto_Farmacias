import { useState } from 'react';
import SearchBar from "../../../components/SearchBar";
import ProductRow from "./ProductRow";
import Modal from './ModalInspectProduct';  // Importamos el modal que creamos anteriormente

export default function ClientProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const openModal = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <SearchBar place_holder="Nombre del medicamento" filter={false}/>

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                    <div className="col-span-1">Nombre</div>
                    <div className="col-span-2">Presentación</div>
                    <div className="col-span-2">Pertenece al programa de puntos</div>
                    <div className="col-span-2">Mi saldo</div>
            </div>

            <div className="flex flex-col gap-4 overflow-auto h-96">
                {/* Aquí llamamos al componente ProductRow y le pasamos la función para abrir el modal */}
                <ProductRow 
                    Name="Ibuprofeno" 
                    presentation="Tabletas" 
                    belong_point_program="No" 
                    balance="0" 
                    onViewDetails={() => openModal({
                        name: "Ibuprofeno",
                        presentation: "Tabletas",
                        hasPointsProgram: false,
                        price: 150,
                        balance: 0,
                        pointsForRedemption: 400,
                        description: "Analgésico antiinflamatorio usado para el tratamiento del dolor leve o moderado."
                    })}
                />
                <ProductRow 
                    Name="Paracetamol" 
                    presentation="Jarabe" 
                    belong_point_program="Sí" 
                    balance="200" 
                    onViewDetails={() => openModal({
                        name: "Paracetamol",
                        presentation: "Jarabe",
                        hasPointsProgram: true,
                        price: 200,
                        balance: 200,
                        pointsForRedemption: 400,
                        description: "Analgésico y antipirético eficaz para el control del dolor leve o moderado causado por afecciones articulares, cefaleas y otros."
                    })}
                />
            </div>

            {/* Modal que solo se muestra si isModalOpen es true */}
            {selectedProduct && (
                <Modal 
                    show={isModalOpen} 
                    onClose={closeModal} 
                    medicineName={selectedProduct.name}
                    pointsBalance={selectedProduct.balance}
                    pointsForRedemption={selectedProduct.pointsForRedemption}
                    presentation={selectedProduct.presentation}
                    hasPointsProgram={selectedProduct.hasPointsProgram}
                    price={selectedProduct.price}
                    description={selectedProduct.description}
                />
            )}
        </div>
    );
}