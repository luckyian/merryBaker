import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Logo from "../components/Subcomponents/Logo";
import Card from 'react-bootstrap/Card';
import Menu from '../components/Subcomponents/Menu';


function Contact() {



  return (


    <div>
      <div className="mt-5">
        <h1 className="text2">Order</h1>
        <Menu />

        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Facebook/Instagram:</h3>
              <h4 className="fontSize">@merrylittlebaker</h4>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Email:</h3>
              <h4 className="fontSize">MerryLittleBakerisJenn@gmail.com</h4>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Phone:</h3>
              <h4 className="fontSize">425-308-1663</h4>
            </div>
          </Card.Body>
        </Card>


      </div >
    </div >









  );
}

export default Contact;