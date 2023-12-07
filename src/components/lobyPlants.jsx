import dataPlants from "../Data/localdata"
import "../../stylesheets/lobyPlants.css"

const LobyPlants = () => {
    return (
        <div className="lobyContainer">
            <div className="lobySection">
                <h2>Data de las plantas</h2>
                <table className="tableData">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Planta</th>
                            <th>Origen</th>
                            <th>Controles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPlants.map((data, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{data.nombre}</td>
                                <td>{data.Origen}</td>
                                <td>
                                    <a href={`http://127.0.0.1:5173/planta/${i}`}>
                                        <button className="showPlantBtn">Ver</button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}


export default LobyPlants;