import SearchBar from "../../../components/SearchBar";
import RequestRow from "./RequestRowAdmin";

export default function ClientRequests() {
    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <h1 className='text-xl font-bold text-green-1 p-5'>Solicitudes de puntos</h1>
            <SearchBar place_holder="Identificador de solicitudes" filter={true} />

            <div className="w-full flex item-center justify-center">
                <table className="w-[50%]">
                    <thead className="w-full">
                        <tr className="text-green-1 bg-#c1d8d1 ">
                            <th >
                                identificador de factura
                            </th>
                            <th>
                                Producto
                            </th>
                            <th>
                                Estado
                            </th>
                            <th>
                                Cliente
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        <tr className="m-5" style={{ backgroundColor: '#c1d8d1', color: '#16423C', width: '100%', marginTop: '10px' }}>
                            <td className="text-center rounded-tl-[10px] rounded-bl-[10px] p-5">
                                1231231231231
                            </td>
                            <td className="text-center p-5">
                                Loratadina
                            </td>
                            <td className="text-center p-5">
                                Pendiente
                            </td>
                            <td className="text-center p-5">
                                Carlos Zamora
                            </td>
                            <td className="text-center rounded-tr-[10px] rounded-br-[10px] p-5">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>

                        <tr className="m-5" style={{ backgroundColor: '#c1d8d1', color: '#16423C', width: '100%', marginTop: '10px' }}>
                            <td className="text-center rounded-tl-[10px] rounded-bl-[10px] p-5">
                                1231231231231
                            </td>
                            <td className="text-center p-5">
                                Loratadina
                            </td>
                            <td className="text-center p-5">
                                Aceptada
                            </td>
                            <td className="text-center p-5">
                                Carlos Zamora
                            </td>
                            <td className="text-center rounded-tr-[10px] rounded-br-[10px] p-5">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>



            {/* <div className="grid grid-cols-custom-1 gap-4 p-4 w-14/4 items-center text-green-1">
                <div className="col-span-2">Identificador de factura</div>
                <div className="col-span-2">Producto</div>
                <div className="col-span-1">Estado</div>
                <div className="col-span-2">Cliente</div>
                <div className="col-span-2"></div> 
            </div>
            <div className="flex flex-col gap-3 overflow-auto h-96"> 
                <RequestRow invoice_id="7834567890123456789" product_name="Ibuprofeno" request_state="Pending" client_name="Juan"/>
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
            */}

        </div>
    );
}