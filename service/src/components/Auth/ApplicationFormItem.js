import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicationFormItem = ({estimate_id, title}) => {
    const navigate = useNavigate();

    
    return (
        <>
                <button className="ApplicationBtn" onClick={() => navigate(`/EstimatePage/${estimate_id}`)}>
                    {title}
                </button>
                <br/>
        </>
    )
}

export default ApplicationFormItem;