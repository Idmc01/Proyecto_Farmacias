import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
import RequestRow from "./RequestRowPharmacie";
import Title from "../../../components/ui/Title";
import AdminNavbar from "../../../components/AdminNavbar";

export default function ClientRequests() {
    const [requests, setRequests] = useState([]);

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
            <SearchBar place_holder="Invoice ID" filter={true} />

            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                <div className="col-span-2">Farmacia ID</div>
                <div className="col-span-2">Nombre</div>
                <div className="col-span-2">Ubicacion</div>
                <div className="col-span-2">Contacto</div>

                <div className="col-span-2"></div> 
            </div>
                
            <div className="flex flex-col gap-3 overflow-auto h-96">
                
                {requests.map((request: any) => (
                    <RequestRow
                        key={request.id}
                        request_id={request.id}
                        invoice_id={request.invoice_id}
                        pharmacy_name={request.pharmacy_name}
                        pharmacyLocation_name={request.pharmacyLocation_name}
                        pharmacyContact_number={request.pharmacyContact_number}
                        request_state={request.request_state}
                    />
                ))}
            </div>
        </div>
    );
}
