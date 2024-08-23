import './Mapa.css';

const Mapa = () => {
    return(
        <div className="mapa">
            <iframe title="mapa-google"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14219.82040866695!2d-48.6354335!3d-26.99997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43e3709765f1%3A0x14252db1947a63f9!2sOficina%20Mec%C3%A2nica%20Stuttgart%20Motors!5e0!3m2!1spt-BR!2sbr!4v1721661865892!5m2!1spt-BR!2sbr"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default Mapa;