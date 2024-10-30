// import './App.css'
import { createContext, useState } from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./pages/logins/Login";
import AdminHomeScreen from "./pages/admin/admin-home-screen/AdminHomeScreen";
import ClientHomeScreen from "./pages/client/client-home-screen/ClientHomeScreen";
import ClientRequests from "./pages/client/client-requests/ClientRequests";
import ClientProducts from "./pages/client/client-products/ClientProducts";
import AdminPharmacies from "./pages/admin/admin-pharmacies/AdminPharmacies";
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminProducts from "./pages/admin/admin-products/AdminProducts";
import AdminRequests from "./pages/admin/admin-requests/AdminRequests";



export const UserContext = createContext<[any, React.Dispatch<React.SetStateAction<any>>] | null>(null);
const router = createBrowserRouter([
  {path: '/', element: <ProtectedRoute adminComponent={<AdminHomeScreen/>} clientComponent={<ClientHomeScreen/>} />},
  {path: '/login', element: <Login/>},
  {path: '/requests', element: <ProtectedRoute adminComponent={<AdminRequests/>} clientComponent={<ClientRequests/>} />},
  {path: '/products', element: <ProtectedRoute adminComponent={<AdminProducts/>} clientComponent={<ClientProducts/>} /> },
  {path: '/pharmacies', element: <AdminPharmacies/>}
]);
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
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}


export default App
