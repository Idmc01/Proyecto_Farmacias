import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";

import Title from "../../../components/ui/Title";
import AdminNavbar from "../../../components/AdminNavbar";
import PharmacyRow from "./PharmacyRow";

export default function AdminPharmacies() {
    const [requests, setRequests] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");

    //useEffect(() => {
    //    fetchPosts();
    //}, []); // Array vacío: se ejecuta solo una vez
    /*
    const fetchPosts = async () => {
        const response = await fetch('https://pr-disenno-backend-production.up.railway.app/requests');
        const data = await response.json();
        console.log(data);
        setRequests(data);
    };
*/
    return (
        <div className="flex flex-col justify-start items-center w-full">
            <AdminNavbar /> 
            <Title title="Farmacias" green="1" className="p-5" />
            <SearchBar place_holder="Invoice ID" filter={true} value={searchValue} onSearchChange={setSearchValue}/>

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">

                <div className="col-span-2">Nombre</div>

                <div className="col-span-2">Contacto</div>

                <div className="col-span-4"></div> 
            </div>

            <div className="flex flex-col gap-3 overflow-auto h-96">
                <PharmacyRow 
                 pharmacy_id={1}
                 pharmacy_name="Pharmacy Name"
                 pharmacyContact_number={1234567890} />





            </div>
        </div>
    );
}