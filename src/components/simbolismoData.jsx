import dataPlants from "../Data/localdata"

const SimbolismoData = ({ id }) => {
    return (
        <div className="simbolismoContainer">
            <h3>Simbología</h3>
            <span>{dataPlants[id].Simbolismo}</span>
        </div>
    )
}

export default SimbolismoData;