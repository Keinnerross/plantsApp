import { Fragment } from "react"
import "../../../stylesheets/footterFunctions/carePlants.css"
import { IoIosHelpCircle } from "react-icons/io";


const CarePlants = ({ isActive, handleActive }) => {
    return (

        <div className={isActive ? "carePlantsContainer" : "hidden"} >
            <div className="CareControllers">
                <span color="lightgray" onClick={() => handleActive()}>x</span>
                <IoIosHelpCircle fill="lightgray" size={35} />
            </div>  
            <div className="carePlantsSection">
                <img className="imgContainer" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczYyZHhsem50M3QzbzVucTV1MDAwMHE5cHI2OXk1OTU0MTN5Mjc5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DYGbtrltNhHVX7xZTk/giphy.gif" alt="" />
                <h2>Cuidar una planta es abrazar la naturaleza en nuestro propio hogar</h2>
                <textarea id="nota" name="nota" rows="4" cols="50" placeholder="Deja una nota 🐶"></textarea>
                <div className="careButton">Listo (:</div>
            </div>
        </div >
    )
}

export default CarePlants