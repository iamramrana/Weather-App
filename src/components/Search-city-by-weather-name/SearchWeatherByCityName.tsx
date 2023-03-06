import { Fragment, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { IWeather } from "../../interfaces/IWeather";
import { APIService } from "../../services/api-service";

type SearchWeatherByCityNamePropsType = {
  listItemClickHandler: (item: IWeather) => Promise<void>;
};
const SearchWeatherByCityName: React.FC<SearchWeatherByCityNamePropsType> = ({
  listItemClickHandler,
}) => {
  const [searchList, setSearchList] = useState<IWeather[]>([]);
  const [city, setCity] = useState("");

  const searchClickHandler = async () => {
    if (city) {
      const response = await APIService.fetchCurrentWeather(city);
      if(response.ok){
        const resJson: any = await response.json();
        setSearchList([{ ...resJson }]);
      }else{
        alert("No data found!");
      }
    }
  };

  const onChangeHandler = ($event: any) => {
    setCity($event.target.value);
  };

  const searchItemClickHandler = (item: IWeather) => {
    listItemClickHandler(item);
    setSearchList([]);
  };

  return (
    <div className="d-flex">
      <div style={{ flex: "2", position: "relative" }}>
        <Form.Control
          type="search"
          value={city}
          onChange={onChangeHandler}
          placeholder="Enter city name here"
          className="me-2"
          aria-label="Search"
        />
        {searchList.length > 0 && (
          <ListGroup style={{ position: "absolute", width: "100%" }}>
            {searchList.map((item, index: number) => {
              return (
                <Fragment key={index}>
                  <ListGroup.Item
                    type="button"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    action
                    onClick={() => searchItemClickHandler(item)}
                  >
                    <span>{item?.name + ", " + item?.sys?.country}</span>
                    <span>{item?.main?.temp + " °C"}</span>
                    <img
                      src={`icons/${item?.weather ? item?.weather[0]?.icon : ''}.png`}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </ListGroup.Item>
                </Fragment>
              );
            })}
          </ListGroup>
        )}
      </div>
      <Button variant="outline-success" onClick={searchClickHandler}>
        Search
      </Button>
    </div>
  );
};
export default SearchWeatherByCityName;
