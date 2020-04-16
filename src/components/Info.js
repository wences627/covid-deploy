import React from 'react';


const Info = (props) => {
    return(
        <div>
          <div className="col s12 m6">
            <div className="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={props.url} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>

                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
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
