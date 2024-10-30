import { useState } from 'react';
import SearchBar from "../../../components/SearchBar";
import ProductRow from "./ProductRow";
import Modal from './ModalInspectProduct';
import ModalRegisterProgram from './ModalRegisterProgram';
import AdminNavbar from '../../../components/AdminNavbar';
import Title from '../../../components/ui/Title';

export default function AdminProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<string>("");


    function openModal(product: any) {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };

    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    const confirmRegisterProgram = (pointsForGift: number, pointsPerPurchase: number) => {
        // Aquí puedes manejar el registro del producto al programa de puntos con los valores ingresados
        console.log(`${selectedProduct.name} ha sido registrado al programa de puntos.`);
        console.log(`Puntos necesarios para regalo: ${pointsForGift}`);
        console.log(`Puntos otorgados por compra: ${pointsPerPurchase}`);
        setIsRegisterModalOpen(false);
    };

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <AdminNavbar/>
            <Title title="Products" green='1' className='p-5'></Title>
            <SearchBar place_holder="Nombre del medicamento" filter={false} onSearchChange={setSearchValue} value={searchValue}/>

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                <div className="col-span-1">Nombre</div>
                <div className="col-span-2">Presentación</div>
                <div className="col-span-2">Pertenece al programa de puntos</div>
            </div>

            <div className="flex flex-col gap-4 overflow-auto h-96">
                {/* Aquí va la información del producto */}
                <ProductRow 
                    Name="Ibuprofeno" 
                    presentation="Tabletas" 
                    belong_point_program="No" 
                    onViewDetails={() => openModal({
                        name: "Ibuprofeno",
                        presentation: "Tabletas",
                        hasPointsProgram: false,
                        price: 150,
                        pointsBalance: 0,
                        pointsForRedemption: 400,
                        description: "Analgésico antiinflamatorio usado para el tratamiento del dolor leve o moderado."
                    })}
                />
                <ProductRow 
                    Name="Paracetamol" 
                    presentation="Jarabe" 
                    belong_point_program="Sí" 
                    onViewDetails={() => openModal({
                        name: "Paracetamol",
                        presentation: "Jarabe",
                        hasPointsProgram: true,
                        price: 150,
                        pointsBalance: 0,
                        pointsForRedemption: 400,
                        description: "Fármaco con propiedades analgésicas y antipiréticas​ ​utilizado principalmente para tratar la fiebre y el dolor leve y moderado."
                    })}
                />
            </div>

            {/* Modal para mostrar detalles del medicamento */}
            {selectedProduct && (
                <Modal 
                    show={isModalOpen} 
                    onClose={closeModal}
                    medicineName={selectedProduct.name}
                    presentation={selectedProduct.presentation}
                    hasPointsProgram={selectedProduct.hasPointsProgram}
                    price={selectedProduct.price}
                    pointsBalance={selectedProduct.pointsBalance}
                    pointsForRedemption={selectedProduct.pointsForRedemption}
                    description={selectedProduct.description}
                    onRegisterPointsProgram={openRegisterModal} // Abre el modal de registro
                />
            )}

            {/* Modal para confirmar el registro al programa de puntos */}
            {selectedProduct && (
                <ModalRegisterProgram 
                    show={isRegisterModalOpen} 
                    onClose={closeRegisterModal}
                    medicineName={selectedProduct.name}
                    presentation={selectedProduct.presentation}
                    onConfirm={confirmRegisterProgram} // Recibe los puntos ingresados
                />
            )}
        </div>
    );
}
