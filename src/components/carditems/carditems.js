import React from "react"
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ded from "./ded.jfif"
import Carditem from "./carditem"
import "./carditems.css"

class Carditems extends React.Component{
    constructor(){
        super()
        this.state={
                fandom:["disney","marvel","harry potter","star wars","DC Universe","humour"]
        }
    }
render(){
    var arrOfCards=this.state.fandom.map((data)=><Carditem title={data}/>)
    console.log(arrOfCards)
    return(

        <div className="container carditems">
        <h3>Shop By Fandoms</h3>
            <div className="row justify-content-center">
{arrOfCards}
            </div>
            </div>
    )
}
}
export default Carditems