import React from "react"
import sleep from "./sleep.jfif"
import "./category"
function Category(props){
    var acc=["men","women","accesories"]
    var categ=acc.map(d=>{
        return(
            <div className="category col-lg-4 col-md-4 col-xs-4">
    <img src={sleep} alt="category-image" className="image-category"/>
    <h5>{d}</h5>
</div>
        )
    })
    return(
        <div className="categories container row">
{categ}
        </div>
    )
}
export default Category