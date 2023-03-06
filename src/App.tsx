import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { APIService } from "./services/api-service";
import SearchWeatherByCityName from "./components/Search-city-by-weather-name/SearchWeatherByCityName";
import ForecastView from "./components/forecast-view/ForecastView";
import CurrentWeatherView from "./components/current-weather-view/CurrentWeatherView";
import { IForecast, IForecastStepsList, IWeatherForecast } from "./interfaces/IForecast";
import { IWeather } from "./interfaces/IWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState<IWeather | null>(null);
  const [foreCastList, setForeCastList] = useState<IForecast | null>(null);

  const searchItemClickHandler = async (clickedObj: IWeather) => {
    const response = await APIService.fetchWeatherForecast(clickedObj.name);
    const resJson: IWeatherForecast = await response.json();
    let clickedSearchList = { ...clickedObj };
    setCurrentWeather(clickedSearchList);
    let list: IForecastStepsList[] = [];
    if(resJson && resJson.list){
      resJson.list.forEach((item:any) => {
        if (
          list.find(
            (i: any) =>
              new Date(i.dt * 1000).getDate() ===
              new Date(item.dt * 1000).getDate()
          )
        ) {
          let listItem:any = list.find(
            (i: any) =>
              new Date(i.dt * 1000).getDate() ===
              new Date(item.dt * 1000).getDate()
          );
          if (listItem.hourlyForeCastSteps) {
            listItem.hourlyForeCastSteps = [
              ...listItem.hourlyForeCastSteps,
              item,
            ];
          } else {
            listItem.hourlyForeCastSteps = [item];
          }
        } else {
          let newListItem:any = { dt: item.dt, hourlyForeCastSteps: [{ ...item }] }
          list.push(newListItem);
        }
      });
      setForeCastList({ city: resJson?.city?.name, list: list });
    }
  };

  return (
    <div>
      <Header />
      <main>
        <Container className="mt-20px">
          <Row>
            <Col>
              <SearchWeatherByCityName
                listItemClickHandler={searchItemClickHandler}
              />
            </Col>
          </Row>
          <Row className="mt-20px">
            <Col md={4}>
              {currentWeather && <CurrentWeatherView currentWeather={currentWeather} />}
            </Col>
            <Col md={8}>{foreCastList && <ForecastView forecastList={foreCastList} />}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
