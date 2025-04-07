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
        <Card className="aboutBack">
          <Card.Body className="text">
          <div className="boxer">
              
              <h4 className="fontSize">Order:</h4>
              <h3>Email:</h3>
              <h4 className="fontSize">Order@MerryLittleBaker.com</h4>
              <br></br>
              <div className="boxer">
              <h3>Phone:</h3>
              <h4 className="fontSize">425-308-1663</h4>
            </div>
            </div>
          </Card.Body>
        </Card>
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
              <h3>Contact:</h3>
              <h4 className="fontSize">Order:</h4>
              <h4 className="fontSize">Order@MerryLittleBaker.com</h4>
              <br></br>
              <h4 className="fontSize">Info:</h4>
              <h4 className="fontSize">Info@MerryLittleBaker.com</h4>
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
        <Card className="aboutBack">
          <Card.Body className="text">
            <div className="boxer">
              <h3>Pick-up Location:</h3>
              <h4 className="fontSize">8701 271st NW Stanwood, WA 98292</h4>
             <a href="https://www.google.com/maps/place/Merry+Little+Baker/@48.2430576,-122.3537432,14.75z/data=!4m16!1m9!3m8!1s0x54855c68d27f92b1:0xab96424e07978b9!2s8701+271st+St+NW,+Stanwood,+WA+98292!3b1!8m2!3d48.2424353!4d-122.350608!10e3!16s%2Fg%2F11bw3yd1x0!3m5!1s0x54855d6b11916ca3:0x62de7da646df5ed9!8m2!3d48.2424353!4d-122.350608!16s%2Fg%2F11m5q1qqts?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D">Google Maps Location</a>
            
            </div>
          </Card.Body>
        </Card>


      </div >
    </div >









  );
}

export default Contact;