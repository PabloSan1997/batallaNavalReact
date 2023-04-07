import React from 'react'
import { useContexto } from '../context'

export function Header() {
  const { borrar, tabla1, tabla2 } = useContexto();
  const obtenerTotales = (tabl) => {
    const partes = tabl.filter(ele => ele.estado === 1);
    return partes.length;
  }
  const perdidas = (tabl) => {
    const partes = tabl.filter(ele => ele.destruido);
    return partes.length;
  }
  const ganador = () => {
    let perder = false;
    let jugador;
    if (perdidas(tabla1) === obtenerTotales(tabla1)) {
      perder = true;
      jugador = 1;
    }
    if (perdidas(tabla2) === obtenerTotales(tabla2)) {
      perder = true;
      jugador = 2;
    }
    return { perder, jugador }
  }
  const mos = ganador();
  return (
    <header>
      <h1>Batalla naval</h1>
      <div className="resultados">
        <h2>Partes destruidas:</h2>
        {mos.perder ? <p className='avizo'>Juador {mos.jugador} ya no tiene barcos</p> :
          (
            <>
              <p className="texto">Tuyos:{perdidas(tabla1)}/{obtenerTotales(tabla1)}</p>
              <p className="texto">Enemigo:{perdidas(tabla2)}/{obtenerTotales(tabla2)}</p>
            </>
          )}
        <div className="area-boton">
          <button className='boton' onClick={borrar}>Reiniciar</button>
        </div>
      </div>
    </header>
  )
}
