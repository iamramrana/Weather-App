import { Accordion } from "react-bootstrap";
import { Days, Months } from "../../constants/constant";
import { IForecast } from "../../interfaces/IForecast";
import WeatherInfoUI from "../weather-info-ui/WeatherInfoUI";

type ForeCastViewPropsType = {
  forecastList: IForecast;
};

const ForecastView: React.FC<ForeCastViewPropsType> = ({ forecastList }) => {
  return (
    <>
      <h4>Weather Forecast</h4>
      <Accordion defaultActiveKey="0">
        {forecastList.list.map((item, index: number) => {
          return (
            <Accordion.Item eventKey={`${index}`} key={item.dt}>
              <Accordion.Header>
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <span>
                    {Days[new Date(item?.dt * 1000).getDay()] +
                      (new Date(item?.dt * 1000).setHours(0, 0, 0, 0) ==
                      new Date().setHours(0, 0, 0, 0)
                        ? "( Today )"
                        : `( ${
                            Months[new Date(item?.dt * 1000).getMonth()]
                          } ${new Date(item?.dt * 1000).getDate()}) `)}
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {item?.hourlyForeCastSteps?.map((step) => {
                  return (
                    <WeatherInfoUI
                      key={step?.dt}
                      icon={step?.weather ? step?.weather[0]?.icon : ""}
                      temp={step?.main?.temp}
                      minTemp={step?.main?.temp_min}
                      maxTemp={step?.main?.temp_max}
                      city={forecastList?.city}
                      dateInEpoch={step?.dt}
                      skyStatus={step?.weather ? step?.weather[0]?.main : ""}
                      wind={step?.wind.speed}
                      feelsLike={step?.main?.feels_like}
                      humidity={step?.main?.humidity}
                      pressure={step?.main?.pressure}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default ForecastView;
