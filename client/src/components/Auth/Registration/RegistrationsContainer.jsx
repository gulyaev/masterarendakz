import { connect } from "react-redux";
import Registration from "./Registration";
import { registrationThunkCreator } from "../../../redux/auth-reducer";
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

    const registration = async (name, email, password, prof) => {
        props.registrationThunkCreator(name, email, password, prof);
        if (props.alertMessage) {
            formSuccess();
        }
        if (props.errorMessage) {
            formError();
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

export default connect(mapStateToProps, { registrationThunkCreator })(RegistrationsContainer);