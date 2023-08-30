import axios from "axios";

const User_Api_Url='http://localhost:8083/api/a5/user'

class UserServiceClass{
      getAllUser(){
        return axios.get(User_Api_Url)
      }

      createUser(user){
        return axios.post(User_Api_Url, user)
      }

}
export default new UserServiceClass