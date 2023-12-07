import dataPlants from "../Data/localdata"
import "../../stylesheets/fotos.css"

const FotosContainer = ({ id }) => {


    const dataImg = dataPlants[id].fotoURL;

    return (

        dataImg == "" ? "no hay img" :
            <div className="imgPlantContainer" style={{ backgroundImage: `URL(${dataImg})` }}> </div>


    )
}

export default FotosContainer