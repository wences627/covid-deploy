import React from 'react';

const InfoGlobal = ({datosGlobal}) => {
    return(
      
        <div className="row center">
            <div className="col s12">
              <div className="card">
                <div className="card-image">
                  <img src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/article_cover_image/public/images/promo/article/2016/04/21/planeta-tierra-en-manos.jpg?itok=9pTpHCES"  alt='mundo'/>
                  <span className="card-title">Nuestro Planeta</span>
                </div>
                <div className="card-content">
                    <img className="icono" src="https://image.flaticon.com/icons/svg/2760/2760528.svg" alt="infectados"/>
                    <p><b>Total Infectados:</b> {datosGlobal.cases} </p>
                    <img src="https://www.flaticon.es/premium-icon/icons/svg/2514/2514223.svg" alt="death" className="icono"/>
                    <p><b>Total Muertos:</b> {datosGlobal.deaths}</p>
                    <img src="https://www.flaticon.es/premium-icon/icons/svg/2203/2203636.svg" alt="recuperados" className="icono"/>
                    <p><b>Recuperados:</b> {datosGlobal.recovered} </p>
                </div>
                <div className="card-action center">
                  <a href="https://news.un.org/es/events/cobertura-especial-de-noticias-onu-sobre-el-coronavirus">Noticias Global</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default InfoGlobal