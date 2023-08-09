
const DropdownMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [articleType, setArticleType] = useState('제목');
    const articleTypeList = ['제목', '게시글', '작성자', '해시태그'];

    const articleBtnExpandHandler = () => {
        setIsExpanded(!isExpanded);
    };

    const articleTypeHandler = () => {
        
    }

    return (
        <>
            

            <div>
                
            </div>

            
        </>
    )
}

export default DropdownMenu;