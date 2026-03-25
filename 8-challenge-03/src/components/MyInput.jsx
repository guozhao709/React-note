function MyInput({type, value, setValue, children}){
return (

    <label>
        {children}
        <input
            type={type}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    </label>
)
}

export default MyInput;