

 const fetcher = async (API_URL, {arg}) => {
    const { latitude, longitude, API_KEY } = arg;
    const res = await fetch(
      `${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    const data = await res.json();
    return data;

  };

  const forecastFetcher = async (...args) => {
    const res = await fetch(...args);
    return await res.json();
  }

  export { fetcher, forecastFetcher };