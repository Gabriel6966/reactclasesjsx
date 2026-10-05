import { Component } from "react";

export default class HijoNumero extends Component{

    sumarNumeros=()=>{
        this.props.sumarNumero(this.props.numero);
    }


    render(){
        return(
            <div>
                <h3>Numero: {this.props.numero}</h3>
                <button onClick={this.sumarNumeros}>Sumar número</button>
            </div>
        )
    }
}