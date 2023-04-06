import React from 'react';
import { Header } from './componentes/Header';
import { Tablero } from './componentes/Tablero';
import "./estilos/App.scss";
export function App() {
  return (
    <>
        <Header/>
        <Tablero/>
    </>
  )
}
