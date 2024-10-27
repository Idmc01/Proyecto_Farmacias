import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
import RequestRow from "./RequestRow";
import Title from "../../../components/ui/Title";
// interface Request {
//     id: number
//     invoice_id: number;
//     product_name: string;
//     request_state: string;
// }

export default function ClientRequests() {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        fetchPosts();
      }, []); // Array vacío: se ejecuta solo una vez

    const fetchPosts = async () => {
        const response = await fetch('http://127.0.0.1:8000/requests');
        const data = await response.json();
        console.log(data);
        setRequests(data);
    }
    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <Title title="My Requests" green="1" className="p-5"></Title>
            <SearchBar place_holder="Invoice ID" filter={true}/>
            
            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                    <div className="col-span-2">Invoice ID</div>
                    <div className="col-span-2">Product Name</div>
                    <div className="col-span-1">Request State</div>
                    <div className="col-span-2"></div> {/* Espacio vacío para relleno */}
            </div>
            <div className="flex flex-col gap-3 overflow-auto h-96"> {/* Define una altura */}
                {
                    requests.map((request: any) =>{
                        return <RequestRow 
                        key = {request.id} 
                        invoice_id={request.invoice_id} 
                        product_name={request.product_name}
                        request_state={request.request_state}/>
                    })
                }
            </div>
            
        </div>
    );
}
