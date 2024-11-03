import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
import Title from "../../../components/ui/Title";
import AdminNavbar from "../../../components/AdminNavbar";
import PharmacyRow from "./PharmacyRow";

type Pharmacy = {
    id: number;
    name: string;
    phone_number: string;
    email: string;
    address: string;
    schedule: string;
};

export default function AdminPharmacies() {
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        fetchPharmacies();
    }, []);

    const fetchPharmacies = async () => {
        try {
            const response = await fetch('https://pr-disenno-backend-production.up.railway.app/pharmacies');
            const data = await response.json();
            setPharmacies(data);
        } catch (error) {
            console.error("Error fetching pharmacies:", error);
        }
    };

    // Filtra las farmacias según el valor de búsqueda
    const filteredPharmacies = pharmacies.filter(pharmacy =>
        pharmacy.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="flex flex-col justify-start items-center w-full">
            <AdminNavbar /> 
            <Title title="Farmacias" green="1" className="p-5" />
            <SearchBar place_holder="Buscar Farmacia" filter={true} value={searchValue} onSearchChange={setSearchValue} />

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                <div className="col-span-2">Nombre</div>
                <div className="col-span-2">Contacto</div>
                <div className="col-span-4"></div> 
            </div>

            <div className="flex flex-col gap-3 overflow-auto h-96">
                {filteredPharmacies.map(pharmacy => (
                    <PharmacyRow 
                        key={pharmacy.id}
                        pharmacy_id={pharmacy.id}
                        pharmacy_name={pharmacy.name}
                        pharmacy_email={pharmacy.email}
                        pharmacyContact_number={pharmacy.phone_number}
                        pharmacy_address={pharmacy.address}
                        pharmacy_schedule={pharmacy.schedule}
                    />
                ))}
            </div>
        </div>
    );
}
