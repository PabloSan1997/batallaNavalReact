import { useEffect, useState } from "react";

function agregarBarco(cad, ver){
    let mira = [];
    let i=0;
    let barcos=90;
    cad.forEach(element => {
        if(barcos>0 && Math.random()*100<30){
            mira[i]=1;
            barcos--;
        }else{
            mira[i]=0;
        }
        i++;
    });
    i=-1;
    const nuevo = cad.map(ele=>{
        i++;
        const ob = ver===1 && mira[i]===0?{...ele, estado:mira[i], mostrar:false}:{...ele, estado:mira[i]};
        return ob
    });
    return nuevo;
}

function generar(){
    let tab1 = [];
    let tab2 = [];
    for (let i = 0; i < 100; i++) {
        tab1[i] = {
            estado: 0,
            mostrar: true,
            id: "id" + i,
            destruido: false
        }
        tab2[i] = {
            estado: 0,
            mostrar: false,
            id: "id" + i,
            destruido: false
        }
    }
    tab1 = agregarBarco(tab1, 1);
    tab2 = agregarBarco(tab2, 2);
    return { tab1, tab2 }
}

//Borrar
export function useTabla() {
    const [tabla1, setTabla1] = useState([]);
    const [tabla2, setTabla2] = useState([]);
    const [actualizado, setActualizador] = useState(false);
    useEffect(() => {
        const { ta1, ta2 } = ver();
        setTabla2(ta2);
        setTabla1(ta1);
    }, [actualizado]);
    const agregar = (id) => {
        const ta = tabla2;
        const indice = ta.findIndex(ele => ele.id == id);
        const ob = ta[indice];
        ta[indice] = { ...ob, mostrar: true };
        if(ta[indice].estado===1){
            ta[indice] = { ...ta[indice], destruido: true };
        }
        localStorage.tabla2 = JSON.stringify(ta);
        setActualizador(!actualizado);
    }
    const agregarAlMio=(id)=>{
        const ta = tabla1;
        const indice = ta.findIndex(ele => ele.id == id);
        const ob = ta[indice];
        ta[indice] = { ...ob, mostrar: true };
        if(ta[indice].estado===1){
            ta[indice] = { ...ta[indice], destruido: true };
        }
        localStorage.tabla1 = JSON.stringify(ta);
        setActualizador(!actualizado);
    }
    const borrar = () => {
        const { tab1, tab2 } = generar();
        localStorage.tabla1 = JSON.stringify(tab1);
        localStorage.tabla2 = JSON.stringify(tab2);
        setActualizador(!actualizado);
    }
    const ver = () => {
        const { tab1, tab2 } = generar();
        if (!localStorage.tabla1 || !localStorage.tabla2) {
            localStorage.tabla1 = JSON.stringify(tab1);
            localStorage.tabla2 = JSON.stringify(tab2);
        }
        const ta1 = JSON.parse(localStorage.tabla1);
        const ta2 = JSON.parse(localStorage.tabla2);
        return { ta1, ta2 };
    }
    return { tabla1, tabla2, agregar, borrar, agregarAlMio }
}