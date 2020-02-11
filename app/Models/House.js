export default class House {
  constructor(data) {
    this.id = data._id,
      this.bedrooms = data.bedrooms,
      this.bathrooms = data.bathrooms,
      this.imgUrl = data.imgUrl,
      this.levels = data.levels,
      this.year = data.year,
      this.price = data.price,
      this.description = data.description
  }
  get Template() {
    return `
    <div class="col-6 col-md-3">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms, ${this.levels} levels, ${this.year} BCE.</h5>
                <p class="card-text">${this.description} <b>$${this.price}</b></p>
                <button class="btn btn-info" onclick="app.houseController.bid('${this.id}', ${this.price + 100})">BID $100</button>
                <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">DELETE</button>
              </div>
            </div>
          </div>
    `
  }

}