import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5";
// const APIKEY = "";

// Export an object with a "search" method that searches the Randomuser API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

//https://randomuser.me/api/?gender=female
//https://randomuser.me/api/?nat=gb
//https://randomuser.me/api/?dob=1993-07-20T09:44:18.674Z

