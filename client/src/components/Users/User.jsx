import React from "react";

const User = (props) => {
    return (
        <>
            <div>{props.name}</div>
            <div style={{ marginBottom: "20px" }}>{props.prof}</div>
        </>
    )
}

export default User;