import loginFields from "../Login/loginFormFields"

const registrationFields = [
    {
        name: 'username',
        label: 'Username',
        rules: [
            {
                required: true,
                message: 'Please input your Name!', 
            }
        ]
    },
    {
        name: 'age',
        label: 'Age',
        type: 'number',
        rules: [
            {
                required: true,
                message: 'Please input your age!', 
            }
        ]
    },
    ...loginFields
]

export default registrationFields