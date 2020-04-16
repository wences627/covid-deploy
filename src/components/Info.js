import React from 'react';


const Info = (props) => {
    return(
        <div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src={props.url} alt='Foto'/>
              </div>
              <div className="card-content">
                <h5>{props.title}</h5>
                {props.text ? 
                  <p>{props.text}</p> :
                  <ul className="center">
                    {props.lista.map((fila, index) => (
                      <li className="linea" key={index}>{fila}</li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
    )
}

export default Info
