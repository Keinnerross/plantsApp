import DescripcionContainer from "./descripcionContainer";
import FotosContainer from "./fotos";
import "../../stylesheets/cardMain.css"
import CirclesData from "./circlesData";
import SimbolismoData from "./simbolismoData";
import { useParams } from 'react-router-dom';


const CardMain = () => {
    const { idRender } = useParams();

    return (
        <div className="cardMainContainer">
            <div className="cardImgSection">
                <FotosContainer id={idRender} />
            </div>
            <div className="cardMainSection">
                <DescripcionContainer id={idRender} />

                <CirclesData id={idRender} />

                <SimbolismoData id={idRender} />
            </div>
        </div>
    )
}

export default CardMain;