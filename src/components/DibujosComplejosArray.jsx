import { Component } from "react";

class DibujosComplejosArray extends Component{
    
    dibujarNumero=()=>{
        let lista=[];
        for(let i =1; i<=7; i++){
            var num=parseInt(Math.random()*120)+1;
            //añadr cada num a la lista con html
            lista.push(
                <li key={i}>
                    {num}
                </li>
            )
        }
        return lista;
    }
    
    
    render(){
        return(
            <div>
                <h1>Dibujos complejos Array</h1>
                <ul>
                    {this.dibujarNumero()}
                </ul>
            </div>
        )
    }
}
export default DibujosComplejosArray;