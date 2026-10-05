import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadreDeportes extends Component{
    
    deportes=["Futbol","Gimnasio", "Basquet", "Dep4"]
    
    state={
        favorito:""
    }
    mostrarFav=(deporteSelec)=>{
        this.setState({
            favorito:deporteSelec
        })
    }

    render(){
        return(
            <div>
                <h1>Padre deportes</h1>
                <h3 style={{backgroundColor: "green"}}>
                    Su deporte favorito es: {this.state.favorito}
                </h3>
                {
                    this.deportes.map((sport,index)=>{
                        return(
                            <HijoDeporte nombre={sport} key={index} mostrarFav={this.mostrarFav}/>
                        )
                    })
                }
            </div>
        )
    }
}