import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import BandPhoto from "../components/Subcomponents/Bandphoto";
import Card from 'react-bootstrap/Card';


function Contact() {



  return (


    <div>
      <div className="mt-5">
        <h1 className="text2">Contact</h1>
        <BandPhoto />

        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Merchandise:</h3>
              <h4 className="fontSize">merch@fortressofthebear.com</h4>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Touring/Booking:</h3>
              <h4 className="fontSize">booking@fortressofthebear.com</h4>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>All Other Inquiries:</h3>
              <h4 className="fontSize">info@fortressofthebear.com</h4>
            </div>
          </Card.Body>
        </Card>


      </div >
    </div >









  );
}

export default Contact;