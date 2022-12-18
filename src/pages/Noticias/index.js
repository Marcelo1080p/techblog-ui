import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Noticias = () => {
    return (
        <div>
            <h1 style={{color: "#FFF"}}>Noticias</h1>
            <Link to="/hello">
                <Button nome="Mudar De Pagina"/>
            </Link>
        </div>
    );
};


export default Noticias;