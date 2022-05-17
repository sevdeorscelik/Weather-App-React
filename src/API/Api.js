import axios from 'axios'
import { useEffect, useState } from "react"
import Data from '../components/Data'



const Api = () => {

    const apiKey = 'e50869fa0414d439bf8a29c6bbd5cb6d'


    const [data, setData] = useState({})
    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')


    useEffect(() => {
        async function getApi() {

            const response = await axios
                //.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
                .get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${search}&cnt=5&appid=e50869fa0414d439bf8a29c6bbd5cb6d`)
                .catch((err) => console.error(err))
            setData(response.data);

        }

        getApi()

    }, [search])

    //console.log(data);

    const onSubmit = () => {
        setSearch(value)
        setValue('')
         
    }

    return (
        <div className='api'>
            <div>
                <input onChange={(e) => setValue(e.target.value)} value={value} type='text' className='input-api' />
                <button onClick={onSubmit} >click</button>

                {Object.entries(data).length !== 0 &&
                    (
                        < Data data={data} />
                    )
                }

                < pre >
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div >
    )

}
//<button onClick={() => {}} >click</button>
//onChange={(e) => setSearch(e.target.value)}

export default Api

