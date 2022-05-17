import React from "react"
import Day from '../components/Day'

const City = ({ data }) => {

    const icon = data.current.condition.icon

    return (
        <div>
            <div className="City" >
                <h1 className="city-name">
                    {data.location.name}
                </h1>
                <div className="current-day">
                    <img className="current-icon" src={"https:" + icon} />
                    <p className="current-temp">
                        {data.current.temp_c}  °C
                    </p>
                </div>
                <div className="current-info">
                    <div className="current-status">{data.current.condition.text}</div>
                    <div className="current-info-content">
                        <div>rüzgar:{data.current.wind_kph} km/s</div>
                        <div>hissedilen:{data.current.feelslike_c}</div>
                        <div>görüs alanai:{data.current.vis_km}</div>
                    </div>
                </div>



            </div>
            <Day data={data} />
        </div>
    )
};

export default City;
//{data.location.name}

/*{
    data.list.map(day => {
        return <p>{day.dt_txt}</p>
    } )
}
*/
