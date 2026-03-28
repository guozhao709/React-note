import { Button } from "@mui/material";
import useGetWeatherForcast from "../hooks/useGetWeatherForcast";
import Welcome from "./Welcome";
import CurrentWeather from "./CurrentWeather";

function Home({ getPosition, buttonText, setPageSwitched }) {
  const { getCurrentWeather, isMutating, data } =
    useGetWeatherForcast(getPosition);

  if (data) {
    return <CurrentWeather data={data} setPageSwitched={setPageSwitched} />;
  }
  return (
    <section>
      <Welcome />
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {buttonText}
      </Button>
    </section>
  );
}
export default Home;
