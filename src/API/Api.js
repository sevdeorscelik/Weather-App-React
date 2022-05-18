import axios from 'axios'
import { useEffect, useState } from "react"
import City from '../components/City'
import BgImages from '../components/BgImages'




const Api = () => {

    //const apiKey = 'e9a52710e7a3d2c9da91287969102a28'
    const apiKey = '35555b2c72ac4a89bf1222251221705'


    const [data, setData] = useState({})
    const [search, setSearch] = useState('izmir')
    const [value, setValue] = useState('')


    useEffect(() => {
        async function getApi() {

            const response = await axios
                //.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}&units=metric&days=3`)
                .get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&days=3&aqi=yes&alerts=no`)
                .catch((err) => console.error(err))
            setData(response.data);

        }

        getApi()

    }, [search])

    console.log(data);

    const onSubmit = () => {
        setSearch(value)
        setValue('')

    }

    return (
        <div className='api'>
            
                <input onChange={(e) => setValue(e.target.value)} value={value} type='text' className='input-api' />
                <button onClick={onSubmit} >click</button>

                {Object.entries(data).length !== 0 &&
                    (
                        < City data={data} />

                    )
                }
            
            
        </div >
    )

}


export default Api



/*
    < pre >
        {JSON.stringify(data, null, 2)}
    </pre>
*/