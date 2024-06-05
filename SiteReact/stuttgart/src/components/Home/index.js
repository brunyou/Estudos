import "./Home.css"
import React from 'react'
import svg from "../../img/oooscillate.svg"
import GoogleReviews from "../GoogleReviews"
import GoogleReviewsRed from "../GoogleReviewsRed"



const Home = () => {
return (
    
    <section id='home' style={{ backgroundImage: `url(${svg})` }}>
       
        
      <p>Oficina especializada em carros importados como <strong>Mercedes-Benz, Porshe e BMW.</strong> <br/>
         Oferece o que há de mais tecnológico com conhecimento técnico em manutenção de veículos, seja atendido por uma <strong>verdadeira cinco estrelas.</strong></p>
          <div className="container">
          <div className="empty"></div>
          <div className="componenteGrande">
            <GoogleReviews/>
          </div>
          <div className="componenteReduzido">
          <GoogleReviewsRed/>
          </div>
          <div className="empty"></div>
          </div>
         
    </section>
    
)
}

export default Home;