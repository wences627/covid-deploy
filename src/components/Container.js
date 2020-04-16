import React from 'react';
import Header from './Header';
import InfoBolivia from './InfoBolivia';
import InfoGlobal from './InfoGlobal';
import Info from './Info';
import Footer from './Footer';
import '../css/index.css';

class Container extends React.Component {
    state ={
        datosPais:{},
        datosGlobal:{}
    }

    componentDidMount(){
        fetch('https://coronavirus-19-api.herokuapp.com/countries/bolivia')
            .then( res => res.json())
            .then(datosPais => this.setState({ datosPais }))

        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(res => res.json())
            .then(datosGlobal => this.setState({ datosGlobal }))
    }

    render(){

        return(
            <div>
                <Header title='Covid-19'/>    
                <div className="container">
                    <h4 className='center'>Tabla de Datos</h4>
                    <br/>
                    <InfoBolivia datosPais={this.state.datosPais}/>
                    <InfoGlobal datosGlobal={this.state.datosGlobal}/>
                    
                </div>        
                <div className="container section">
                    <div className="row">
                        <h4 className="center">INFORMACION</h4>
                        <br/>
                        <Info 
                            url="https://i.ytimg.com/vi/prHuClGHtmY/maxresdefault.jpg"
                            title="Que es el coronavirus?"
                            text="Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS)."
                        />
                        
                        <Info 
                            url="https://img2.rtve.es/imagenes/ciencia-vida-transmision-enfermedades-infecciosas-26-06-15/1435314987595.jpg"
                            title="Como se Transmite?"
                            text="Se transmite de persona a persona a traves de gotitas que expulsa una persona enferma al hablar, toser o estornudar.
                            Pueden ser inhaladas por las personas que están cerca al enfermo y también quedarse en cualquier tipo de superficie (pasamanos, mesas, lapiceros, entre otros y ser tocadas por las manos.
                            El virus ingresa a nuestro organismo cuando nos tocamos los ojos, la nariz y la boca con las manos sin lavar."
                        />

                        <Info 
                            url="https://imagenes.milenio.com/W6OAVMYstXQrHA0_a5sp86Bux_Q=/958x596/https://www.milenio.com/uploads/media/2020/03/18/coronavirus-sintomas-del-covid-milenio_1_0_956_595.jpg"
                            title="Síntomas"
                            lista= {["Tos.", "Fiebre alta.", "Estornudos.", "Escalofríos.", "Dolor de Garganta.", "Complicación al respirar."]}
                        />

                        <Info 
                            url="https://cdn.cienradios.com/wp-content/uploads/sites/2/2020/03/manos-1.jpg"
                            title="Medidas Preventivas"
                            text="Puede reducir el riesgo de infección:
                            Lavándose las manos regularmente con agua y jabón o con desinfectante de manos a base de alcohol
                            Cúbrase la nariz y la boca al toser y estornudar con un pañuelo de papel desechable o con la parte interna del codo. Evitando el contacto directo (1 metro o 3 pies) con cualquier persona con síntomas de resfriado."
                        />

                        <Info 
                            url="https://miro.medium.com/max/2732/1*oo4XShWHTNhk34_8PUr8EQ.jpeg"
                            title="Comunicacion"
                            lista={["Reportar cualquier situación, síntoma a las siguientes lineas: ", "800142200-800101104-800101106", "Servicio de ayuda para Adultos Mayores ", "74580911", "76571911", "76902911","69451911","69433911", "69452911"]}
                        />

                        <Info 
                            url="https://clinic-cloud.com/wp-content/uploads/2015/08/mejores-hospitales-del-mundo.jpeg"
                            title="Emergencias"
                            lista={["(CB) Hospital Viedma ", "Telf: 4 4220232", "(CB) Hospital Harry Williams  ", "Telf: 4 4745612", "(CB) Hospital Cochabamba ", "Telf: 77929119", "(SC) Hospital Japonés ", "Telf: 3 3462031", "(SC) Hospital Católico ", "Telf: 3 3448883", "(LP) Hospital La Paz ", "Telf: 2 2432155", "(LP) Clínica Alemana ", "Telf: 2 2432155"]}

                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Container