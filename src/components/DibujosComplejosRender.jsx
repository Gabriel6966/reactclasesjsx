import {Component} from "react"

class DibujosComplejosRender extends Component{
    state={
        nombre: ["Diana", "Antonia", "Nomb2", "Nomb4"]
    }
    
    generarNombre=()=>{
        this.state.nombre.push("Nuevo nombre")
        
        this.setState({
            nombres:this.state.nombre
        })
    }
    
    
    render(){
        return(
            <div>
                <h1>Dibujos complejos render</h1>
                <button onClick={this.generarNombre}>
                    Generar nombre
                </button>
                {
                    this.state.nombre.map((nombre, index)=>{
                        return(<h4 style={{color: "grey"}} key={index}>
                            {nombre}
                            </h4>)
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender;