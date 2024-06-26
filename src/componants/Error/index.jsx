import { Link } from "react-router-dom";
import "../../styles/css/error/style.css";

function Error() {
  return (
    <div className="error__conteneur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
