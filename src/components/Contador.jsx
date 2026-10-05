import { Component } from "react";

class Contador extends Component{
    //NO utilizamos ya JS

    numero=1;

    incrementarNumero=()=>{
        this.numero+=1;
        console.log("El numero es: " + this.numero);
        return this.numero;
    }

    //LAS VARIABLES STATE SE DECLARAN EN UN OBJETO DE LA CLASE
    state={
        valor:parseInt(this.props.inicio)
    }

    incrementarValor=()=>{
        //Para modificar el valor de cualquier elemento state
        //utilizamos setState
        this.setState({
            valor: this.state.valor+1
        })
    }



    render(){
        return(<div>
            <h1>Contador JSX: {this.props.inicio}</h1>
            <button onClick={this.incrementarNumero}>Incrementar</button>
            <h2>El contador va por este numero: {this.numero}</h2>
            <h3>Valor: {this.state.valor}</h3>
            <button onClick={this.incrementarValor}>Pulsar para aumentar</button>
            
        
        </div>)
    }
}

export default Contador;