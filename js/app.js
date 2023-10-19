// componentes 
import { FilaTablaDatos } from './componentes/filaTablaDatos.js';

//data
import datos from '../data/datos.json' assert { type:"json" };

//Generador ID
import {generadorUUID} from '../js/util/generadorAleatorio.js'

const cargaInical = () =>{
    for (let dato of datos){
        const tipo=dato.tipo.toString().replaceAll(","," | ");
        const scrore=(Math.random()*5+5).toFixed(2);

        const filaTablaDatos = new FilaTablaDatos(
            {values:[generadorUUID(),dato.gift,tipo,scrore]});
        document.getElementById('data-body').appendChild(filaTablaDatos.render());
    };
};

window.addEventListener("load", ()=>{
    cargaInical();
});


//error en appendChild