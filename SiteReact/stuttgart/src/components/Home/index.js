import "./Home.css"
import React from 'react'
import svg from "../../img/oooscillate.svg"
import GoogleReviews from "../GoogleReviews"
import GoogleReviewsRed from "../GoogleReviewsRed"
import bmwLogo from "../../img/bmw2.png"
import mercedesLogo from "../../img/mercedes2.png"
import porscheLogo from "../../img/porsche2.png"
import Servicos from "../Servicos"
import Entrada from "../../img/entrada.jpeg"



const Home = () => {
return (
    
    <section id='home' style={{ backgroundImage: `url(${svg})` }}>
       
      <h1>SOLUÇÕES AUTOMOTIVAS EM SC E SP</h1>
      <p>Assistência técnica especializada em carros importados como <strong>Mercedes-Benz, Porshe e BMW.</strong></p>
          
          <div className="logos">
          <img src= {mercedesLogo} alt="mercedes logo"></img>
          <img src= {porscheLogo} alt="porsche logo"></img>
          <img src= {bmwLogo} alt="bmw logo" ></img>
          </div>
          <Servicos/>
          
          <div className="container" >
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