
const EstimateBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [articleType, setArticleType] = useState('제목');
    const articleTypeList = ['제목', '게시글', '작성자', '해시태그'];

    const articleBtnExpandHandler = () => {
        setIsExpanded(!isExpanded);
    };

    const articleTypeHandler = () => {
        
    }

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

export default EstimateBox;