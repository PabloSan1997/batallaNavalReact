import React from 'react'
import { Tabla } from './Tabla'
import { useContexto } from '../context'
import "../estilos/Tablero.scss"
export function Tablero() {
  return (
    <div className="tablero">
      <Tabla tipo="tabla1" />
      <Tabla tipo="tabla2" />
    </div>
  )
}
