import { useEffect, useState } from 'react';
import SearchBar from "../../../components/SearchBar";
import ProductRow from "./ProductRow";
<<<<<<< Updated upstream
import Modal from './ModalInspectProduct';  // Importamos el modal que creamos anteriormente
=======
import Modal from './ModalInspectProduct';
import ClientNavbar from '../../../components/ClientNavbar';
import Title from '../../../components/ui/Title';
>>>>>>> Stashed changes

export default function ClientProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
<<<<<<< Updated upstream
=======
    const [searchValue, setSearchValue] = useState<string>("");
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        // Función para obtener productos de la API
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://pr-disenno-backend-production.up.railway.app/products'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Inicializa los productos filtrados
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Filtrar productos cuando cambia el valor de búsqueda
        if (searchValue) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts(products); // Si no hay búsqueda, mostrar todos los productos
        }
    }, [searchValue, products]);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            <SearchBar place_holder="Nombre del medicamento" filter={false}/>

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                    <div className="col-span-1">Nombre</div>
                    <div className="col-span-2">Presentación</div>
                    <div className="col-span-2">Pertenece al programa de puntos</div>
                    <div className="col-span-2">Mi saldo</div>
=======
            <ClientNavbar />
            <Title title="Medicamentos" green="1" className="p-5" />
            <SearchBar place_holder="Nombre del medicamento" filter={false} value={searchValue} onSearchChange={setSearchValue} />

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                <div className="col-span-1">Nombre</div>
                <div className="col-span-2">Presentación</div>
                <div className="col-span-2">Programa de puntos</div>
                <div className="col-span-2">Mi saldo</div>
>>>>>>> Stashed changes
            </div>

            <div className="flex flex-col gap-4 overflow-auto h-96">
                {/* Mapeamos sobre los productos filtrados */}
                {filteredProducts.map((product) => (
                    <ProductRow
                        key={product.id} // Asegúrate de que cada producto tiene un ID único
                        Name={product.name}
                        presentation={product.presentation}
                        belong_point_program={product.hasPointsProgram ? "Sí" : "No"}
                        balance={product.pointsBalance ? product.pointsBalance.toString() : "0"} // Verifica que pointsBalance esté definido
                        onViewDetails={() => openModal({
                            name: product.name,
                            presentation: product.presentation,
                            hasPointsProgram: product.hasPointsProgram,
                            price: product.price,
                            balance: product.pointsBalance,
                            pointsForRedemption: product.pointsForRedemption,
                            description: product.description,
                        })}
                    />
                ))}
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
