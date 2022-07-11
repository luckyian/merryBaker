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
        
        
      </div>
    </div>








  );
}

export default Index;
