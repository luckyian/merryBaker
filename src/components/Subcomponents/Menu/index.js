import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import cake from "./macaroonCake.jpeg"
import macrons2 from "./macrons3.jpg";
import cupcake from "./menuCupCake.jpg";
import cakePop from "./cakepopmenu.jpg"
import sugarCookie from "./sugarcookiesmenu.jpg"
import { CardImg } from "react-bootstrap";


function Menu() {



    return (
        <div>
        <Card className="aboutBack">
        
            <Card.Body>
                
                <div className="tourTitle" >
                    Cakes
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <CardImg src={cake} ></CardImg>
                <div className="menuContent">
                6" Cake   $55
                <br/>
                8" Cake   $65
                <br/>
                10" Cake  $75
                <br/>
                Priced on Cake Board
                <br/>
                $5 additional cost for cake drum
                </div>
                <br/>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle">
                    Cupcakes
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <CardImg src={cupcake}></CardImg>
                <div className="menuContent">
                1 = $3.50
                <br/>
                2 = $6.50
                <br/>
                4 = $12.00
                <br/>
                6 = $18.00
                <br/>
                $36 per dozen
                <br/>
                Custom orders are a minimum one dozen
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle" >
                   Macarons
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <CardImg src={macrons2}></CardImg>
                <div className="menuContent">
                Available daily at:
                <a href="https://www.yelp.com/biz/coastal-vie-espresso-stanwood">  Costal Vie</a>
                </div>

                <div className="menuContent">
                1 = $3.50
                <br/>
                2 = $6.50
                <br/>
                4 = $12.25
                <br/>
                6 = $20
                <br/>
                $38 per dozen
                <br/>
                Custom orders are a minimum one dozen
                
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle">
                    Cake Pops
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <CardImg src={cakePop}></CardImg>
                <div className="menuContent">
                Minimum Order = One Dozen
                <br></br>
                Small $36 per dozen
                <br></br>
                Large $54 per dozen
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle" >
                    Sugar Cookies
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <CardImg src={sugarCookie}></CardImg>
                <div className="menuContent">
                Minimum Order = One Dozen
                <br></br>
                $36 per dozen
                </div>
            </Card.Body>
        </Card>
        </div>
        
        
    )
}
export default Menu;