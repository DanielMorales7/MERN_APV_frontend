import { useContext } from "react"; 
// con este usecontex se extraen los datos
import  PacientesContext  from "../context/PacientesProvider";

const usePacientes = () => {

    return useContext(PacientesContext)
}

export default usePacientes;