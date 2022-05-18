import React from "react"

const Day = ({ data }) => {

    //console.log(data.city.name);
    const forecastDay = data.forecast.forecastday
    return (
        <div className="Day">
            <div className="card-container">

                {
                    forecastDay.map(days => {
                        return (
                            <div className="card">
                                <div>{days.date}</div>
                                <img className="day-icon" src={"https:" + days.day.condition.icon} alt="icon"/>
                                <div className="day-temp">ort temp: {days.day.avgtemp_c} °C</div>
                                <div className="day-info">info:{days.day.condition.text}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};

export default Day;
//<img className="day-icon" src={"https:" + days.condition.icon} />