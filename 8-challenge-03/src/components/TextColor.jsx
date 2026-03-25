function TextColor({ textColor, setTextColor }) {
  return (
    <label>
      text color
      <select
        value={textColor}
        onChange={(event) => setTextColor(event.target.value)}
      >
        <option value="" selected>
          White
        </option>
        <option value="text-black">Black</option>
        <option value="text-orange">Orange</option>
      </select>
    </label>
  );
}

export default TextColor;
