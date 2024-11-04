import { useContext, useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
// import RequestRowAdmin from "./RequestRowAdmin";
import AdminNavbar from "../../../components/AdminNavbar";
import { UserContext } from "../../../App";
import SendRequestModal from '../../client/client-requests/SendRequestModal';
import Title from "../../../components/ui/Title";
import RequestRowAdmin from "./RequestRowAdmin";

export default function AdminRequests() {
    const [requests, setRequests] = useState([]);
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [loading, setLoading] = useState(true);
    
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetchRequests();
    }, []); // Array vacío: se ejecuta solo una vez
    const fetchRequests = async () => {
        const response = await fetch(
            `https://pr-disenno-backend-production.up.railway.app/requests`
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setRequests(data);
    };
    const searchRequests = async () => {
        if (searchValue === "") {
            fetchRequests();
            return;
        }
        const response = await fetch(
            `https://pr-disenno-backend-production.up.railway.app/requests?invoice_id=${searchValue}`
        );
        const data = await response.json();
        console.log(data);
        setRequests(data);
    };

    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <AdminNavbar/>
            <Title title="Requests" green="1" className="p-5"></Title>
            <SearchBar
                place_holder="Invoice ID"
                filter={true}
                onSearchChange={setSearchValue}
                onClickSearch={searchRequests}
                onClickFilter={() => setOpen(true)} 
                value={searchValue}/>
            <SendRequestModal
                onClose={() => setOpen(false)}
                show={open}
            ></SendRequestModal>

{loading? <div><strong className="text-xl text-green-1">Loading...</strong></div> : (
                <>
                <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                    <div className="col-span-1">Invoice ID</div>
                    <div className="col-span-1">Product Name</div>
                    <div className="col-span-1">Request State</div>
                    <div className="col-span-1">Cliente</div>{" "} 
                </div>
                <div className="flex flex-col gap-3 overflow-auto h-96">
                {/* Define una altura */}
                {requests.map((request: any) => {
                return (
                    <RequestRowAdmin
                        key={request.id}
                        request_id={request.id}
                        invoice_id={request.invoice_id}
                        product_name={request.product_name}
                        request_state={request.request_state}
                        client_name={request.client_name}
                    />
                    );
                })}
                </div>
                </>

            )}

        </div>
    );
}