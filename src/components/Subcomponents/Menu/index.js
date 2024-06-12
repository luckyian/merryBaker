import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import menu from "./menu.jpeg";


function Menu() {



    return (
        <div>
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    Cakes
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    Cupcakes
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    Mini-Cup Cakes
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
            </Card.Body>
        </Card>
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    Cake Jars
                    {/* <Card.Img src={menu}  alt="MerryLittleBaker"></Card.Img> */}
                </div>
            </Card.Body>
        </Card>
        </div>
        
        
    )
}
export default Menu;