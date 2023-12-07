import { MdLocationPin } from "react-icons/md";
import { GiWateringCan } from "react-icons/gi";

import { FaSeedling } from "react-icons/fa";
import "../../stylesheets/circlesData.css";
import dataPlants from "../Data/localdata"


const CirclesData = ({ id }) => {

    const settingIcon = {
        color: "#fff",
        size: "25"
    }

    return (
        <div className="circlesDataContainer">
            <div className="circlesDataSection">

                <div className="iconMain">

                    <div className="iconContainer"><MdLocationPin size={settingIcon.size} fill={settingIcon.color} />

                    </div>
                    <div className="iconDescription">
                        <h2>Ubic</h2>
                        <span>{dataPlants[id].Ubicación}</span>
                    </div>
                </div>
                <div className="iconMain">

                    <div className="iconContainer"><GiWateringCan size={settingIcon.size} fill={settingIcon.color} />
                    </div>
                    <div className="iconDescription">
                        <h2>Riego</h2>
                        <span>{dataPlants[id].riego}</span>
                    </div>




                </div>
                <div className="iconMain">

                    <div className="iconContainer"><FaSeedling size={settingIcon.size} fill={settingIcon.color} /></div>


                    <div className="iconDescription">
                        <h2>Repro</h2>
                        <span>{dataPlants[id].Reproduccion}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CirclesData;

