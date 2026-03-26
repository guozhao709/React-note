import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import { getCurrentWeather } from '../api/getWeatherApi';

function Home({getPosition, buttonText}) {

  const getWeatherForcast = async () => {

    const { latitude, longitude } = await getPosition();
    const data = await getCurrentWeather(latitude, longitude);
    console.log("weatherObject:", data);
  };

  return (
    <section className={styles.section}>
      <Day />
      <Button variant="contained" size="large" onClick={getWeatherForcast}>
        {buttonText}
      </Button>
    </section>
  );
}
export default Home;
