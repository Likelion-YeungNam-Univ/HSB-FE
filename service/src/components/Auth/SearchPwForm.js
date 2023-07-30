import React,{useState} from "react";
import { useEffect } from "react";

const SearchPwForm = () => {
    const initDate = Object.freeze({
        id:''
    });
    const [data,updateDate] = useState(initDate);
    const [color, updateColor] = useState()

    useEffect(() => {
        if(data.id.length > 0) {
            updateColor();
        } else {
            updateColor();
        }
    }, [data])


    const handleChange = e => {
        console.log(e.target.value);
        updateDate({
            ...DataTransfer, [e.target.name] : e.target.value.trim()
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <SearchPwForm color={color}>
            <input
            type="text"
            name="id"
            placeholder="아이디"
            required
            onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={handleSubmit}>다음</button>
        </SearchPwForm>
    );
}

export default SearchPwForm;