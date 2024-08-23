import React, { Component } from "react";
import "./GoogleReviews.css";



const ImgUrl = "https://embedsocial.com/cdn/images/embedsocial-icon.png";


class GoogleReviews extends Component  {
    componentDidMount() {
        (function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); 
    }
    render() {

    return(
    <div className="review">
    <div class="embedsocial-hashtag" data-ref="38e9e21040e4bb22c07e0d1d2b2ec59a89cbbf38" data-lazyload="yes" >
     <a class="feed-powered-by-es feed-powered-by-es-slider-img" href="https://embedsocial.com/blog/embed-google-reviews/" target="_blank" rel="noreferrer" title="Embed Google reviews">
        <img src={ImgUrl} alt="EmbedSocial" /> Embed Google reviews </a> </div>
    </div>
    )
  
}

}
export default GoogleReviews;

