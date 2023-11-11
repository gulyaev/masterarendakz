import { connect } from "react-redux";
import Registration from "./Registration";
import { setIsFetching, setAlertMessage, setErrorMessage } from "../../../redux/auth-reducer";
import axios from 'axios';
import Preloader from "../../common/Preloader";
import { message } from 'antd';

const RegistrationsContainer = (props) => {
    const [messageApi, contextHolder] = message.useMessage();

    const formSuccess = () => {
        messageApi.open({
            type: 'success',
            content: props.alertMessage,
        });
    };

    const formError = () => {
        messageApi.open({
            type: 'error',
            content: props.errorMessage,
        });
    };

    const registration = async (name, email, password) => {
        try {
            props.setIsFetching(true);
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password
            });
            props.setIsFetching(false);
            props.setAlertMessage(response.data.message);
            if (props.alertMessage) {
                formSuccess();
            }
        } catch (error) {
            props.setErrorMessage(error.response.data.message);
            if (props.errorMessage) {
                formError();
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
                <Registration registration={registration} />
            }
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        alertMessage: state.auth.alertMessage,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, { setIsFetching, setAlertMessage, setErrorMessage })(RegistrationsContainer);