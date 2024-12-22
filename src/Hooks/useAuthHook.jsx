import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const useAuthHook = () => {
    const context = useContext(AuthContext);
    return context;
}

export default useAuthHook;