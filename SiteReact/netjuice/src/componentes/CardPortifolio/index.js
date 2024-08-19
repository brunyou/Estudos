

const CardPortifolio = (props) => {
    return(
        <div id="CardPorfolio" style={{ backgroundImage: `url(${props.BgImageUrl})` }}>
            <a href={props.link}>
                <img src={props.logoImgUrl}></img>
            </a>
        </div>
    )
}
