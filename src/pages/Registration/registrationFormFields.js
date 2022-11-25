import loginFields from "../Login/loginFormFields"

const registrationFields = [
    {
        name: 'name',
        label: 'Name',
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