import React from "react";

const Scrollbar = memo(props => {
    const {children} = props;
    return <Scrollbar>children</Scrollbar>
})

export default Scrollbar;