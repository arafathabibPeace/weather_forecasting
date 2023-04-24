import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../redux/action";
import { Link } from "react-router-dom";
const Logout = () => {
    let dispatch = useDispatch()
    const logouthandler = () => {
        dispatch(logout())
    }
    return <>
        <Button variant="contained" onClick={logouthandler}>Logout</Button>
    </>

}


export default Logout

