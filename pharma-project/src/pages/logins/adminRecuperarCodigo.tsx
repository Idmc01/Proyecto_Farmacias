export default function AdminRecuperarCodigo() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Recuperar Contraseña</h1>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Recuperar Contraseña" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
                <button className="bg-orange-500 text-white rounded p-2 text-lg">Cambiar Contraseña</button>
                <div className="flex justify-center">
                    <a href="#" className="text-green-1 text-sm mb-7">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
}