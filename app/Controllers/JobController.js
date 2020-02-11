import JobService from "../Services/JobService.js"
import store from "../store.js"

function _draw() {
  if (store.State.active.jobs) {
    let template = ''
    let jobs = store.State.jobs;
    jobs.forEach(job => {
      template += job.Template;
    })
    document.getElementById("jobs").innerHTML = template;
  }
  else {
    document.getElementById("jobs").innerHTML = null;
  }

}
export default class JobController {
  constructor() {
    console.log("Job Controller works")
    store.subscribe("jobs", _draw);
    store.subscribe("active", _draw);
    this.getJobs();
  }
  tabToggle() {
    store.State.active.houses = false;
    store.State.active.cars = false;
    store.State.active.jobs = true;
    store.commit("active", store.State.active);
  }
  getJobs() {
    JobService.getJobs();
  }
  addJob(event) {
    event.preventDefault();

  }
}