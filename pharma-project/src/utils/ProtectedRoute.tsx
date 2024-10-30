import { useContext } from "react";
import { UserContext } from "../App";
import Login from "../pages/logins/Login";

export default function ProtectedRoute({adminComponent, clientComponent}: any) {
    const userContext = useContext(UserContext);

    if (!userContext || !userContext[0]) {
        return <Login />;
    }

    const [user] = userContext;

    return user.is_admin ? adminComponent : clientComponent;
}