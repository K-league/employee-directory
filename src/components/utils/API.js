import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

function getUsers(seed, limit) {
  //Seeds allow you to always generate the same set of users.
  //Limit sets limit of how many results are returned.
  return axios.get(BASEURL + "?seed="+seed+"&results="+limit);
}

//https://randomuser.me/api/?gender=female
//https://randomuser.me/api/?nat=gb
//https://randomuser.me/api/?dob=1993-07-20T09:44:18.674Z

export default getUsers;