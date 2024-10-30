import { useState, useEffect } from "react";
import Title from "../../../components/ui/Title";
import Modal from "../../../components/ui/Modal";
import DetailGrid from "../../../components/DetailGrid";

const IMAGE_URL = "src/assets/";

type ModalInspectRequestProps = {
    requestId: number;
    show: boolean;
    close: () => void;
};

export default function ClientRequests(props: ModalInspectRequestProps) {
    const [request, setRequest] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.show) {
            fetchRequestDetails();
        } else {
            setRequest(null); // Reset request when modal is closed
        }
    }, [props.show]);

    const fetchRequestDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://pr-disenno-backend-production.up.railway.app/requests/${props.requestId}`
            );
            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }
            const data = await response.json();
            setRequest(data);
        } catch (error) {
            console.error("Error fetching request details:", error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Modal show={props.show} onClose={props.close}>
            <Title title="Request Details" green="1" className="mb-4" />
            {loading ? (
                <strong className="text-green-1 text-xl">Loading...</strong>
            ) : (
                request && (
                    <div className="flex gap-5">
                        {/* Detalles del producto */}
                        <div className="flex-grow">
                            <DetailGrid
                                details={[
                                    [
                                        "Invoice ID:",
                                        request.invoice_id || "N/A",
                                    ],
                                    [
                                        "Purchase Date:",
                                        request.purchase_date || "N/A",
                                    ],
                                    [
                                        "Request State:",
                                        request.request_state || "N/A",
                                    ],
                                    [
                                        "Pharmacy:",
                                        request.pharmacy?.name || "N/A",
                                    ],
                                ]}
                            />
                            <Title title="Product" green="1" className="pt-4" />
                            <DetailGrid
                                details={[
                                    ["Name:", request.product?.name || "N/A"],
                                    [
                                        "Presentation:",
                                        request.product.product_form || "N/A",
                                    ],
                                    [
                                        "Amount:",
                                        request.product_quantity || "N/A",
                                    ],
                                    [
                                        "Potential point gain:",
                                        request.product?.points_per_purchase *
                                            request.product_quantity || "N/A",
                                    ],
                                ]}
                            />
                            <Title title="Applicant" green="1" className="pt-4" />
                            <DetailGrid
                                details={[
                                    ["Name:", request.product?.name || "N/A"],
                                    [
                                        "ID:",
                                        request.product.product_form || "N/A",
                                    ],
                                ]}
                            />
                        </div>
                        {/* Imagen */}
                        <div className="flex-shrink-0 h-96 w-80 bg-cover bg-no-repeat bg-center rounded-lg shadow-md"
                            style={{
                                backgroundImage: `url(${IMAGE_URL}factura-ejemplo.jpg)`,
                            }}
                        ></div>
                    </div>
                )
            )}
            {/* Botones Aceptar y Rechazar */}
            <div className="flex justify-center mt-4 space-x-4">
                <button className="bg-red-500 text-white p-2 rounded">Rechazar</button>
                <button className="bg-green-500 text-white p-2 rounded">Aceptar</button>
            </div>
        </Modal>
    );
}




/*export default function ClientRequests() {
    return (
        <div className='flex flex-col  w-full'>
            <h1 className='text-xl font-bold text-green-1 p-5'>Detalles de solicitud</h1>
            <div className="row w-full flex">
                <div className="col w-[50%] flex text-2xl  text-green-1 ">
                    <p>
                        Número de factura:
                    </p>

                    <input type="text" placeholder="12345" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
                </div>
                               <div className="col w-[50%]">
                    <div className="flex flex-col items-center">
                        <img src="ruta/a/tu/imagen.jpg" alt="Imagen" className="mb-4" />
                        <div className="flex space-x-4">
                            <button className="bg-red-500 text-white p-2 rounded">Rechazar</button>
                            <button className="bg-green-500 text-white p-2 rounded">Aceptar</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Fecha de compra:
                </p>

                <input type="text" placeholder="23/9/24" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Estado:
                </p>

                <input type="text" placeholder="Pendiente" className="border border-green-1 p-2 text-lg rounded bg-green-1" />

            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Farmacia:
                </p>

                <input type="text" placeholder="Farma Value" className="border border-green-1 p-2 text-lg rounded bg-green-1" />

            </div>
            <h1 className='text-xl font-bold text-green-1 p-5'>Detalles de solicitud</h1>

            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Nombre:
                </p>

                <input type="text" placeholder="Tabcin noche" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Presentación:
                </p>

                <input type="text" placeholder="Cápsulas" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Cantidad:
                </p>

                <input type="text" placeholder="2" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Equivalencia en puntos:
                </p>

                <input type="text" placeholder="350" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <h1 className='text-xl font-bold text-green-1 p-5'>Solicitante</h1>

            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Nombre:
                </p>

                <input type="text" placeholder="Carlos Zamora" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
            <div className="col w-[50%] flex text-2xl  text-green-1 ">
                <p>
                    Cédula:
                </p>

                <input type="text" placeholder="12345" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
            </div>
        </div>


    );
}*/