import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Videos() {


  return (

    <Container>
      <br/>
      <Card>


        <div className="video-responsive">
          <iframe width="1200" height="800" 
          src="https://www.youtube.com/embed/l3aeCc5ib_k" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
        </div>

      </Card>
      <br/>
      <Card className="video-responsive">

      <iframe width="1200" 
      height="800" 
      src="https://www.youtube.com/embed/jLK0RlDs6Lc" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>

      </Card >
<br/>
      <Card className="video-responsive">

      <iframe 
      width="1200" 
      height="800" 
      src="https://www.youtube.com/embed/ZwtFogVnjeY" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>
      </Card >
      <br/>
      <Card className="video-responsive">

      <iframe 
      width="1200" 
      height="800" 
     src="https://www.youtube.com/embed/Tvgx7PzUIZk" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen>

      </iframe>

      
      </Card >
      <br/>
      <Card className="video-responsive">

      <iframe 
      width="1200" 
      height="800" 
      src="https://www.youtube.com/embed/nYX29qskmZ0" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>
      </Card >
      
      

    </Container >

  );

}

export default Videos;
