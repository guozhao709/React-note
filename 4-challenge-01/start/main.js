/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [isPurple, setIsPurple] = React.useState(false);
  const [textColor, setTextColor] = React.useState("");
  const [circleSize, setCircleSize] = React.useState("150");
  const [circleRotate, setCircleRotate] = React.useState("0");

  const circleClass = `${isPurple ? "purple" : ""} ${textColor}`;

  const circleStyle = {
    height: `${circleSize}px`,
    width: `${circleSize}px`,
    lineHeight: ` ${circleSize}px`,
    transform: `rotate(${circleRotate}deg)`,
  };

  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          checked={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(event) => {
            setTextColor(event.target.value);
          }}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={circleSize}
          onChange={(event) => {
            setCircleSize(event.target.value);
          }}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={circleRotate}
          onChange={(event) => {
            setCircleRotate(event.target.value);
          }}
        />
      </label>
      <div className={`circle ${circleClass}`} style={circleStyle}>
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
