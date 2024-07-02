
import './Contato.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faSquareJs, faNodeJs, faCss3, faBootstrap, faReact, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons"

const Contato = () => {

    return(
        <section id='contato' className='contato'>
            <h1 id='titulo' data-aos="fade-left">Sobre</h1>
            <div className='container'>
                <section className='info' data-aos="zoom-in">
                    <h1> Olá!</h1>
                    <img className='profilePic' src='https://avatars.githubusercontent.com/u/67168448?v=4' alt='github profile pic'/>
                    <p>Me chamo Bruno Pereira, estou me formando em Ciências da computação no período 9/10, desenvolvo sites já a um ano,
                    trabalhei com suporte banco de dados relacionais por mais de dois anos com exportação de dados via EDI, utilizando PLSQL, rotinas de banco 
                    como backups, restores, otimizações dentre outros.<br/>
                    Sou apaixonado por UI/UX desde que completei o conteúdo na faculdade, me aprofundei mais após em cursos como Alura, W3Schools entre outros.
                    </p>
                    
                     <h1>Tecnologias e frameworks:</h1> 
                    <section className='tecnologias' data-aos="fade-left">
                        <FontAwesomeIcon icon={faSquareJs} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faNodeJs} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faCss3} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faBootstrap} style={{color: "#FFFF",}} size="2xl" />
                        <FontAwesomeIcon icon={faReact} style={{color: "#FFFF",}} size="2xl" />
                    </section>
                </section>
                    <div className='footer'>
                        <p>Entre em contato comigo via WhatsApp</p>
                        <a href='https://wa.me/5547988484652' target='blank'><FontAwesomeIcon className='icone' icon={faWhatsapp} style={{color: "#FFFF",}} size="2xl" /></a>
                   
                        <p>Me encontre no Github</p>
                        <a href='https://github.com/brunyou' target='blank'><FontAwesomeIcon className='icone' icon={faGithub} style={{color: "#FFFF",}} size="2xl" /></a>
                    </div>
            </div>
            </section>
        )
}

export default Contato