
const TitleBox = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value);    //e.target: StateBox 객체
    };

    return (
        <>
            
            <select onChange={handleChange}>
                {props.states.map((state) => (
                    <option key={state.id} value={state.current} defaultValue={props.defaultValue === state.current}>
                        {state.current}
                    </option>
                ))}
            </select>

        </>
    )
}

export default TitleBox;