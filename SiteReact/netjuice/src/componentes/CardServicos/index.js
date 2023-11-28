import "./CardServicos.css"

const CardServicos = (props) => {
    return(
        <div className='card'>
            <div className="card_content">
                <h1>{props.titulo}</h1>
                <p id='info'>{props.descricao}</p>
            
                <p id='uplink'>Descubra mais <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span></p>
            </div>   
        </div>
    )
}

export default CardServicos