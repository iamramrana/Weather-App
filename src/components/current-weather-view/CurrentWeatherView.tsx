import { IWeather } from "../../interfaces/IWeather"
import WeatherInfoUI from "../weather-info-ui/WeatherInfoUI"

type CurrentWeatherViewPropsType = {
    currentWeather:IWeather
}
const CurrentWeatherView:React.FC<CurrentWeatherViewPropsType> = ({
    currentWeather
})=>{
    return (
        <>
        <h4>Current Weather</h4>
                  <WeatherInfoUI
                    icon={currentWeather?.weather ? currentWeather?.weather[0]?.icon :''}
                    temp={currentWeather?.main?.temp}
                    minTemp={currentWeather?.main?.temp_min}
                    maxTemp={currentWeather?.main?.temp_max}
                    city={currentWeather?.name}
                    dateInEpoch={currentWeather?.dt}
                    skyStatus={currentWeather?.weather ? currentWeather?.weather[0]?.main :''}
                    wind={currentWeather?.wind.speed}
                    feelsLike={currentWeather?.main?.feels_like}
                    humidity={currentWeather?.main?.humidity}
                    pressure={currentWeather?.main?.pressure}
                  />
        </>
    )
}
export default CurrentWeatherView;