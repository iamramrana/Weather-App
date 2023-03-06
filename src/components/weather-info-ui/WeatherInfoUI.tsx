type WeatherInfoUIPopsType ={
    icon:string,
    temp:number,
    minTemp:number,
    maxTemp:number,
    city:string,
    dateInEpoch:number,
    skyStatus:string,
    wind:number,
    feelsLike:number,
    humidity:number,
    pressure:number
}
const WeatherInfoUI:React.FC<WeatherInfoUIPopsType>= ({
    icon,
    temp,
    minTemp,
    maxTemp,
    city,
    dateInEpoch,
    skyStatus,
    wind,
    feelsLike,
    humidity,
    pressure,
  }) => {
    return (
      <div
        style={{
          background: "linear-gradient(45deg,var(--bs-primary),lightblue)",
          padding: "15px",
          color: "white",
          borderRadius: "10px",
          marginBottom:'10px'
        }}
      >
        {/* <i className="wi-night-alt-lightning"></i> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{city}</h3>
          <h5>{new Date(dateInEpoch*1000).getHours() + ':' + new Date(dateInEpoch*1000).getMinutes()}</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1>{temp + " °C"}</h1>
            <h4>{skyStatus}</h4>
          </div>
          <div>
            <img src={`icons/${icon}.png`} />
          </div>
        </div>
  
        <div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ flex: 1 }}>
                  <ul style={{    listStyle: 'none',padding: 0}}>
                    <li>
                      <span>
                        Max Temp:&nbsp;
                      </span>
                      {maxTemp + " °C"}
                    </li>
                    <li>
                      <span>
                        Min Temp:&nbsp;
                      </span>
                      {minTemp + " °C"}
                    </li>
                    <li>
                      <span>
                        Feels Like:&nbsp;
                      </span>
                      {feelsLike + " °C"}
                    </li>
                  </ul>
              </div>
              <div style={{ flex: 1 }}>
                <ul style={{    listStyle: 'none',padding: 0}}>
                  <li>
                  <span>Wind:&nbsp;</span>
                  {wind + " m/s"}
                  </li>
                  <li>
                  <span>Humidity:&nbsp;</span>
                  {humidity + " %"}
                  </li>
                  <li>
                  <span>Pressue:&nbsp;</span>
                  {pressure + " hpa"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default WeatherInfoUI;