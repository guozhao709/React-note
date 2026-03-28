import useSWRMutation from "swr/mutation";
import {fetcher} from "../utils/fetcher";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const useGetWeatherForcast = (getPosition) => {
  const { trigger, isMutating, data } = useSWRMutation(API_URL, fetcher);

  const getCurrentWeather = async () => {
    const { latitude, longitude } = await getPosition();
    await trigger({ latitude, longitude, API_KEY });
  };

  return {
    getCurrentWeather,
    isMutating,
    data,
  };
};

export default useGetWeatherForcast;
