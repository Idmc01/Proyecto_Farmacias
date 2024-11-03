// import './App.css'
//import ClientRequests from "./pages/client/client-requests/ClientRequests"
import AdminProducts from "./pages/admin/admin-products/AdminProducts"
//import ClientProducts from "./pages/client/client-products/ClientProducts"


function App() {
<<<<<<< Updated upstream
=======
  // Recupera el usuario almacenado en sessionStorage, permite hacer refresh sin perder la sesión del usuario. Se borra cuando se cierra el navegador.
  const initialUser = JSON.parse(sessionStorage.getItem("user") || "null");


  // COMENTAR ESTA LINEA PARA QUE FUNCIONE EL LOGIN, DESCOMENTAR LA DE ABAJO.  
   const [user, setUser] = useState<any>({
     id: 1,
     name: "admin",
     email: "admin@gmail.com",
     is_admin: false,
   });

  // Usuario que se loguea
  //const [user, setUser] = useState<any>(initialUser);


  // Actualiza sessionStorage cada vez que el usuario cambie
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

>>>>>>> Stashed changes
  return (
    <>
      <AdminProducts />
    </>
  )
}

export default App
