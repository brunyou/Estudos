import "./Servicos.css"
import CardServicos from "../CardServicos"

const Servicos = () => {
    return(
        <section className="servicos">
                <h1>Serviços</h1>
                <section className="servicos_conteudo">
                    <CardServicos 
                    titulo="Web Design" 
                    descricao=" Desenvolver um website do 0 respeitando sua identidade visual."/>
                    <CardServicos 
                    titulo="Formatação" 
                    descricao="Formatar máquinas com backup e/ou trocas de sistema operacional."/>
                     <CardServicos 
                    titulo="DBA/BI" 
                    descricao="Já tem um banco de dados e gostaria de análises e relatórios do seu negócio."/>
                    <CardServicos 
                    titulo="DBA/BI" 
                    descricao="Já tem um banco de dados e gostaria de análises e relatórios do seu negócio."/>
                </section>
            </section>
    )
}
export default Servicos