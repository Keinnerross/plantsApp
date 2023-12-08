import "../../../stylesheets/template/header.css"
import { LuMenu } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
const Header = ({ handleActive }) => {


    const settingIcon = {
        color: "#fff",
        size: "25"
    }

    return (
        <div className="headerContainer">
            <div className="headerSection">

                <LuMenu size={settingIcon.size} />
                <a href="https://keinnerross.github.io/plantsApp/"><div className="logoHeader">
                </div></a>
                <div className="circleLight" onClick={() => handleActive()}>
                    <FaLightbulb size={18} color="#08C08F" />
                </div>
            </div>

        </div >
    )
}

export default Header;