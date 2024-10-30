import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
    
export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [identification, setIdentification] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useContext(UserContext);

    async function handleRegister() {
        console.log("Sending request...");
        if (password === "" || email === "" || identification === "" || name === "") {
            alert("Please fill all fields");
            return;
        }
        else {
            const response = await fetch(
                "https://pr-disenno-backend-production.up.railway.app/users",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Asegúrate de establecer el tipo de contenido
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        identification: identification,
                        name: name
                    })
                }
            );
            if (response.ok) {
                let user: any = await response.json();
                setUser(user);
                navigate("/");
            }
             else {
                alert("Error registering user");
            }
        }
    }
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-5xl font-bold text-green-1 p-5'>Registrarse</h1>
            <h2 className='text-lg text-green-1 mb-10'>Por favor ingresa tus datos para registrarte</h2>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Correo electrónico" className="border border-green-1 p-2 text-lg rounded bg-green-1" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Nombre Completo" className="border border-green-1 p-2 text-lg rounded bg-green-1" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Cédula de identidad" className="border border-green-1 p-2 text-lg rounded bg-green-1" onChange={(e) => setIdentification(e.target.value)}/>
                <input type="password" placeholder="Contraseña" className="border border-green-1 p-2 text-lg rounded bg-green-1" onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-orange-500 text-white rounded p-2 text-lg" onClick={() => handleRegister()}>Registrarse</button>
                <div className="flex justify-center">
                    <a href="#" className="text-green-1 text-sm mb-7">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
} 