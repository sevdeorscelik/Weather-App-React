import axios from 'axios'
import { useEffect, useState } from "react"
import CurrentDay from '../components/CurrentDay'
import {BgImages} from '../components/BgImages'
//import Clear from '../images/clearday3.jpg'

const Api = () => {

    //const apiKey = 'e9a52710e7a3d2c9da91287969102a28'
    const apiKey = '35555b2c72ac4a89bf1222251221705'

    const [data, setData] = useState({})
    const [search, setSearch] = useState('izmir')
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

    return (
        <div
            className='api'
            style={{ background: `url(${BgImages.night.rain})` , backgroundSize: 'cover', backgroundPosition:'center'}}
        >
            <input onChange={(e) => setValue(e.target.value)} value={value} type='text' className='input-api' />
            <button onClick={onSubmit} >click</button>

            {Object.entries(data).length !== 0 &&
                (
                    < CurrentDay data={data} />
                )
            }
        </div >
    )
}

export default Api


// style={{ background: `url(${Clear}) `}}
////style={{background : `url(${Clear}) no-repeat`, height: "100vh"}}

/*
    < pre >
        {JSON.stringify(data, null, 2)}
    </pre>
*/