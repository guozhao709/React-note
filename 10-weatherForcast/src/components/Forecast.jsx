import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import useSWR from "swr";
import { forecastFetcher } from "../utils/fetcher";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ position, setPageSwitched }) {
  const weatherForecasts = [
    {
      id: 1,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 2,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 3,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
    {
      id: 4,
      weatherIcon: "https://openweathermap.org/img/wn/10n@2x.png",
      min: "20",
      max: "30",
      weather: "Rain",
      date: "2024-04-03",
    },
  ];

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const latitude = position?.latitude;
  const longitude = position?.longitude;

  const { data, error } = useSWR(
    `${API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    forecastFetcher,
  );

  const weatherForecastList = data?.list.map((item) => {
    return {
      id: item.dt,
      weatherIcon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      min: item.main.temp_min,
      max: item.main.temp_max,
      weather: item.weather[0].main,
      date: item.dt_txt,
    }
  }).filter((item)=>{
    return item.date.includes("12:00:00");
  })

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {weatherForecastList?.map((weatherForecast) => (
        <ListItem key={weatherForecast.id}>
          <ListItemAvatar>
            <Avatar>
              <img width={48} src={weatherForecast.weatherIcon} alt="" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={weatherForecast.weather}
            secondary={weatherForecast.date.split(" ")[0]}
          />
          <span>
            {Math.floor(weatherForecast.min)}&deg;/
            {Math.ceil(weatherForecast.max)}
            &deg;
          </span>
        </ListItem>
      ))}
      <Button
        variant="contained"
        size="large"
        onClick={() => setPageSwitched(true)}
      >
        GoBack to HomePage
      </Button>
    </List>
  );
}
export default Forecast;
