import { Component } from "react";
import HijoNumero from "./HijoNumero";

export default class PadreNumeros extends Component {
    numerosIniciales = () => {
        const numeros = [];

        for (let i = 0; i < 5; i++) {
            numeros.push(parseInt(Math.random() * 120) + 1);
        }

        return numeros;
    };

    state = {
        numeros: this.numerosIniciales(),
        suma: 0
    };

    generarNumero = () => {
        const numero = parseInt(Math.random() * 120) + 1;

        this.setState({
            numeros: this.state.numeros.concat(numero)
        });
    };

    sumarNumero = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        });
    };

    render() {
        return (
            <div>
                <h1>Padre de números</h1>
                <h2>Suma: {this.state.suma}</h2>
                <button onClick={this.generarNumero}>Generar número</button>
                <ul>
                    {this.state.numeros.map((numero, index) => (
                        <li key={index}>
                            <HijoNumero
                                numero={numero}
                                sumarNumero={this.sumarNumero}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
