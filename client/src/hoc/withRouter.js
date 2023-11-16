import React from "react";
import { useParams } from "react-router-dom";

export const withRouter = (Component) => {
    let WithURLDataContainerComponent = (props) => {
        const params = useParams();
            return (
                <Component {...props} params={params} />
            );
    }

    return WithURLDataContainerComponent;
}