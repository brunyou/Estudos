import "./CardServicos.css"

const CardServicos = (props) => {
    return(
        <div className='card'>
            <div className="card_content">
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>
                {/* <a href="#">Descubra mais
                    <span className="material-symbols-outlined">

                    </span>
                </a> */}
            </div>
        </div>
    )
}

export default CardServicos