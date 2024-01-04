import { loginFailure, loginStart, loginSucess } from "./userRedux"
import {publicRequest} from "../requestMethods"

export const login = async (dispatch,user)=>{
      dispatch(loginStart());
      try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSucess(res.data))
        localStorage.setItem('userData', res.data.accessToken);

      } catch (error) {
        dispatch(loginFailure())
      }
}