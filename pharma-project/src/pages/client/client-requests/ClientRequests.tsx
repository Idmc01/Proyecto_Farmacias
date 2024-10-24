import SearchBar from "../../../components/SearchBar";
import RequestRow from "./RequestRow";

export default function ClientRequests() {
    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <h1 className='text-xl font-bold text-green-1 p-5'>My Requests</h1>
            <SearchBar place_holder="Invoice ID" filter={true}/>
            
            <div className="grid grid-cols-custom-1 gap-4 p-4 w-auto items-center text-green-1">
                    <div className="col-span-2">Invoice ID</div>
                    <div className="col-span-2">Product Name</div>
                    <div className="col-span-1">Request State</div>
                    <div className="col-span-2"></div> {/* Espacio vacío para relleno */}
            </div>
            <div className="flex flex-col gap-3 overflow-auto h-96"> {/* Define una altura */}
                <RequestRow invoice_id="7834567890123456789" product_name="Ibuprofeno" request_state="Pending" />
                <RequestRow invoice_id="6543219876543219876" product_name="Paracetamol" request_state="Accepted" />
                <RequestRow invoice_id="9876543210987654321" product_name="Aspirina" request_state="Rejected" />
                <RequestRow invoice_id="1234567890123456789" product_name="Amoxicilina" request_state="Pending" />
                <RequestRow invoice_id="3456789012345678901" product_name="Loratadina" request_state="Accepted" />
                <RequestRow invoice_id="7890123456789012345" product_name="Metformina" request_state="Rejected" />
                <RequestRow invoice_id="5432109876543210987" product_name="Atorvastatina" request_state="Pending" />
                <RequestRow invoice_id="2345678901234567890" product_name="Omeprazol" request_state="Accepted" />
                <RequestRow invoice_id="8901234567890123456" product_name="Clopidogrel" request_state="Rejected" />
                <RequestRow invoice_id="6789012345678901234" product_name="Losartan" request_state="Pending" />
            </div>
            
        </div>
    );
}
