import React, { Component } from "react";
const ImgUrl = "https://embedsocial.com/cdn/images/embedsocial-icon.png";

class GoogleReviewsRed extends Component  {
    componentDidMount() {
        (function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript"));
    }
    render() {

    return(
    <div class="embedsocial-hashtag" data-ref="9fdb74ef8751bf96c7838cf693e80e261a491bfc" data-lazyload="yes" >
     <a class="feed-powered-by-es feed-powered-by-es-badge-img" href="https://embedsocial.com/blog/embed-google-reviews/" target="_blank" rel="noreferrer" title="Embed Google reviews">
        <img src={ImgUrl} alt="EmbedSocial" /> Embed Google reviews </a> </div>
    )
  
}
}
export default GoogleReviewsRed;