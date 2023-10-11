import React from "react";

const WeatherStats = ({ name, data }) => {

    return (
        <p><b>{name}:</b> {data}</p>
    );
};
export default WeatherStats;