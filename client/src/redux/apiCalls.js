import {loginStart,loginFailure,loginSuccess} from "./userRedux"
// import {publicRequest} from "../requestMethod"
import axios from "axios";

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'JWT fefege...',
//     "Access-Control-Allow-Origin": "*",
// }

export const login = async(dispatch, users)=>{
    dispatch(loginStart());
    try{

        const res = await axios.post("http://localhost:5000/api/auth/login", users,{
            // headers:headers
        });
        // console.log(res);
        dispatch(loginSuccess(res.data));
    }
    catch{
        dispatch(loginFailure());
    }
}