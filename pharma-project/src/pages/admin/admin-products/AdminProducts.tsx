import { useEffect, useState } from 'react';
import SearchBar from "../../../components/SearchBar";
import ProductRow from "./ProductRow";
import Modal from './ModalInspectProduct';
import ModalRegisterProgram from './ModalRegisterProgram';

export default function AdminProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
<<<<<<< Updated upstream

=======
    const [searchValue, setSearchValue] = useState<string>("");
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://pr-disenno-backend-production.up.railway.app/products'); // Cambia esto por la URL de tu API
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

>>>>>>> Stashed changes
    const openModal = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

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
        console.log(`${selectedProduct.name} ha sido registrado al programa de puntos.`);
        console.log(`Puntos necesarios para regalo: ${pointsForGift}`);
        console.log(`Puntos otorgados por compra: ${pointsPerPurchase}`);
        setIsRegisterModalOpen(false);
    };

    return (
        <div className='flex flex-col justify-start items-center w-full'>
<<<<<<< Updated upstream
            <SearchBar place_holder="Nombre del medicamento" filter={false}/>
=======
            <AdminNavbar />
            <Title title="Products" green='1' className='p-5' />
            <SearchBar place_holder="Nombre del medicamento" filter={false} onSearchChange={setSearchValue} value={searchValue} />
>>>>>>> Stashed changes

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                <div className="col-span-1">Nombre</div>
                <div className="col-span-2">Presentación</div>
                <div className="col-span-2">Pertenece al programa de puntos</div>
            </div>

            <div className="flex flex-col gap-4 overflow-auto h-96">
                {products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())).map(product => (
                    <ProductRow
                        Name={product.name}
                        presentation={product.presentation} 
                        belong_point_program={product.is_in_program ? "Sí" : "No"} // Lógica para el programa de puntos
                        onViewDetails={() => openModal({
                            name: product.name,
                            presentation: product.presentation,
                            hasPointsProgram: product.is_in_program,
                            price: 150, 
                            pointsBalance: product.points_count,
                            pointsForRedemption: 400, 
                            description: "Descripción del producto" 
                        })}
                    />
                ))}
            </div>

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
                    onRegisterPointsProgram={openRegisterModal}
                />
            )}

            {selectedProduct && (
                <ModalRegisterProgram
                    show={isRegisterModalOpen}
                    onClose={closeRegisterModal}
                    medicineName={selectedProduct.name}
                    presentation={selectedProduct.presentation}
                    onConfirm={confirmRegisterProgram}
                />
            )}
        </div>
    );
}
