import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Goods() {



    return (
        <Card className="aboutBack">
        <Card.Body className="text">
          <Card.Title className="tourTitle">Merry Goods</Card.Title>
          <div >
            <Card.Img src=".\assets\merryGnomeGreen.jpg" alt="TheGoods"></Card.Img>
          </div>
          <div>
         <p className="tourWords">

           {/* <h3>TBD</h3> */}
           {/* <h3>Check Back Soon for Upcoming Shows</h3> */}
         <h1>Cupcakes</h1>
         <br></br>
         <h4>
          <Card.Img src=".\assets\merryGnomePig.jpg" alt="Piggy"></Card.Img> 
         </h4>
         
         <br></br>
         <br></br>
         <br></br>
         <h4>July 15th, 2022</h4>
         <h4>
         <a href="https://www.facebook.com/PTAnchor/">The Anchor Port</a>
         </h4>
         <h4>Port Townsend, WA</h4>
         {/* <h4>
           <a href="https://concrete-wa.com/events/fly-in/">Concrete Fly In</a>
          </h4> */}
         <br></br>
         <br></br>
         <br></br>
         <h4>July 16th, 2022</h4>
         <h4>
           <a href="https://concrete-wa.com/events/fly-in/">Concrete Fly In</a>
          </h4>
         <h4>Concrete, WA</h4>
         
         <br></br>
         <br></br>
         <br></br>
         <h4>August 27th, 2022 @ 8pm</h4>
         <h4>
         <a href="https://highdiveseattle.com/">High Dive</a>
         </h4>
         <h4>Seattle, WA</h4>
         <h4>
          {/* <a href="https://highdiveseattle.com/e/calendar/">Concerts on the Dock</a> */}
         </h4>
         <br></br>
         <br></br>
         <br></br>
         <h4>Semptember 3th, 2022 @ 7pm</h4>
         <h4>
          <a href="http://www.eaglehavenwinery.com/summer-concerts.html">Summer Concerts</a>
         </h4>
         
         <h>Outdoor Pavilion</h>
         <h4>
         <a href="http://www.eaglehavenwinery.com/">Eagle Haven Winery</a>
         </h4>
         <h4>Sedro-Woolley, WA</h4>
         
        
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Goods;