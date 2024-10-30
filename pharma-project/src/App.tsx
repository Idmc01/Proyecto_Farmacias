// import './App.css'
import { createContext, useState } from "react"

import AdminHomeScreen from "./pages/admin/admin-home-screen/AdminHomeScreen";

export const UserContext = createContext<[any, React.Dispatch<React.SetStateAction<any>>] | null>(null);
function App() {
  // Variable global para el usuario logueado
  // Uso: const [user, setUser] = useContext(UserContext)
  // Y se trata como una variable normal, su contenido es un json con los datos del usuario
  const [user, setUser] = useState<any>({
    id: 3,
    email: "user2@gmail.com",
    name: "user2",
    identification: "746104951",
    is_admin: false
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <AdminHomeScreen/>
    </UserContext.Provider>
  )
}


export default App
