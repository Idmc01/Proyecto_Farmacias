export default function Register() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Registrarse</h1>
            <h2 className='text-lg text-green-1 mb-10'>Por favor ingresa tus datos para registrarte</h2>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Correo electrónico" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
                <input type="text" placeholder="Nombre Completo" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
                <input type="text" placeholder="Cédula de identidad" className="border border-green-1 p-2 text-lg rounded bg-green-1" />
                <input type="password" placeholder="Contraseña" className="border border-green-1 p-2 text-lg rounded bg-green-1 " />
                <button className="bg-orange-500 text-white rounded p-2 text-lg">Registrarse</button>
                <div className="flex justify-center">
                    <a href="#" className="text-green-1 text-sm mb-7">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
} 