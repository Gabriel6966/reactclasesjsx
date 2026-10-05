import { Component } from "react";

export default class HijoDeporte extends Component{
    

    seleccionarFav=()=>{
       this.props.mostrarFav(this.props.nombre);
    }
    
    render(){
        return(
            <div>
                <h3 style={{color:"blue"}}>Deportes: {this.props.nombre}</h3>
                <button onClick={this.seleccionarFav}>Agregar Favorito</button>
            </div>
        )
    }
}