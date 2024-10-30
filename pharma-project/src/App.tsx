// import './App.css'


import ClientRequests from "./pages/client/client-requests/ClientRequests"
import ClientLogin from "./pages/client/client-logins/clientLogin"
import ClientRegister from "./pages/client/client-logins/clientRegister"
import ClientRecuperar from "./pages/client/client-logins/clientRecuperarContrasenna"
import ClientRecuperarCodigo from "./pages/client/client-logins/clientRecuperarCodigo"
import ClientRecuperarCodigoVerificacion from "./pages/client/client-logins/clientCodigoVerificacion"
import AdminSolicitudPuntos from "./pages/admin/admin-solicitudPuntos/adminSolicitudPuntos"
import AdminSolicitudPendiente from "./pages/admin/admin-solicitudPuntos/adminsolicitudPendiente"
import ModalInspectRequest from "./pages/client/client-requests/ModalInspectRequest"
/*import AdminHomeScreen from "./pages/admin/admin-home-screen/AdminHomeScreen"
import AdminRequests from "./pages/admin/admin-requests/AdminRequests"
import AdminPharmacies from "./pages/admin/admin-pharmacies/AdminPharmacies"
import AdminProducts from "./pages/admin/admin-products/AdminProducts"*/

function App() {
  return (

    <>
    <AdminSolicitudPendiente requestId={1} show={true} close={() => {}} />



    </>
  )
}


export default App
