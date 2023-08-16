export function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`/icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temp"> {Math.round(data.main.temp)}° </p>
        <div className="details">
          <div className="parameter-row-top">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{data.main.feels_like}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> {data.wind.speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> {data.main.humidity} </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {data.main.pressure} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
