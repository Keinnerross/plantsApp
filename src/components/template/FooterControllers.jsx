import React, { Fragment, useState } from "react";
import "../../../stylesheets/template/footerControllers.css"
import { MdHistoryEdu } from "react-icons/md";
import { IoWaterSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GiChestnutLeaf } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import CarePlants from "../FooterFunctions/CarePlants";
const FooterControllers = () => {

    const iconsConfig = {
        size: 30,
        color: "white"
    }

    const [isActiveCare, setIsActiveCare] = useState(false)

    const handleCare = () => {
        setIsActiveCare(!isActiveCare)
    }


    return (
        <Fragment>
            <CarePlants isActive={isActiveCare} handleActive={handleCare} />
            <div className="footerMain">
                <div className="footerSection">
                    <div className="actionButton"><AiFillHome size={iconsConfig.size} fill={iconsConfig.color} /></div>
                    <div className="actionButton"><MdHistoryEdu size={iconsConfig.size} fill={iconsConfig.color} /></div>
                    <div className="actionButton"><IoWaterSharp size={iconsConfig.size} fill={iconsConfig.color} onClick={() => handleCare()} /></div>
                    <div className="actionButton"><GiChestnutLeaf size={iconsConfig.size} fill={iconsConfig.color} /></div>
                    <div className="actionButton"><FaUserCircle size={iconsConfig.size} fill={iconsConfig.color} /></div>
                </div>

            </div >
        </Fragment>
    )
}

export default FooterControllers;