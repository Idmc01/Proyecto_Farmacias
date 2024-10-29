export default function ClientRequests() {
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
}