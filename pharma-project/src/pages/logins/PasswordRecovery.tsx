import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PasswordRecovery() {
    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [currentStage, setCurrentStage] = useState("getting-email");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleContinue = async () => {
        try {
            const response = await fetch(
                `https://pr-disenno-backend-production.up.railway.app/users/by-email/${email}`
            );
            if (!response.ok) {
                alert("Error: Correo no encontrado");
            }else{
                setUser(await response.json());
                setCurrentStage("verifying-code")
            }
        } catch (error) {
            console.error("Error fetching request details:", error);
        }
    };
    const handleChangePassword = async () => {
        try {
            const response = await fetch(
                `https://pr-disenno-backend-production.up.railway.app/users/password`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        password: password
                    })
                }
            );
            if (response.ok) {
                alert("Contraseña cambiada exitosamente");
                navigate("/login");
            } else {
                alert("Error al cambiar contraseña");
            }
        } catch (error) {
            console.error("Error fetching request details:", error);
        }
    };
    if (currentStage === "getting-email") {
        return(
            <div className='flex flex-col justify-center items-center w-full h-screen'>
                <h1 className='text-5xl font-bold text-green-1 p-5'>Recuperar Contraseña</h1>
                <div className='flex flex-col gap-3 w-96'>
                    <input type="text" placeholder="Correo electrónico" className="border border-green-1 p-2 text-lg rounded bg-green-1" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <button className="bg-orange-500 text-white rounded p-2 text-lg" onClick={handleContinue}>Continuar</button>
                    <div className="flex justify-center">
                        <Link className="text-green-1 text-sm mb-7" to="/login">Iniciar sesión</Link>
                    </div>
                </div>
            </div>
        );
    }
    else if (currentStage === "verifying-code"){
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
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <button className="bg-orange-500 text-white rounded p-2 text-lg" onClick={()=>setCurrentStage("getting-new-password")}>Aceptar</button>
                </div>
                <button className="mt-3 text-green-1 text-sm mb-7" onClick={()=>setCurrentStage("getting-email")}>Regresar</button>
            </div>
        );
    }
    else {
        return (
            <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Recuperar Contraseña</h1>
            <div className='flex flex-col gap-3 w-96'>
                <div className="relative">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Contraseña" 
                            className="border border-green-1 p-2 text-lg rounded bg-green-100 w-full"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                <button className="bg-orange-500 text-white rounded p-2 text-lg" onClick={handleChangePassword}>Cambiar Contraseña</button>
                <div className="flex justify-center">
                    <Link to="/login" className="mt-3 text-green-1 text-sm mb-7">Regresar a login</Link>
                </div>
            </div>
        </div>
        )
    }
}