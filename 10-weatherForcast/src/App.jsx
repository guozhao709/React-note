import Container from "./components/Container";
import Forecast from "./components/Forecast";
import Home from "./components/Home";
import useGeolocation from "./hooks/useGeolocation.js";
import { useState, Activity } from "react";

function App() {
  const { getPosition, buttonText, position } = useGeolocation();
  const [pageSwitched, setPageSwitched] = useState(true);

  return (
    <Container>
      <Activity mode={pageSwitched ? "active" : "hidden"}>
        <Home getPosition={getPosition} buttonText={buttonText} setPageSwitched={setPageSwitched} />
      </Activity>
      <Activity mode={!pageSwitched ? "active" : "hidden"}>
        <Forecast position={position} setPageSwitched={setPageSwitched} />
      </Activity>
    </Container>
  );
}

export default App;
