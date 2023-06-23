import "./style.css";
import React from "react";

export const DashboardCard = ({ sectionTitle, description, icon, link }) => {
    return (<div className="dasboard-card">

        <h3>{sectionTitle}</h3>
        <div className="icon-wrapper">
            {icon}
        </div>
        <p>{description}</p>

        <a href={link} >Zobacz wiecej &gt;</a>

    </div>);
};

export default DashboardCard;