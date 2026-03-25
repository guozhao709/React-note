function TogglePurple({ isPurple, setIsPurple }){

    return (
        <label>
            Purple
            <input
                type="checkbox"
                onChange={() => setIsPurple(!isPurple)}
                checked={isPurple}
            />
        </label>
    )

}

export default TogglePurple;