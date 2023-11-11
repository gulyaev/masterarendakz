import React, { useState } from "react";
import { Button, Form, Input } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} обязательное поле!',
    types: {
        email: 'Не похоже на email!',
    }
};
/* eslint-enable no-template-curly-in-string */

// const onFinish = (values) => {
//     console.log(values);
// };

const Login = ({ login }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Form
                {...layout}
                name="nest-messages"
                //onFinish={onFinish}
                style={{
                    maxWidth: 500,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Пожалуйста введите email!',
                        },
                    ]}
                >
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                    ]}
                >
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" onClick={() => login(email, password)}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login;