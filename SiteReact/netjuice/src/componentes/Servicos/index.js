import "./Servicos.css"
import CardServicos from "../CardServicos"
import Onda from "../Onda"

const Servicos = () => {
    return(
        <section id='servicos' className="servicos">
                <h1>Serviços</h1>
                <section className="servicos_conteudo">
                    <CardServicos 
                    titulo="Web Design" 
                    descricao=" Desenvolver um website do 0 respeitando sua identidade visual."/>
                     <CardServicos 
                    titulo="Manutenção de site" 
                    descricao="Quer alterar algum detalhe no site, ou terceirizar a manutenção de Host e DNS."/>
                    <CardServicos 
                    titulo="Formatação" 
                    descricao="Formatar máquinas com backup e/ou trocas de sistema operacional."/>
                     <CardServicos 
                    titulo="DBA/BI" 
                    descricao="Já tem um banco de dados e gostaria de análises e relatórios do seu negócio."/>
                   <Onda id='onda' cor='#0076c5'/>
                </section>
            </section>
    )
}
export default Servicos