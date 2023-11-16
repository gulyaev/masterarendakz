import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    let AuthRedirectComponentContainer = (props) => {
        if (!props.isAuth) {
            alert("Войдите чтобы посмотреть раздел пользователи");
            return <Navigate to={"/login"} />;
        }
        return <Component {...props} />
    }
    
    let ConnectedRedirectComponentContainer = connect(mapStateToPropsForRedirect)(AuthRedirectComponentContainer)

    return ConnectedRedirectComponentContainer;
}