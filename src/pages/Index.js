import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Goods from '../components/Subcomponents/Goods/index'
import Logo from "../components/Subcomponents/Logo";


function Index() {
 
  
  
  return (


    <div>
      <div className="mt-5">
      <Logo/>
        
         <Goods/>
         <br/>
        
        <h1 className="text3">I do NOT ship</h1>
      </div>
    </div>








  );
}

export default Index;
