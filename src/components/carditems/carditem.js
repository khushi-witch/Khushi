import React from "react"
import Card from 'react-bootstrap/Card'
import ded from "./ded.jfif"
import "./carditems.css"
function Carditem(props){
    return(
        <div className="col-lg-4 col-md-4 col-xs-6 carditem">
<Card style={{ width: '18rem' }}>
<Card.Header as="h5">{props.title}</Card.Header>
  <Card.Img variant="top" src={ded} />
<Card.Footer as="h5">+ explore</Card.Footer>
</Card>
        </div>
    )
}
export default Carditem