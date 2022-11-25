import { useDispatch, useSelector } from "react-redux"
import { authorization } from "../slices/userSlice"

const useAuthorization = (type) => {
    const {authorizated, status} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(authorization({content: values, type: type}))
    }

    return {handleSubmit, state: {authorizated, status}}
}


export default useAuthorization