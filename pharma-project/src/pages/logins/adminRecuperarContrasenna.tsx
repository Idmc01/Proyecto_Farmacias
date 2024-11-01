import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AdminRecuperar() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleContinue = async () => {
        try {
            const response = await fetch(
                `https://pr-disenno-backend-production.up.railway.app/users/by-email/${email}`
            );
            if (!response.ok) {
                alert("Error: Correo no encontrado");
            }else{
                alert("Correo enviado");
            }
        } catch (error) {
            console.error("Error fetching request details:", error);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Recuperar Contraseña</h1>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Correo electrónico" className="border border-green-1 p-2 text-lg rounded bg-green-1" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button className="bg-orange-500 text-white rounded p-2 text-lg" onClick={handleContinue}>Continuar</button>
                <div className="flex justify-center">
                    <a href="#" className="text-green-1 text-sm mb-7">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
}