import React from "react";
import "../stylesheets/Testimonio.css"

function Testimonio(props) {
    return(
      <div className="contenedor-testimonio">
          <img className="imagen-testimonio"
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            alt="Foto emma" />
            <div className="contenedor-texto-testimonio">
              <p className="nombre-testimonio"><b>{props.nombre}</b> in <strong>{props.pais}</strong> </p>
              <p className="cargo-testimonio">{props.cargo} at <b>{props.empresa}</b></p>
              <p className="texto-testimonio" dangerouslySetInnerHTML={{__html: props.testimonio}}></p>
            </div>
        </div>
    );
}


export default Testimonio;