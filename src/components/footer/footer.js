import React from "react"
import "./footer.css"

function Footer(){
    return(
<div>
<footer>
<div style={{minHeight: "250px"}} class="footer" id="footer-sub">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5> HELP </h5>
            <ul>
                <li><a href="">Payments</a><hr/></li>
                <li><a href="">Saved Cards</a><hr/></li>
                <li><a href="">Shipping</a><hr/></li>
                <li><a href="">Cancellation & Returns</a><hr/></li>
                <li><a href="">FAQ</a></li>               
            </ul>
            </div>

             <div class="col-md-4">
                <h5> HUMOURBABA </h5>
            <ul>
                <li><a href="">Contact Us</a><hr/></li>
                <li><a href="">About Us</a><hr/></li>
                <li><a href="">Careers</a><hr/></li>
                <li><a href="">Press</a><hr/></li>
                <li><a href="">Sell on our website</a></li>               
            </ul>
        </div>

         <div class="col-md-4">
            <h5> MISC </h5>
            <ul>
                <li><a href="">Online Shopping</a><hr/></li>
                <li><a href="">Affliate Program</a><hr/></li>
                <li><a href="">Gift Card</a><hr/></li>
                <li><a href="">Subscription</a><hr/></li>
                <li><a href="">Sitemap</a></li>               
            </ul>
        </div>
       
        </div>

        
 
        
        

       

    </div>
    
</div>




</footer>
</div>
    )
}
export default Footer