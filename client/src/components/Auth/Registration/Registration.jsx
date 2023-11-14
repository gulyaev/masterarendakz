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

const Registration = ({ registration }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [prof, setProf] = useState("");

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
                    name={['user', 'name']}
                    label="Имя или Ник"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите Имя или Ник!',
                        },
                    ]}
                >
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>

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
                    style={{ marginBottom: "70px" }}
                    name="confirm"
                    label="Подтвердите пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста подтвердите пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Новые пароли которые вы ввели не совпадают!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="prof"
                    label="Специализация"
                    rules={[
                        {
                            required: false,
                            message: 'На чем вы специализируетесь?',
                        },
                    ]}
                >
                    <Input value={prof} onChange={(e) => setProf(e.target.value)} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" onClick={() => registration(name, email, password, prof)}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Registration;