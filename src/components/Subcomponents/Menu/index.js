import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import macrons from "./macrons.jpeg";
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
                <CardImg></CardImg>
                <div className="menuContent">
                6" Cake   $55
                <br/>
                8" Cake   $65
                <br/>
                10" Cake  $75
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
                <div className="menuContent">
                Minimum Order = One Dozen
                <br></br>
                $36 per dozen
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle" >
                   Macarons
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
                <div className="menuContent">
                Minimum Order = One Dozen
                <br></br>
                $45 per dozen
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div className="tourTitle">
                    Cake Pops
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
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