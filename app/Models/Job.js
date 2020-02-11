export default class Job {
  constructor(data) {
    this._id = data._id,
      this.company = data.company,
      this.jobTitle = data.jobTitle,
      this.hours = data.hours,
      this.rate = data.rate,
      this.description = data.description
  }
  get Template() {
    return `
    <div class="col-6 col-md-3">
        <div class="card">
              <div class="card-body">
                <h5 class="card-title">Work as a ${this.jobTitle}  at ${this.company}. Work ${this.hours} hours a week at an hourly rate of $${this.rate}</h5>
                <p class="card-text">${this.description}</p>
                <button class="btn btn-info" onclick="">Apply</button>
                <button class="btn btn-danger" onclick="app.carsController.delete('${this._id}')">DELETE</button>
              </div>
            </div>
          </div>
    `
  }
}