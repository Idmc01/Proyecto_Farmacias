import { useState } from 'react';

export default function AdminRecuperarCodigo() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Código de verificación</h1>
            <h2 className='text-lg text-green-1 mb-4'>Revisa tu correo electrónico</h2>
            <div className='flex flex-col gap-3 w-96'>
            <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Código" 
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
                <button className="bg-orange-500 text-white rounded p-2 text-lg">Aceptar</button>
            </div>
        </div>
    );
}