import React from "react"
import ForecastDays from './ForecastDays'

import { WiHumidity } from "react-icons/wi";

const CurrentDay = ({ data }) => {

    const icon = data.current.condition.icon

    return (
        <div>
            <div className="CurrentDay" >
                <div className="current-day-container">
                    <h1 className="city-name">
                        {data.location.name}
                    </h1>
                    <div className="current-day">

                        <p className="current-temp">
                            {data.current.temp_c}  °C
                        </p>
                    </div>
                    <div className="current-info">
                        <div className="current-info-part1">
                            <div className="flex">
                                <img  src={"https:" + icon} alt="icon" />
                                <div className="current-status">{data.current.condition.text}</div>
                            </div>
                            <div className="flex">
                                <WiHumidity size={30}/>
                                <div className="current-humidity">Humidity <br/> {data.current.humidity} %</div>
                            </div>
                        </div>
                        <div className="current-info-part2">
                            <div> <small>Wind: </small>{data.current.wind_kph} km/s</div>
                            <div> <small>RealFeel: </small>{data.current.feelslike_c} °C</div>
                            <div> <small>Visibility: </small>{data.current.vis_km} km/h</div>
                        </div>
                    </div>
                </div>




            </div>
            <ForecastDays data={data} />
        </div>
    )
};

export default CurrentDay;
//{data.location.name}

/*{
    data.list.map(day => {
        return <p>{day.dt_txt}</p>
    } )
}
*/
