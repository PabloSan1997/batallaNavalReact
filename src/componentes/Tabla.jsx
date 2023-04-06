import React from 'react'
import { useContexto } from '../context';
import "../estilos/Casilla.scss";
export function Tabla({ tipo }) {
    const { tabla2, tabla1 } = useContexto();
    let tablas = [];
    if (tipo === "tabla1") {
        tablas = tabla1;
    } else if (tipo === "tabla2") {
        tablas = tabla2;
    }
    return (
        <div className="tabla">
            {tablas.map(ele =>
            (<Casilla
                key={ele.id}
                estado={ele.estado}
                mostrar={ele.mostrar}
                id={ele.id}
                tipo={tipo}
                destruido={ele.destruido}
            />)
            )}
        </div>
    )
}

function Casilla({ estado, disparo, mostrar, id, tipo, destruido }) {
    const { agregar, setMaquina} = useContexto();
    
    const dos = () => tipo === "tabla2" ? { onClick: (() => {agregar(id); setMaquina(true);}) } :null;
    const defClase1 =()=>destruido ? "casilla atinado" : mostrar? "casilla agua" : "casilla";
    const defClase2 =()=>destruido ? "casilla atinado" : mostrar? "casilla agua" : "casilla";
    return (
        <div
            className={tipo==="tabla2"?defClase2():defClase1()}
            {...dos()}>
            {mostrar && estado === 1 ? <p>{'X'}</p> : null}
        </div>
    );
}