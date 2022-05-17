import React from "react"

const Data = ({ data }) => {
    console.log(data);

    return (
        <div>
            <div className="data">

                {data.name}

            </div>
        </div>
    )
};

export default Data;

/*
<img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
    <p>{data.main.temp}<p/>
    <p>{data.main.temp}</p>
    <p> Temperature in <strong>{data.name}</strong> today is  <strong>{data.main.temp}</strong>°C </p>
    <p> Temperature in <strong>{data.name}</strong> today is  <strong>{data.main ? data.main.temp : ''} </strong>°C </p> 
*/