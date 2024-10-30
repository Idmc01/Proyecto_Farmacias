import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useContext(UserContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function handleLogin() {
        console.log("Sending request...");
        if (password === "" || email === "") {
            alert("Please fill all fields");
            return;
        }
        else {
            const response = await fetch(
                "https://pr-disenno-backend-production.up.railway.app/users/login",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Asegúrate de establecer el tipo de contenido
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );
            if (response.ok) {
                let user: any = await response.json();
                setUser(user);
                navigate("/");
            }
            else if (response.status === 404) {
                alert("User not found, check credentials");
            }
             else {
                alert("Error logging in");
            }
        }
    }
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='text-2xl font-bold text-green-1 p-5'>Iniciar Sesión</h1>
            <h2 className='text-lg text-green-1 mb-4'>Por favor ingresa tus credenciales para iniciar sesión</h2>
            <div className='flex flex-col gap-3 w-96'>
                <input type="text" placeholder="Usuario" className="border border-green-1 p-2 text-lg rounded bg-green-100" onChange={(e) => setEmail(e.target.value)}/>
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Contraseña" 
                        className="border border-green-1 p-2 text-lg rounded bg-green-100 w-full"
                        onChange={(e) => setPassword(e.target.value)}
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
                <button className="bg-red-500 text-white rounded p-2 text-lg" onClick={() => handleLogin()}>Iniciar sesión</button>
                <button children="Registrarse" className="bg-green-1 text-white  rounded p-2 text-lg" onClick={()=>navigate('/register')}/>
            </div>
        </div>
    );
}