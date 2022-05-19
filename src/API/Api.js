import axios from 'axios'
import { useEffect, useState } from "react"
import CurrentDay from '../components/CurrentDay'
import Footer from '../components/Footer'
import { BgImages } from '../components/BgImages'
import { BsSearch } from 'react-icons/bs'


const Api = () => {

    //const apiKey = 'e9a52710e7a3d2c9da91287969102a28'
    const apiKey = '35555b2c72ac4a89bf1222251221705'

    const [data, setData] = useState({})
    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')


    useEffect(() => {
        async function getApi() {

            const response = await axios
                .get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&days=3&aqi=yes&alerts=no`)
                .catch((err) => console.error(err))
            setData(response.data);
        }
        getApi()

    }, [search])

    const onSubmit = () => {
        setSearch(value)
        setValue('')
    }


    const condition = Object.entries(data).length !== 0 && data.current.condition.text;
    console.log(condition);

    const coditionStyle = {
        background:
            condition ?
                condition === "Sunny"
                    ? `url(${BgImages.sunny})`
                    : condition === "Clear"
                        ? `url(${BgImages.clear})`
                        : condition === "Cloudy" ||
                            condition === "Partly cloudy" ||
                            condition === "Heavy cloudy"
                            ? `url(${BgImages.cloudy})`
                            : condition === "Light rain shower" ||
                                condition === "Patchy rain possible" ||
                                condition === "Moderate rain" ||
                                condition === "Patchy light drizzle" ||
                                condition === "Light drizzle" ||
                                condition === "Moderate or heavy rain shower" ||
                                condition === "Thundery outbreaks possible" ||
                                condition === "Moderate or heavy rain with thunder" ||
                                condition === "Light rain" ||
                                condition === "Patchy light rain with thunder"

                                ? `url(${BgImages.rain})`
                                : condition === "Storm" ||
                                    condition === "Heavy rain at times"
                                    ? `url(${BgImages.storm})`
                                    : condition === "Snowstorm" ||
                                        condition === "Irregular light snow" ||
                                        condition === "Light snow" ||
                                        condition === "Medium heavy snow" ||
                                        condition === "Thick with snow"
                                        ? `url(${BgImages.snow})`
                                        : condition === "Mist" ||
                                            condition === "Overcast" ||
                                            condition === "Fog"
                                            ? `url(${BgImages.overcast})`
                                            : `url(${BgImages.general})`
                : `url(${BgImages.general})`
    };


    return (


        <div
            className='api'
            style={{ background: coditionStyle.background }}
        >
            <div className='search-cont'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type='text'
                    className='search-input'
                    placeholder='Please enter a city name...'
                />
                <button onClick={onSubmit} className='search-btn'> <BsSearch size={30} /> </button>
            </div>


            {Object.entries(data).length !== 0 &&
                (
                    < CurrentDay data={data} />
                )
            }

            <Footer />
            
        </div >
    )
}

export default Api

//backgroundSize: 'cover', backgroundPosition:'center', 
//style={{ background:`url(${coditionStyle.background})`, backgroundSize: 'cover', backgroundPosition: ' }}
//style={{background : `url(${BgImages.clear}) no-repeat`, height: "100vh"}}

/*
    < pre >
        {JSON.stringify(data, null, 2)}
    </pre>
*/


/*style=
{
                
    { background:`${coditionStyle.background}`, backgroundSize: 'cover', backgroundPosition: ' }
    
}*/