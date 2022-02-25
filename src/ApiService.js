import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";
const USER_API_BASE_URL = API_BASE_URL + "/users";
const PASSAPLYMAS_API_BASE_URL = API_BASE_URL + "/passAplyMas";
const SYSMAS_API_BASE_URL = API_BASE_URL + "/sysMas";

class ApiService {

  //users
  //map
  fetchUsers(){
    return axios.get(USER_API_BASE_URL);
  }

  fetchUserByID(userID){
    return axios.get(USER_API_BASE_URL + '/' + userID);
  }
  //vo
  deleteUser(userID){
    return axios.delete(USER_API_BASE_URL + '/' + userID);
  }
  
  addUser(user){
    return axios.post(USER_API_BASE_URL, user);
  }

  editUser(user){
    return axios.put(USER_API_BASE_URL + '/' + user.id, user)
  }
  
  //passAplyMas
  //map
  fetchPAMs(){
    return axios.get(PASSAPLYMAS_API_BASE_URL);
  }
  
  fetchSomePAMs(parameter){
    return axios.post(PASSAPLYMAS_API_BASE_URL + '/some', parameter);
  }

  fetchPAMByAplySeq(aplySeq){
    return axios.get(PASSAPLYMAS_API_BASE_URL + '/one/' + aplySeq);
  }

  //vo
  deletePAM(aplySeq){
    return axios.delete(PASSAPLYMAS_API_BASE_URL + '/one/' + aplySeq);
  }
  
  addPAM(pam){
    return axios.post(PASSAPLYMAS_API_BASE_URL + '/one', pam);
  }

  editPAM(pam){
    return axios.put(PASSAPLYMAS_API_BASE_URL + '/one/' + pam.aplySeq, pam)
  }
  
  //sysMas
  //map
  fetchSMs(){
    return axios.get(SYSMAS_API_BASE_URL);
  }
  
  fetchSomeSMs(parameter){
    return axios.post(SYSMAS_API_BASE_URL + '/some', parameter);
  }

  fetchSMBySysId(sysId){
    return axios.get(SYSMAS_API_BASE_URL + '/one/' + sysId);
  }

  //vo
  deleteSM(sysId){
    return axios.delete(SYSMAS_API_BASE_URL + '/one/' + sysId);
  }
  
  addSM(sm){
    return axios.post(SYSMAS_API_BASE_URL + '/one', sm);
  }

  editSM(sm){
    return axios.put(SYSMAS_API_BASE_URL + '/one/' + sm.sysId, sm)
  }

}

export default new ApiService();