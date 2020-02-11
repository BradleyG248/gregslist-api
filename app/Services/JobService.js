import Job from "../Models/Job.js"
import store from "../store.js"


// @ts-ignore
let _api = axios.create({
  baseURL: ("//bcw-sandbox.herokuapp.com/api/jobs"),
  timeout: 3000
})
class JobService {
  getJobs() {
    _api.get("").then(res => {
      let jobs = res.data.data.map(job => new Job(job))
      store.commit("jobs", jobs);
    })
      .catch(error => {
        console.log(error);
      })
  }
}

const JOBSERVICE = new JobService();
export default JOBSERVICE;