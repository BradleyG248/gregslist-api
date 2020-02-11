import HouseService from "../Services/HouseService.js"
import store from "../store.js"

function _draw() {
  if (store.State.active.houses) {
    let houses = store.State.houses;
    let template = '';
    houses.forEach(house => {
      template += house.Template;
    })
    document.getElementById("houses").innerHTML = template;
  }
  else {
    document.getElementById("houses").innerHTML = null;
  }
}
export default class HouseController {
  constructor() {
    console.log("House controller works")
    store.subscribe("houses", _draw);
    store.subscribe("active", _draw);
    this.getHouses();
  }
  getHouses() {
    HouseService.getHouses();
  }
  deleteHouse(id) {
    HouseService.deleteHouse(id);
  }
  tabToggle() {
    store.State.active.houses = true;
    store.State.active.cars = false;
    store.State.active.jobs = false;
    store.commit("active", store.State.active);
  }
  addHouse(event) {
    event.preventDefault();

    // NOTE formData is an alias for our submitted form from our html
    let formData = event.target;
    // NOTE newhouse is an object with all the inputted values from our form
    let newHouse = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      levels: formData.levels.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    };
    console.log(newHouse);
    HouseService.addHouse(newHouse);
    formData.reset();
    // @ts-ignore
    $("#house-form").modal("toggle");
  }
  bid(id, update) {
    HouseService.editHouse(id, 'price', update);
  }
}