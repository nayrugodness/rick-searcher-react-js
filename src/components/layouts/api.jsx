import React, {useState, useEffect} from "react";

import { Characters } from './../UI/characters';

export const ApiRandM = () =>{

    const [characters, setCharacters] = useState([]);

    const urlInicial = "https://rickandmortyapi.com/api/character/?name="

    const obtenerDatos = (urlInicial) =>{
        fetch(urlInicial)
        .then(respuesta => respuesta.json())
        .then(data => setCharacters(data.results))
    }

    const llamarDatos =(evento)=>{
        const nombre=evento.target.value
        const urlFinal=urlInicial + nombre

        if(evento.keyCode===13){
            obtenerDatos(urlFinal)
        }
    }

    useEffect(() =>{
        obtenerDatos(urlInicial)
    }, [])

    return(
        <>
        <header>
            <div className="search">
                <h1>Rick and Morty</h1>
                <input placeholder="character name" className="searcher" onKeyDown={llamarDatos} type="text" />
            </div>
        </header>

        
        <div className="container-cards"> 
            <Characters characters={characters}/>
        </div>
        
        </>
    )

}