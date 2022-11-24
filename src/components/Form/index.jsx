import React from 'react';
import { Button, Form as FormAnt, Input, InputNumber } from 'antd';
import styled from 'styled-components';

const { Item } = FormAnt

const Form = ({fields, onSubmit, buttonText, buttonIcon}) => {
    const onFinish = (values) => {
        onSubmit(values)
      };

    return ( 
        <CustomForm
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
                age: 18
            }}
        >
            {fields.map(field => (
                <Item
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    rules={field.rules}
                >
                    {field.type === 'password' ? 
                        <Input.Password /> : 
                        field.type === 'number' ? 
                        <InputNumber style={{ width: '100%' }} /> :
                        <Input />
                    }
                </Item>
            ))}

            <Button
                type='primary' 
                htmlType="submit"
                icon={buttonIcon}
            >
                {buttonText}
            </Button>

      </CustomForm>
     );
}

const CustomForm = styled(FormAnt)`
    width: 100%;
    max-width: 500px;

`
 
export default Form;