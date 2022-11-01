import React from "react";

const Weather = props => (
    <div className="infoWeath ">
        {props.city &&
            <div>
                <p> Местоположение: {props.city}, {props.country}</p>
                <p>Температура °C: {props.temp - 273.15}</p>
            </div>
        }
        <p className="error">{ props.error }</p>
    </div>
);

export default  Weather;