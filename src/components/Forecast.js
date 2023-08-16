import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

export function Forecast({ data }) {
  const weeksDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDay = new Date().getDay();
  const foreCastDay = weeksDay
    .slice(currentDay, weeksDay.length)
    .concat(weeksDay.slice(0, currentDay));

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png `}
                  />
                  <label className="day"> {foreCastDay[i]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}° /
                    {Math.round(item.main.temp_min)}°
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label> Pressure</label>
                  <label> {item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label> Humidity</label>
                  <label> {item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label> Clouds</label>
                  <label> {item.clouds.all}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label> Wind Speed</label>
                  <label> {item.wind.speed} M/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label> See level</label>
                  <label> {item.main.sea_level} M</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like</label>
                  <label> {Math.round(item.main.feels_like)} </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
