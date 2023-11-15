import { connect } from "react-redux";
import Login from "./Login";
import { setIsFetching, setAlertMessage, setErrorMessage, setUserData } from "../../../redux/auth-reducer";
import axios from 'axios';
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
        try {
            props.setIsFetching(true);
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            props.setUserData(response.data)
            localStorage.setItem('token', response.data.token);
            props.setAlertMessage("Вы успешно вошли")
            if (props.alertMessage) {
                formSuccess();
            }
            props.setIsFetching(false);
        } catch (error) {
            if (error.response.data.message) {
                props.setErrorMessage(error.response.data.message);
                formErrorCatch(error.response.data.message);
            }
            props.setIsFetching(false);
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

export default connect(mapStateToProps, { setIsFetching, setAlertMessage, setErrorMessage, setUserData })(LoginsContainer);