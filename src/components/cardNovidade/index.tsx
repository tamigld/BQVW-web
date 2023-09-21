
import "./style.css";
import { Link } from "react-router-dom";

export default function CardNovidade(props:any) {
  return (
    <>
      <div id="cardEvento">
        <div>
        <p>{props.titulo}...</p>
        </div>
        <div>
          <Link className="link" target="_blank" to={props.link}>Saiba mais</Link>
        </div>
      </div>
    </>
    )
}

