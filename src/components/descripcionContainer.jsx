import dataPlants from "../Data/localdata"

const DescripcionContainer = ({ id }) => {
    return (
        <div>
            <h2>{dataPlants[id].nombre}</h2>
            <p>{dataPlants[id].Descripción}</p>

            <span>{dataPlants[id].Origen}</span>

        </div>
    )
}

export default DescripcionContainer