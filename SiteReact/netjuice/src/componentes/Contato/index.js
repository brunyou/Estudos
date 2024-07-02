
import './Contato.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faSquareJs, faNodeJs, faCss3, faBootstrap, faReact } from "@fortawesome/free-brands-svg-icons"

const Contato = () => {

    return(
        <section id='contato' className='contato'>
            <h1 id='titulo'>Contato</h1>
            <div className='container'>
                <section className='info'>
                    <h1> Olá!</h1>
                    <img src='https://avatars.githubusercontent.com/u/67168448?v=4' alt='github profile pic'/>
                    <p>Me chamo Bruno Pereira, estou me formando em Ciências da computação no período 9/10, desenvolvo sites já a um ano,
                    trabalhei com suporte banco de dados relacionais por mais de dois anos com exportação de dados via EDI, utilizando PLSQL, rotinas de banco 
                    como backups, restores, otimizações dentre outros.<br/>
                    Sou apaixonado por UI/UX desde que completei o conteúdo na faculdade, me aprofundei mais após em cursos como Alura, W3Schools entre outros.
                    </p>
                    
                     <h1>Tecnologias e frameworks:</h1> 
                    <section className='tecnologias'>
                        <FontAwesomeIcon icon={faSquareJs} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faNodeJs} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faCss3} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faBootstrap} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faReact} style={{color: "#FFFF",}} size="2xl" />
                    </section>
                </section>


            </div>
            </section>
        )
}

export default Contato