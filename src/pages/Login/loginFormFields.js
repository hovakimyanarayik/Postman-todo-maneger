const loginFields = [
    {
        name: 'email',
        label: 'Email',
        rules: [
            {
                required: true,
                message: 'Please input your Email!', 
            },
            {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Uncorrect Email'
            }
        ]
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        rules: [
            {
                required: true,
                message: 'Please input your password!', 
            },
            {
                min: 8,
                message: 'Password will consist 8 symbols'
            }
        ]
    }
]

export default loginFields