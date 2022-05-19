import React from "react"
import { daysName } from './CurrentDate'

const ForecastDays = ({ data }) => {

    //console.log(data.city.name);
    const forecastDay = data.forecast.forecastday
    return (
        <div className="ForecastDays">
            <div className="days">
                {
                    daysName.map(dayName => <div className="dayName">{dayName}</div>)
                }
            </div>
            <div className="card-container">


                {
                    forecastDay.map(days => {
                        return (
                            <div className="card">
                                <img className="day-icon" src={"https:" + days.day.condition.icon} alt="icon" />
                                <div className="day-temp"><strong> {days.day.avgtemp_c} °C</strong></div>
                                <div className="day-info">{days.day.condition.text}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};

export default ForecastDays;
