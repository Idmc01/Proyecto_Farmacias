import { useState } from 'react';

export default function ClientLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-2xl font-bold text-green-1 p-5'>Iniciar Sesión</h1>
            <h2 className='text-lg text-green-1 mb-4'>Por favor ingresa tus credenciales para iniciar sesión</h2>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Usuario" className="border border-green-1 p-2 text-lg rounded bg-green-100"/>
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Contraseña" 
                        className="border border-green-1 p-2 text-lg rounded bg-green-100 w-full"
                    />
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </button>
                </div>
                <a href="#" className="text-green-1 text-sm mb-7">Olvidé mi contraseña.</a>
                <button className="bg-red-500 text-white rounded p-2 text-lg">Iniciar sesión</button>
                <button children="Registrarse" className="bg-green-1 text-white  rounded p-2 text-lg"/>
            </div>
        </div>
    );
}