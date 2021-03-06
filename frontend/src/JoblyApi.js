import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      let token = window.localStorage.getItem('_token')
      
    // paramsOrData._token = token

      
      //( for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `${BASE_URL}/${endpoint}`,
          headers: {"authorization" : token},
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async getAll(handle){
      let res = await axios.get(`http://localhost:3001/${handle}`)
      return res.data[handle]
    }

    static async searchCompanies(name){
      let res = await this.request(`companies`, {name})
      return res.companies
    }

    static async searchJobs(title){
      let res = await this.request(`jobs`, {title})
      return res.jobs
    }

  
    static async get(type, handle) {
      let res = await this.request(`${type}/${handle}`);
      return res.company;
    }


    static async logIn(data){
        let res = await this.request('auth/token', data, 'post')
        localStorage.setItem('_token', res.token)
        return res.token
    }


    static async register(data){
      let res = await this.request('auth/register', data, 'post')
      localStorage.setItem('_token', res.token)
      return res.token
    }

    static logout(){
      localStorage.removeItem('_token')
    }

    static async getUser(username){
      let res = await this.request(`users/${username}`)
      return res.user
    }

    static async update(username, data){
      let res = await this.request(`users/${username}`, data, 'patch')
     
      return res.user
    }

    static async apply(username, id){
      let res = await this.request(`users/${username}/jobs/${id}`,{}, "post");
      return res;

    }

    static async getAppliedJobs(username){
      let res = await this.request(`users/${username}`)
      return res.user.applications

    }
  }

  export default JoblyApi