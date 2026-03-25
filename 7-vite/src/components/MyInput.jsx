function MyInput({uValue, setUvalue, uClass, uType}){
    return (
        <input
          type={uType}
          value={uValue}
          className={uClass}
          onChange={(event) => setUvalue(event.target.value)}
        />
    )
}

export default MyInput;