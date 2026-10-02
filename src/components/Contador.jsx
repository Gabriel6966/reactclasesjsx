import { Component } from "react";

class Contador extends Component{
    //NO utilizamos ya JS

    numero=1;

    incrementarNumero=()=>{
        this.numero+=1;
        console.log("El numero es: " + this.numero);

    }

    render(){
        return(<div>
            <h1>Contador JSX</h1>
            <button onClick={this.incrementarNumero}>Incrementar</button>
        </div>)
    }
}

export default Contador;