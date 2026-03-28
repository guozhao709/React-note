import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';

function CurrentWeather({data, setPageSwitched}) {
  return <section className={styles.section}>
  <Day temp={data.main} iconCode={data.weather[0].icon} />
  <Button  variant="contained" size="large" onClick={() => setPageSwitched(false)}>
          Get WeatherForecast
        </Button>
  </section>;
}
export default CurrentWeather;
