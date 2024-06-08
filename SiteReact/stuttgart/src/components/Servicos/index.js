import React from "react";
import "./Servicos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { faDolly } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Servicos = () => {
return(
    <section className="servicos">
        {/* <h1>Serviços</h1> */}
        
        <div  id="servicos">
        <div className="card">
            <FontAwesomeIcon icon={faCar} style={{color: "#FF2A30",}} size="2xl" />
            <p>PERSONAL CAR</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FF2A30",}} size="2xl" />
            <p>AVALIAÇÃO TÉCNICA PRÉ-COMPRA</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faBook} style={{color: "#FF2A30",}} size="2xl"/>
            <p>ACESSORIA</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#FF2A30",}} size="2xl"/> 
            <p>TREINAMENTO EM EQUIPES</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faGears}  style={{color: "#FF2A30",}} size="2xl"/>
            <p>IMPLANTAÇÃO DE PROCESSOS</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faClipboardList} style={{color: "#FF2A30",}} size="2xl"/>
            <p>DIAGNÓSTICO AVANÇADO</p>
        </div>
        <div className="card">
            <FontAwesomeIcon icon={faDolly} style={{color: "#FF2A30",}} size="2xl"/>
            <p>IMPORTAÇÃO DE PEÇAS</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faCheck} style={{color: "#FF2A30",}} size="2xl"/>
            <p>REVISÃO PREVENTIVA E REPARATIVA</p>
        </div>
        </div>
    </section>
)
}

export default Servicos;