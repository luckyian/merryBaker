import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function BandPhoto() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src=".\assets\fortressofthebear.jpg"  alt="Band Photo"></Card.Img>
                </div>
            </Card.Body>
        </Card>
    )
}
export default BandPhoto;