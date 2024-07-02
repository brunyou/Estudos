import "./Servicos.css"
import CardServicos from "../CardServicos"
import Onda from "../Onda"
import imagem_web from '../../img/website_image.png'
import imagem_DBA from '../../img/DBA.png'
import imagem_maintenance from '../../img/maintenance.png'
import {React, useState, useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


const Servicos = () => {
    
    const [modalOpen1, setModalOpen1] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)
    const [modalOpen3, setModalOpen3] = useState(false)

    useEffect (()=> {
        AOS.init({duration: 600});
    }, []);

    return(
        <section id='servicos' className="servicos">

                <h1 data-aos="fade-left">Serviços</h1>
                {modalOpen1 && (<div className="backgroundBlur">
                    <div className="card_webdesign_open">
                        <p onClick={() => setModalOpen1(false)}className="close">&times;</p>
                    <h1>Web Design</h1>
                        <p>Desenvolver uma identidade visual para o seu cartão de visita global é uma tarefa que não pode ser negligenciada, pois a primeira impressão é a que fica, seu negócio ou projeto merece ser bem visto</p>
                        <p>Respeitando sua identidade visual caso tenha, proporcionando uma boa experiência ao primeiro contato de seus clientes</p>
                        <img data-aos="zoom-in" className="imgOpen" rel="preload" src={imagem_web} alt='web illustration'/>
                    </div>
                </div>)}

                {modalOpen2 && (<div className="backgroundBlur">
                    <div className="card_webdesign_open">
                        <p onClick={() => setModalOpen2(false)}className="close">&times;</p>
                    <h1>Manutenção de Site</h1>
                        <p>Gostaria de mudar algo em um site já existe? Com acesso ao site original é possível fazer quaisquer alterações, sejam elas no conteúdo em si, ou até mesmo na aparência caso necessário</p>
                        <p>Ou procura terceirizar a parte de manter o site no ar? Pagando um valor mensal fixo, além de manter o site no ar é possível solicitar alterações no site.</p>
                        <img data-aos="zoom-in" className="imgOpen" rel="preload" src={imagem_maintenance} alt='maintenance illustration'/>
                    </div>
                </div>)}

                {modalOpen3 && (<div className="backgroundBlur">
                    <div className="card_webdesign_open">
                        <p onClick={() => setModalOpen3(false)}className="close">&times;</p>
                    <h1>DBA/BI</h1>
                        <p>Obter dados mais concisos e poder extrair relatórios direto do banco de dados é extremamente importante, afinal, hoje em dia dados valem mais que ouro.</p>
                        <p>Por já ter uma bagagem com Banco de dados a mais de dois anos, posso realizar manutenções em banco de dados Linux e Windows, como criação e compartilhamento de backups, restores em bases de dados, rotinas de otimização entre outros.</p>
                        <img data-aos="zoom-in" className="imgOpen" rel="preload" src={imagem_DBA} alt='maintenance illustration'/>
                    </div>
                </div>)}




                <section className="servicos_conteudo">
                    <div onClick={() => setModalOpen1(true)} className="clickableDiv" data-aos="zoom-in">
                    <CardServicos
                    titulo="Web Design" 
                    descricao=" Desenvolver um website do 0 respeitando sua identidade visual."/>
                    </div>

                    <div onClick={() => setModalOpen2(true)} className="clickableDiv" data-aos="zoom-in">
                     <CardServicos 
                    titulo="Manutenção de site" 
                    descricao="Quer alterar algum detalhe no site, ou terceirizar a manutenção de Host e DNS."/>
                    </div>

                    <div onClick={() => setModalOpen3(true)} className="clickableDiv" data-aos="zoom-in">
                    <CardServicos 
                    titulo="DBA/BI" 
                    descricao="Já tem um banco de dados e gostaria de análises e relatórios do seu negócio."/>
                    </div>
                    
                   
                </section>
                <Onda id='onda' cor='#0076c5'/>
            </section>
    )
}
export default Servicos