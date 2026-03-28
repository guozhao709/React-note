// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// Weather icon URL
// https://openweathermap.org/img/wn/{weather icon}@2x.png

function Day({temp, iconCode}) {
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  function formatDay(dateStr) {
    return new Intl.DateTimeFormat('en', {
      weekday: 'short',
    }).format(new Date(dateStr));
  }

  return (
    <li className="day">
      <img src={weatherIconUrl} />
      <p>today</p>
      <p>
        {Math.floor(temp.temp_min)}&deg; &mdash; {Math.ceil(temp.temp_max)}
        &deg;
      </p>
    </li>
  );
}
export default Day;
