import Container from "./components/Container";
import Forecast from "./components/Forecast";
import Home from "./components/Home";
import useGeolocation from "./hooks/useGeolocation.js";

function App() {
  const { getPosition, buttonText } = useGeolocation();

  return (
    <Container>
      <Home getPosition={getPosition} buttonText={buttonText} />
      {/* <Forecast /> */}
    </Container>
  );
}

export default App;
