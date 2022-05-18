import Clear from '../images/clearday3.jpg'
import Cloudy from '../images/cloudyday1.jpg'
import Rainy from '../images/rainyday1.jpg'
import Overcast from '../images/overcastday1.jpg'
import Snow from '../images/snowday2.jpg'
import Storm from '../images/stormday2.jpg'
import Sunny from '../images/sunnyday2.jpg'
import Nightclouds from '../images/nightclouds.jpg'
import Nightrain from '../images/nightrain.jpg'
import Nightsky from '../images/nightsky.jpg'



export const BgImages = {
  day: {
    clear: Clear,
    cloudy: Cloudy,
    rain: Rainy,
    overcast: Overcast,
    snow: Snow,
    storm: Storm,
    sunny: Sunny
  },
  night: {
    cloudy: Nightclouds,
    rain: Nightrain,
    clear: Nightsky,
  },
};




//style={{background : `url(${Clear}) no-repeat`, height: "100vh"}}