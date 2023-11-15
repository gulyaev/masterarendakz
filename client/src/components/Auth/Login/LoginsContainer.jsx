import { connect } from "react-redux";
import Login from "./Login";
import { loginThunkCreator } from "../../../redux/auth-reducer";
import Preloader from "../../common/Preloader";
import { message } from 'antd';

const LoginsContainer = (props) => {
    const [messageApi, contextHolder] = message.useMessage();

    const formSuccess = () => {
        messageApi.open({
            type: 'success',
            content: props.alertMessage,
        });
    };

    const formErrorCatch = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };

    const login = async (email, password) => {
        props.loginThunkCreator(email, password);

        if (props.alertMessage) {
            formSuccess();
            return;
        }
        if (props.errorMessage) {
            formErrorCatch(props.errorMessage);
        }
    };

    return (
        <>
            {contextHolder}
            {props.isFetching
                ?
                <Preloader />
                :
                <Login login={login} />
            }
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        alertMessage: state.auth.alertMessage,
        errorMessage: state.auth.errorMessage,
        userData: state.auth.userData
    }
}

export default connect(mapStateToProps, { loginThunkCreator })(LoginsContainer);