import Signup from '../pages/Signup';
import {axiosClient} from './axiosClient';
const UserAPI = {
    Login(user){

        const url = `/signin`;
        return axiosClient.post(url,user);
    },
    Signup(user2){

        const url = `/signup`;
        return axiosClient.post(url,user2);
    }
      
}
export default UserAPI