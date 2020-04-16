import React from 'react';

const InfoBolivia = ({datosPais}) => {
    return(
        <div className="row center">
            <div className="col s12">
              <div className="card">
                <div className="card-image">
                  <img src="https://www.boliviahop.com/wp-content/uploads/boliviahop-facts-guide.jpg" alt='Bolivia'/>
                  <span className="card-title">Nuestra Bolivia</span>
                </div>
                <div className="card-content">
                    <img src="https://t3.ftcdn.net/jpg/03/19/08/70/240_F_319087073_PBXESAT1j00AjxfAe26kfjPlvWTk9nWO.jpg" alt="bolivia" className="icono"/>
                    <p><b>Pais:</b> {datosPais.country}</p>
                    <img className="icono" src="https://image.flaticon.com/icons/png/128/2755/2755829.png" alt="infectados"/>
                    <p><b>Total Infectados:</b> {datosPais.cases} </p>
                    <img src="https://t4.ftcdn.net/jpg/02/63/41/31/240_F_263413128_CDp3U2rr0BFZ0EHQ3irnFGPyKkaHFKJH.jpg" alt="critico" className="icono"/>
                    <p><b>Estado Critico:</b> {datosPais.critical} </p>
                    <img src="https://www.flaticon.es/premium-icon/icons/svg/2514/2514223.svg" alt="death" className="icono"/>
                    <p><b>Total Muertos:</b> {datosPais.deaths}</p>
                    <img src="https://www.flaticon.es/premium-icon/icons/svg/2203/2203636.svg" alt="recuperados" className="icono"/>
                    <p><b>Recuperados:</b> {datosPais.recovered} </p>
                    <p><b>Casos de Hoy:</b> {datosPais.todayCases} </p>
                    <p><b>Muertes de Hoy:</b> {datosPais.todayDeaths} </p>
                    <img src="https://cdn.icon-icons.com/icons2/944/PNG/128/medical-04_icon-icons.com_73919.png" alt="test" className="icono"/>
                    <p><b>Pruebas Realizadas:</b> {datosPais.totalTests} </p>
                </div>
                <div className="card-action center">
                  <a href="https://www.minsalud.gob.bo/">Noticias Bolivia</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default InfoBolivia