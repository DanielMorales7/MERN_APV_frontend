import { useContext } from "react"; 
// con este usecontex se extraen los datos
import AuthContext from "../context/AuthProvider";

const useAuth = () => {

    return useContext(AuthContext)
}

export default useAuth;