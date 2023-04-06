import { createContext, useContext, useEffect, useState } from "react";
import { useTabla } from "../config/constructor";


const Contexto = createContext();
export function Provedor({ children }) {
    const { tabla1, tabla2, agregar, borrar, agregarAlMio } = useTabla();
    const [maquina, setMaquina] = useState(false);
    useEffect(
        () => {
            for (let i = 0; i < 3; i++) {
                if (maquina) {
                    let num;
                    let ver = true;
                    while (ver) {
                        num = Math.round(Math.random() * (tabla1.length - 1));
                        const indice = tabla1.findIndex(ele => ele.id === `id${num}`);
                        ver = tabla1[indice].destruido;
                    }
                    agregarAlMio(`id${num}`);
                    setMaquina(false);
                }
            }
        }
        , [maquina]);
    return (
        <Contexto.Provider
            value={
                {
                    tabla1,
                    tabla2,
                    agregar,
                    borrar,
                    setMaquina
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}

export const useContexto = () => {
    const auth = useContext(Contexto);
    return auth;
}