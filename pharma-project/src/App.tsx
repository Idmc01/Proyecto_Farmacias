// import './App.css'
import { createContext, useState } from "react"
import ClientRequests from "./pages/client/client-requests/ClientRequests"

export const UserContext = createContext<[any, React.Dispatch<React.SetStateAction<any>>] | null>(null);
function App() {
  const [user, setUser] = useState<any>(null)
  return (
    <UserContext.Provider value={[user, setUser]}>
      <ClientRequests />
    </UserContext.Provider>
  )
}

export default App
